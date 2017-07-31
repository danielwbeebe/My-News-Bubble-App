*** Daniel W. Beebe / Monday, July 31, 2017 ***

# 'My News Bubble' App Proposal

## What is 'My News Bubble'?

'My News Bubble' is an app in which users can register and create a unqiue profile of their favorite news sources.

When a user logs in, the app will list over a dozen major news sources to choose from. The user simply has to click an 'add' button to add the news source to that users 'bubble'.

The user can always go back to the user's 'bubble' (profile) and remove a news source later.

The heart of the app is the user's news feed, which will include the top news stories from the user's selected favorite news sources.

## Wireframe

Welcome screen

<img src="images/welcome-screen.JPG">

After logging in, the user selects preferred news sources from a menu of options

<img src="images/news-sources.JPG">

The user has an individual profile page

<img src="images/user-profile.JPG">

The user's news feed is the main feature of the app

<img src="images/news-feed.JPG">

## Database

The app will require a database 'news_bubble' with tables called: 

* 'users-table' with the following columns:
    * id SERIAL PRIMARY KEY,
    * username VARCHAR UNIQUE NOT NULL,
    * email VARCHAR UNIQUE NOT NULL,
    * password_digest TEXT NOT NULL

* 'news-table' with the following columns: 
    * id SERIAL PRIMARY KEY,
    * news-source VARCHAR,
    * userid INTEGER

The news-table will be seeded initially with Google News as news-source.

## Use of API Key to 'GET' news articles

For each news article, I plan to use an API Key from newsapi.org to retrieve the following fields:
* author, 
* title, 
* description, 
* url, 
* urlToImage, and 
* publishedAt.

## Phases of Completion

* Phase -4: Create file structure and detailed outline of the logic of the app
* Phase -3: Set up database for user verification and user profiles
* Phase -2: Set up views for each page of the app
* Phase -1: Work on CSS syling of app
* Phase 0: Complete working news app
* Phase 1: Deploy app to Heroku

## Resources

To retrieve news articles from the user's chosen sources, I will use an API key from: https://newsapi.org/


