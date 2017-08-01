*** Daniel W. Beebe / Monday, July 31, 2017 ***

# 'My News Bubble' App Proposal

## What is 'My News Bubble'?

'My News Bubble' is an app in which users can register and create a unqiue profile of their favorite news sources.

When a user logs in, the app will list over a dozen major news sources to choose from. The user simply has to click an 'add' button to add the news source to that users 'bubble'.

The user can always go back to the user's 'bubble' (profile) and remove a news source later.

The heart of the app is the user's news feed, which will include the top news stories from the user's selected favorite news sources.

## Wireframes

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

* Phase -5: Create file folders and basic code for app (GOAL: Monday, 7/31)
* Phase -4: Set up user verification, set up database with tables and views (GOAL: Tuesday)
* Phase -3: Use API Key to retrieve articles (GOAL: Wednesday)
* Phase -2: Work on CSS styling of app (GOAL: Thursday)
* Phase -1: Complete working news app and deply on Heroku (GOAL: Friday)
* Phase 0: Make final edits and deploy (Goal: Sunday, 8/6)

## Resources

To retrieve news articles from the user's chosen sources, I will use an API key from: https://newsapi.org/


