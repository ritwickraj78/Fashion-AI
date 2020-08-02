import json
import joblib

with open("../Datasets/style_trends.json") as fp:
  style_trends = json.load(fp)

color_model1 = joblib.load("../Models/color1_model.sav")
color_model2 = [joblib.load("../Models/color20_model.sav"),
          joblib.load("../Models/color21_model.sav"),
          joblib.load("../Models/color22_model.sav"),
          joblib.load("../Models/color23_model.sav"),
          joblib.load("../Models/color24_model.sav"),
          joblib.load("../Models/color25_model.sav")]

with open("../Datasets/ColorCluster.json") as fp:
  fashion_data = json.load(fp)
