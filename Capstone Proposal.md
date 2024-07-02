# Project Title

*Wine Flavor Profile Prediction Tool:* **EnoBot**

  

## Overview

  

**EnoBot** is a web application designed to predict the flavor profile of a wine based on its characteristics. Users can input details such as grape variety, region, and type of wine, and the app uses machine learning models trained on wine data to generate a flavor profile prediction.

  
  

### Problem

  

Wine enthusiasts, connoisseurs, and professionals often seek to understand the flavor profile of a wine before purchasing or tasting it. However, predicting the flavor profile based on various wine characteristics can be challenging. The flavor of a wine is influenced not only by the grape variety but also by the characteristics of the region, such as weather, soil, and other environmental factors. Given the many variables involved, accurately predicting the tasting profile can require extensive knowledge and information. This app addresses this challenge by providing a tool that predicts the flavor profile based on input characteristics, helping users make informed decisions and enhancing their wine experience.

  

### User Profile

  

-  Wine enthusiasts and connoisseurs

-  Sommeliers and wine professionals

-  Wine retailers and distributors

  

### Features

  

-  Input selections

-  Prediction result

  
  

## Implementation

  

### Tech Stack

  

-  Frontend: React, HTML, SCSS, JavaScript
-  Backend: Node.js, Express
- Database: MySQL
-  Libraries: Axios, React, React Router
  

### APIs

  
-  Open AI (for retrieving wine characteristics)

-  Wine data API (for wine recommendations and pairings)


### Sitemap

  

-  **Home Page:** Introduction and description of the tool

-  **Input Page:** Form for users to input wine characteristics

-  **Prediction Result Page:** Display predicted flavor profile with visualizations

  

### Mockups

**Homepage:**

![homepage](https://drive.google.com/file/d/1lC_93jKz9dlLg2mMhB6Gz-zoTJylYGNJ/view?usp=sharing)
 
 **Inputs:**
 
![inputs](https://drive.google.com/file/d/1L3KrzfHuniKKIOECy9FxYD0F87nBn0ki/view?usp=sharing) 

**Prediction:**

![enter image description here](https://drive.google.com/file/d/1YifzTkp2IzEhfVfbDoEEiuJyid1JrDfA/view?usp=sharing)

  

### Data

  

In this project, the main data entities involved in the prediction, wine recommendation, and pairing recommendation are **Prediction**, **Wine**, and **Pairing**. 

Below is a description of these entities:

### Data Entities:

1.  **Prediction**
    
    -   **Attributes:**
        -   `id` (Primary Key)
        -   `variety` (The grape variety or blend used in the wine)
        -   `region` (The region where the wine is produced)
        -   `flavor_profile` (The predicted flavor profile of the wine)
    -   **Relationships:**
        -   One-to-Many relationship with **Wine** (for recommendations)
        -   One-to-Many relationship with **Pairing** (for food pairings)
2.  **Wine**
    
    -   **Attributes:**
        -   `id` (Primary Key)
        -   `name`
        -   `variety` (The grape variety or blend used in the wine)
        -   `region` (The region where the wine is produced)
        -   `type` (The type of wine, e.g., red, white, fortified, dessert)
        -   `winery` (The name of the winery)
        -   `year` (Vintage year)
        -   `price` (Price of the wine)
    -   **Relationships:**
        -   Many-to-One relationship with **Prediction** (as recommended wines)
        -   One-to-Many relationship with **Pairing**
3.  **Pairing**
    
    -   **Attributes:**
        -   `id` (Primary Key)
        -   `wine_id` (Foreign Key)
        -   `food_item` (Recommended food pairing for the wine)
    -   **Relationships:**
        -   Many-to-One relationship with **Wine**

### Relationships Overview:

-   A **Prediction** is generated based on user input of `variety` and `region`.
-   For each **Prediction**, two **Wine** recommendations are provided based on the `variety` and `region` specified.
-   Each **Wine** can have multiple **Pairing** recommendations, suggesting suitable food items to complement the wine.

  

### Endpoints

  **Wine Prediction Endpoints**

#### POST /predict

-   **Description:** Predict the flavor profile of a wine based on its characteristics.
-   **Parameters:**
    -   `variety`  - The grape variety of the wine
    -   `region`  - The region where the wine is produced
    -   `type`  - The type of wine (e.g., red, white, fortified, dessert)

#### GET /wines

-   **Description:** List a couple of wines based on variety, region, and type.
-   **Parameters:**
    -   `variety`  - The grape variety of the wine
    -   `region`  - The region where the wine is produced
    -   `type`  - The type of wine (e.g., red, white, fortified, dessert)

#### GET /pairings

-   **Description:** Get food pairing recommendations based on wine characteristics.
-   **Parameters:**
    -   `variety`  - The grape variety of the wine
    -   `region`  - The region where the wine is produced
    -   `type`  - The type of wine (e.g., red, white, fortified, dessert)
  

### Auth

  

While user login and profile functionality are not required for the core functionality of the project, implementing authentication and authorization would be a valuable addition. This feature would allow users to create accounts, log in, and save their wine preferences. By using JWT (JSON Web Tokens) for secure authentication, we can ensure that user data is protected and that only authorized users can access personalized features. 

  

## Roadmap

 
-  Set up project structure and environment

-  Implement basic frontend components (Home Page, Input Page)

-  Set up backend with basic GET and POST endpoints for input handling

-  Integrate AI model. Train and deploy machine learning model for flavor profile prediction

-  Implement prediction result page

-  Create basic visualizations for flavor profile
- But fixes and improvements
- *DEMO DAY*

  

## Nice-to-haves

  

-  *User Profiles:* Allow users to create and manage profiles, save predictions, and view history

-  *Social Sharing:* Enable users to share their predictions on social media

-  *Recommendation System:* Suggest similar wines based on the predicted flavor profile