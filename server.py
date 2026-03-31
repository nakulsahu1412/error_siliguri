from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
# Added field_validator to the imports
from pydantic import BaseModel, Field, ConfigDict, field_validator 
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

class Booking(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    whatsapp: str
    date: str
    time: str
    guests: int
    occasion: Optional[str] = ""
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class BookingCreate(BaseModel):
    name: str
    whatsapp: str
    date: str
    time: str
    guests: int
    occasion: Optional[str] = ""

    @field_validator('name')
    @classmethod
    def validate_name(cls, v):
        if not v or not v.strip():
            raise ValueError('Name cannot be empty')
        return v.strip()

    @field_validator('whatsapp')
    @classmethod
    def validate_whatsapp(cls, v):
        if not v or not v.strip():
            raise ValueError('WhatsApp number cannot be empty')
        digits = ''.join(filter(str.isdigit, v))
        if len(digits) < 10:
            raise ValueError('Invalid WhatsApp number')
        return v.strip()

    @field_validator('guests')
    @classmethod
    def validate_guests(cls, v):
        if v < 1 or v > 50:
            raise ValueError('Number of guests must be between 1 and 50')
        return v

@api_router.get("/")
async def root():
    return {"message": "Error Brew & Pub API"}

@api_router.post("/bookings", response_model=Booking)
async def create_booking(input: BookingCreate):
    booking_dict = input.model_dump()
    booking_obj = Booking(**booking_dict)
    
    doc = booking_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.bookings.insert_one(doc)
    return booking_obj

@api_router.get("/bookings", response_model=List[Booking])
async def get_bookings():
    bookings = await db.bookings.find({}, {"_id": 0}).to_list(1000)
    
    for booking in bookings:
        if isinstance(booking.get('timestamp'), str):
            booking['timestamp'] = datetime.fromisoformat(booking['timestamp'])
    
    return bookings

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()