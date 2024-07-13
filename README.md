[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

![EnoBotLogo](https://raw.githubusercontent.com/bmarmolejo/brainstation-capstone-project/develop/enobot-client/src/assets/images/logo-black.svg)

<p align="center">
    <br />
    <a href="https://github.com/bmarmolejo/brainstation-capstone-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/bmarmolejo/brainstation-capstone-project">View Demo</a>
    ·
    <a href="https://github.com/bmarmolejo/brainstation-capstone-project/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/bmarmolejo/brainstation-capstone-project/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>


# EnoBot

***EnoBot* **is a web application designed to predict the flavor profile of wines based on user inputs like wine type, grape variety, and region. The app provides wine recommendations and food pairings using data fetched dynamically from OpenAI API.

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

##Project Structure
The project is divided into two main folders:

- **enobot-client:** Contains the frontend code.
- **enobot-server:** Contains the backend code.

### Built With

* [![React][React.js]][React-url]
* [![node][node.com]][node-url]


## Setup and Installation

### Prerequisites
Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Git


### Packages
AXIOS
DOTENV REACT-ROUTER-DOM SASS MATERIAL UI
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
  

**Run application
**
```zsh
npm start
```


`REACT_APP_BASE_URL= <enobot-server>`

6. Run application

```zsh
npm start
```

##Usage
###Running the Application
Start the client and server as described in the setup section.
Access the client application at http://localhost:5173.
The server will be running on http://localhost:8080.

## Functionality

- Predict wine flavor profiles.
- Provide wine recommendations.
- Suggest food pairings.
- Friendly and casual response tone.
- Uncommon wine and grape variety recognition.

##Technologies Used
React
Node.js
Express
OpenAI API
Axios

## Future Implementation 


### Phase 2

- Friends: Enabling feature to link and add other users to your profile. The user profile will include a box that contains all friends and other profiles will have an “add friend” button. 

### Phase 3

- Testimonials: Enables users that have a link throughout friendship to post testimonials in each other's profile. Also enabling the receiver to delete testimonials. 

- Likes: Implementing a like button in the profile.

- Views: Implementing a view counter that will be updated every time another user visualizes the user’s profile. 

## Deployed version

https://enobot.netlify.app/



## Author

[@bmarmolejo](https://github.com/bmarmolejo)

##Contact
If you have any questions or feedback, please reach out to [bmarmolejo@gmail.com].