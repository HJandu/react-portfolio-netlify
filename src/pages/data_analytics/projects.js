import real from '../../assets/images/real.png'
import oweather from '../../assets/images/pythonAPI.png'
import citi from '../../assets/images/tableau.png'
import big from '../../assets/images/bigdata.jpg'
import deep from '../../assets/images/deep.png'
import credit from '../../assets/images/creditrisk.jpg'
import crypto from '../../assets/images/cluster.png'
import plot from '../../assets/images/matplot.png'
import covid from '../../assets/images/covid.jpg'
import sproject from '../../assets/images/SQL.png'
import pokemon from '../../assets/images/pokemon.jpg'
import earthquake from '../../assets/images/mapping.png'

const projects = [
    {
        "id": 1,
        "name": "Machine Learning: Real Estate Regression",
        "image": real,
        "description": "A regression model to predict the price of houses based on given features.",
        "repo": "https://github.com/HJandu/Project_4",
        "deployed": "https://github.com/HJandu/Project_4"
    },
    {
        "id": 2,
        "name": "Python API",
        "image": oweather,
        "description": "A Python API that uses the OpenWeatherMap API to retrieve weather data for cities and uses the data to build a web app that helps travelers plan their trips.",
        "repo": "https://github.com/HJandu/python-api-challenge",
        "deployed": ""
    },
    {
        "id": 3,
        "name": "Tableau Citi Bike",
        "image": citi,
        "description": "A Tableau story that brings together the visualizations, requested maps, and dashboards about the Citibike program in New York City",
        "repo": "https://github.com/HJandu/tableau-citi-bike?tab=readme-ov-file",
        "deployed": "https://public.tableau.com/app/profile/hardip.jandu5326/vizzes"
    },
    {
        "id": 4,
        "name": "Big Data: Home Sales Analysis",
        "image": big,
        "description": "SparkSQL used to determine key metrics about home sales data.",
        "repo": "https://github.com/HJandu/Home_sales",
        "deployed": ""
    },
    {
        "id": 5,
        "name": "Deep Machine Learning: Neural Network",
        "image": deep,
        "description": "Created a binary classifier that can predict whether applicants will be successful if funded by Alphabet Soup",
        "repo": "https://github.com/HJandu/deep-learning-challenge",
        "deployed": ""
    },
    {
        "id": 6,
        "name": "Supervised Machine Learning: Credit Risk",
        "image": credit,
        "description": "Supervised machine learning models were used to identify credit risk in a dataset of financial transactions",
        "repo": "https://github.com/HJandu/credit-risk-classification",
        "deployed": ""
    },
    {
        "id": 7,
        "name": "CryptoClustering",
        "image": crypto,
        "description": "Python and unsupervised learning was used to predict if cryptocurrencies are affected by 24-hour or 7-day price changes.",
        "repo": "https://github.com/HJandu/CryptoClustering",
        "deployed": ""
    },
    {
        "id": 8,
        "name": "Matplotlib Pymaceuticals",
        "image": plot,
        "description": "I have applied what I have learned about Matplotlib to a real-world situation and dataset. ",
        "repo": "https://github.com/HJandu/Matplotlib-Pymaceuticals-Challenge",
        "deployed": ""
    },
    {
        "id": 9,
        "name": "Covid-19: Suicide Rates UK",
        "image": covid,
        "description": "Explored government datasets on suicide rates, comparing pre-pandemic and pandemic years.",
        "repo": "https://github.com/HJandu/Project_1_Covid19",
        "deployed": ""
    },
    {
        "id": 10,
        "name": "SQL Project",
        "image": sproject,
        "description": "Project about people whom Pewlett Hackard (a fictional company) employed during the 1980s and 1990s",
        "repo": "https://github.com/HJandu/SQL-Challenge",
        "deployed": ""
    },
    {
        "id": 11,
        "name": "POKEMON",
        "image": pokemon,
        "description": "An interactive page about Pokemon, using elements from an API to build a SQLite database to house the data.",
        "repo": "https://github.com/HJandu/Project_3-Pokemon",
        "deployed": ""
    },
    {
        "id": 12,
        "name": "Earthquake Mapping",
        "image": earthquake,
        "description": "Earthquake Visualisations created using leaflet plugins",
        "repo": "https://github.com/HJandu/leaflet-challenge",
        "deployed": ""
    }
]

export default projects;