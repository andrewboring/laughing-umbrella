#!/usr/bin/env python
# coding: utf-8

# In[1]:


import csv
import pandas as pd
import numpy as np
import json


from flask import Flask, render_template, request, redirect, url_for, jsonify
app = Flask(__name__)


# In[ ]:





# In[2]:


# Load data sets at application start, keep 'em in memory.
import json
from pprint import pprint

with open('data/historical_data.json') as f:
    hdata = json.load(f)
    
with open('data/forecasted_data.json') as f:
    fdata = json.load(f)


# In[2]:


# Load trained models at application start.
import pickle
multi_regressor_pkl = open("models/multi_regressor_model.pkl", 'rb')
multi_regressor_model = pickle.load(multi_regressor_pkl)

multi_variate_pkl = open("models/multi_variate_model.pkl", 'rb')
multi_regressor_model = pickle.load(multi_variate_pkl)


# In[ ]:


csvdataset = pd.DataFrame.from_csv("data/dataset.csv")
csvforecast = pd.DataFrame.from_csv("data/forecasted_data.csv")



# In[3]:


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/historical-data.csv")
def hdatacsv():
    return csvdataset.to_csv()
# In[5]:

@app.route("/forecasted-data.csv")
def fdatacsv():
    return csvforecast.to_csv()



# In[6]:





# In[4]:


@app.route("/historical-data.json")
def historical_data():
    return jsonify(hdata)
    # Create a dictionary from the row data and append to a list of 
    #data = []
    #for row in results:
        #historical_dict = {}
        #historical_dict["name"] = passenger.name
        #historical_dict["age"] = passenger.age
        #historical_dict"sex"] = passenger.sex
        #data.append(row)

    #return jsonify(results)



@app.route("/forecasted-data.json")
def forecasted_data():
    return jsonify(fdata)
    # Create a dictionary from the row data and append to a list of 
    #data = []
    #for row in results:
        #historical_dict = {}
        #historical_dict["name"] = passenger.name
        #historical_dict["age"] = passenger.age
        #historical_dict"sex"] = passenger.sex
        #data.append(row)

    #return jsonify(results)


# In[6]:


#@app.route("/update-data")
def update_data():
    return update.html


# In[ ]:


@app.route("/trends")
def trends():
    return render_template("trends.html")


# In[ ]:


@app.route("/forecast")
def forecast():
    return render_template("forecast.html")


# In[ ]:


@app.route("/predictor")
def predictor():
    return render_template("predictor.html")


# In[ ]:


@app.route("/summary")
def summary():
    return render_template("summary.html")


# In[ ]:


@app.route("/team")
def team():
    return render_template("team.html")


# In[ ]:


@app.route("/process")
def process():
    return render_template("process.html")


# In[ ]:


@app.route("/data")
def data():
    #return render_template("data.html", data=csvdataset.to_html(classes='table table-sm table-striped'))
    return render_template("data.html")


# In[ ]:


if __name__ == "__main__":
    app.run(debug=True)


# In[17]:





# In[ ]:




