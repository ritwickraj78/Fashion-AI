from pydantic import BaseModel, validator, ValidationError
from typing import List, Optional
import enum

from data_loader import style_trends

Styles = enum.Enum("Styles", {k.upper(): k for k in style_trends.keys()})

class StyleList(BaseModel):
  styles: List[str]

class Trend(BaseModel):
  history: List[float]
  forecast: List[float]

class StyleTrend(BaseModel):
  style: str
  trend: Trend

class Color(BaseModel):
  r: int
  g: int
  b: int
  
  @validator('r', 'g', 'b')
  def should_be_in_valid_range(cls, v):
    if not (0 <= v <= 255):
      raise ValidationError("Color value should be in between 0 & 255 (inclusive).")
    return v

class Product(BaseModel):
  image: str
  pattern: Optional[str]
  avg_rating: float
  n_reviews: int
  trend: float
  color3: Color
