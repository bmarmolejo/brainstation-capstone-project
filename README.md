[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stars][stars-shield]][stars-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[contributors-shield]: https://img.shields.io/github/contributors/bmarmolejo/enobot.svg?style=for-the-badge
[contributors-url]: https://github.com/bmarmolejo/enobot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/bmarmolejo/enobot.svg?style=for-the-badge
[forks-url]: https://github.com/bmarmolejo/enobot/network/members
[stars-shield]: https://img.shields.io/github/stars/bmarmolejo/enobot.svg?style=for-the-badge
[stars-url]: https://github.com/bmarmolejo/enobot/stargazers
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-Follow%20Me-blue?style=for-the-badge&logo=linkedin
[linkedin-url]: https://www.linkedin.com/in/bmarmolejo

![EnoBotLogo](https://raw.githubusercontent.com/bmarmolejo/brainstation-capstone-project/develop/enobot-client/src/assets/images/logo-black.svg)

<p align="center">
    <br />
    <a href="https://enobot.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/bmarmolejo/brainstation-capstone-project/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/bmarmolejo/brainstation-capstone-project/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>


# EnoBot

**EnoBot** is a web application designed to predict the flavor profile of wines based on user inputs like wine type, grape variety, and region. The app provides wine recommendations and food pairings using data fetched dynamically from OpenAI API.

![EnoBotFront](https://raw.githubusercontent.com/bmarmolejo/brainstation-capstone-project/develop/enobot-client/src/assets/images/enobot-frontpage.png)

**Note:** This project is a work in progress. Future plans include making EnoBot a robust application for wine education and wine enthusiasts. The bot can also be trained to use inventory data from wine retailers or specialized information from wineries, including chemical composition, to predict wine quality.

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Setup and Installation](#setup-and-installation)
   1. [Prerequisites](#prerequisites)
   2. [Packages](#packages)
   3. [Installation Instructions](#installation-instructions)
4. [Usage](#usage)
   1. [Running the Application](#running-the-application)
5. [Functionality](#functionality)
6. [Technologies Used](#technologies-used)
7. [Future Implementation](#future-implementation)
   1. [Phase 2](#phase-2)
   2. [Phase 3](#phase-3)
8. [Deployed Version](#deployed-version)
9. [Author](#author)
10. [Contact](#contact)

## Project Structure
The project is divided into two main folders:

- **enobot-client:** Contains the frontend code.
- **enobot-server:** Contains the backend code.

## Setup and Installation

### Prerequisites
Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Git


### Packages
- AXIOS
- DOTENV 
- REACT-ROUTER-DOM 
- REACT-SELECT
- SASS 
### Installation Instructions

**Clone project to local machine**
```zsh
git clone git@github.com:bmarmolejo/brainstation-capstone-project.git
```
**Navigate to the enobot-client directory:**

```zsh
cd enobot-client
```

**Install dependencies:**

```zsh
npm install 
```
**Set Up Environment Variables**

Create a .env file in both the enobot-client and enobot-server folders based on the .env.example files provided.

*Example for enobot-client:*

```zsh
REACT_APP_API_URL=http://localhost:5173
```
*Example for enobot-server:*
```zsh
PORT=8080
OPENAI_API_KEY=your_openai_api_key
```

```zsh
mv .env.sample .env
```
  

**Run application**

```zsh
npm start
```

## Usage
### Running the Application
- Start the client and server as described in the setup section.
- Access the client application at http://localhost:5173.
- The server will be running on http://localhost:8080.

## Functionality

- Predict wine flavor profiles.
- Provide wine recommendations.
- Suggest food pairings.
- Friendly and casual response tone.
- Uncommon wine and grape variety recognition.

## Technologies Used
- React
- Node.js
- Express
- OpenAI API
- Axios

## Future Implementation 


### Phase 2

- *Advanced Wine Recommendations:* Enhance the recommendation engine to provide more personalized wine suggestions based on detailed user preferences, including taste history and feedback.

- *User Profiles:* Introduce user profiles where users can save their wine preferences, tasting notes, and favorite wines. Profiles will also display users' wine-tasting activity and history.

- *Social Sharing:* Enable users to share their wine predictions and recommendations on social media platforms, fostering community engagement and attracting more users to the app.

### Phase 3

- *Friends and Community:* Enable users to connect with other wine enthusiasts within the app. Users can add friends, share recommendations, and view friends' wine-tasting activities.

- *Expert Reviews and Testimonials:* Integrate expert wine reviews and user testimonials within the app. Users can read and write reviews for wines they have tried, providing valuable feedback for other users.

- *Event Notifications:* Implement a feature to notify users about wine-tasting events, workshops, and promotions based on their location and preferences. This will help users stay informed and engaged with the wine community. 

## Deployed version

https://enobot.netlify.app/



## Author

[Brenda Marmolejo](https://github.com/bmarmolejo)

## Contact
If you have any questions or feedback, please reach out to bmarmolejo@gmail.com.