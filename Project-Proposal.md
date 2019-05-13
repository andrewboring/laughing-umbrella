# Predicting the Next Real Estate Market Crash
Project Proposal
 
Team: Laughing Umbrella     
Team Members: Andrew Boring, Natalie Maize, Troy McCullough   
Date: May 2019  

## Abstract
In 2008, a [housing bubble](https://en.wikipedia.org/wiki/United_States_housing_bubble) was determined to have crashed around the same time the S&P Case-Schiller Home Price Index dropped at its fastest rate after cresting in 2006. The decline of 35 points from Jan 2008 to Dec 2008 indicated a 19% drop in value. Along with other economic events and indicators, this signified a recession.

This project examines U.S. economic indicators from 2000 to present and uses machine learning to develop a model for predicting an imminent market correction, such as a sudden decline in value, in the real estate market. 


 

## Hypothesis
Using economic indicators in the data sets listed below, we can create a machine learning model to receive input on a variety of variables to determine if a sudden downward market event is imminent.  


## Null Hypothesis
The economic indicators in this data set do not provide a prediction of future real estate market events.   
 

## Data
Data sets used in this project are gathered from public data sets from the following organizations:
 - Federal Housing Finance Agency - FHFA Housing Price Index
 - Housing and Urban Development - Housing Affordablility Data Survey
 - US Dept of Labor - Unemployment Rate
 - Federal Reserve Board - Household Debt Service and Financial Obligations
 - US Census - Market Absorption of Multifamily Units, New Residential Sales
 - Standard and Poor - Case-Schiller House Price Index
 
A [Data Catalog](https://github.com/andrewboring/laughing-umbrella/blob/master/Data-Catalog.md) provides source information and links.

## Approach

### Data Cleanup: Extract, Transform, Load
Many of the data sets are individual, periodic files (annual, monthly, etc), rather than a single, combined file. Additionally, many file formats change even within data sets in the same series. We will create Jupyter notebooks showing the data cleanup and combination process, which should result in a single, large combined data set with indicators as column headers and rows organized by month/year.

For data provided in quarterly periods, monthly values will be extrapolated. The AHS The final data set will be imported into a SQL database for querying.


### Initial Analysis and Model Creation
Jupyter notebooks will be created to demonstrate some simple aggregations and visualizations to help identify which machine learning models to incorporate. One or more regression models will be selected and a new Jupyter notebook will be created to build the model and train it. This notebook will be the basis for a retraining function in the final product.


### Visualization and Prediction
A Flask application will be created to access the data and retrain the model, and will also provide a user interface using standard HTML, CSS, and Javascript for visualization and predictive tasks. 


## Limitations
Economics is a complex discipline, with large interdependencies across economic zone boundaries. There are a number of variables contributing to such a prediction which are not considered here. 

Disclaimer: This is a data science class project to validate our knowledge of Python, Javascript, Data Engineering, and Working as a Team to answer a question using data analysis techniques and to display mastery of the Art of Storytelling in data science. If you're making a financial decision (eg, a real estate transaction) based on anything you read here, you're nuts.
