# Predicting the Next Real Estate Market Crash
Project Proposal
 
Team: Laughing Umbrella     
Team Members: Andrew Boring, Natalie Maize, Troy McCullough   
Date: May 2019  

## Abstract
This project examines U.S. economic indicators from 2000 to present and uses machine learning to develop a model for predicting an imminent market correction, such as a sudden decline in value, in the real estate market. 

In 2008, a (housing bubble)[https://en.wikipedia.org/wiki/United_States_housing_bubble] was determined to have crashed when the S&P Case-Schiller Home Price Index dropped at it's fastest rate after cresting in 2006. The decline of 35 points from Jan 2008 to Dec 2008 indicated a 19% drop in value, and along with other economic events, signifyed a recession.
 

## Hypothesis
Using economic indicators in the data sets listed below, we can create a machine learning model to receive input on a variety of variables to determine if a sudden downward market event is imminent.  


## Null Hypothesis
The economic indicators in this data set do not provide a prediction of future real estate market events.   
 

## Data
Data sets used in this project are gathered from public data sets from the following organizations:
 - Federal Housing Finance Agency - Housing Price Index
 - Housing and Urban Development - Housing Affordablility Data Survey
 - US Dept of Labor - Unemployment Rate
 - Federal Reserve Board - Household Debt Service and Financial Obligations
 - US Census - Market Absorbtion of Multifamily Units, New Residential Sales
 - Standard and Poor - Case-Schiller House Price Index

## Approach

### Data Cleanup: Extract, Transform, Load
Many of the data sets are individual, periodic files (annual, monthly, etc), rather than a single, combined file. Additionally, many file formats change even within data sets in the same series. We will create Jupyter notebooks showing the data cleanup and combination process, which should result in a single, large combined data set with indicators as column headers and rows organized by month/quarter/year.

The data set will be imported into sqlite3 database for querying.


### Initial Analysis and Model Creation
Jupyter notebooks will be created to demonstrate some simple aggregations and visualizations to help identify which machine learning models to incorporate. One or more regression models will be selected and a new Jupyter notebook will be created to build the model and train it. This notebook will be the basis for a retraining function in the final product.


### Visualization and Prediction
A Flask application will be created to access the data and retrain the model, and will also provide a user interface using standard HTML, CSS, and Javascript for visualization and predictive tasks. 


## Limitations
Economics is a complex discipline, with large interdependencies across economic zone boundaries. There are a number of variables contributing to such a prediction which are not considered here. 

Disclaimer: This is a data science class project to validate our knowledge of Python, Javascript, Data Engineering, and Working as a Team to answer a question using data analysis techniques and to display mastery of the Art of Storytelling in data science. If you're making a financial decision (eg, a real estate transaction) based on anything you read here, you're nuts.
