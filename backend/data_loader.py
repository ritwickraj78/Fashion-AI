import json
import pydantic

with open("../Datasets/style_trends.json") as fp:
  style_trends = json.load(fp)
