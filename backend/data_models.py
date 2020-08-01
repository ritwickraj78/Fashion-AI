from pydantic import BaseModel
from typing import List
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
