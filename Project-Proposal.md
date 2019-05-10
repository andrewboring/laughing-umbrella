# Predicting the Next Real Estate Market Crash
## Project Proposal for Laughing Umbrella


## Abstract
This project examines economic indicators from 2000 to present and uses machine learning to develop a model for predicting a sudden decline in value, colloquially known as a "crash", in the real estate market.


## Hypothesis
Using economnic indicators in the data sets listed below, we can create a machine learning model to receive input on a variety of variables to determine if a 
 

## Data
Data sets used in this project are gathered from public data sets from the following organizations:
 - Federal Housing Finance Agency - Housing Price Index
 - Housing and Urban Development - Housing Affordablility Data Survey
 - US Dept of Labor - Unemployment Rate
 - Federal Reserve Board - Household Debt Service and Financial Obligations
 - US Census - Market Absorbtion of Multifamily Units, New Residential Sales


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

This is a class project. If you're basing a policy decision on anything you read here, you're nuts.
