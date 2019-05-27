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


import json
from pprint import pprint

with open('historical_data.json') as f:
    hdata = json.load(f)
    
with open('forecasted_data.json') as f:
    fdata = json.load(f)


# In[3]:


@app.route("/")
def index():
    return render_template("index.html")


# In[ ]:





# In[5]:





# In[6]:





# In[7]:





# In[4]:


@app.route("/historical-data")
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


# In[ ]:





# In[12]:





# In[5]:


@app.route("/forecasted-data")
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





# In[ ]:


if __name__ == "__main__":
    app.run(debug=True)


# In[17]:





# In[ ]:




