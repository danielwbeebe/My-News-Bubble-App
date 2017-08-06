# 'News Bubble' App

<img src="images/menu-image.png">

<img src="images/article-image.png">

## What is the 'News Bubble'?

The 'News Bubble' is an app in which users can register and create a unqiue selection of favorite news sources.

When a user logs in, the app lists over a dozen major news sources to choose from. The user simply has to click a button to add the news source to that user's 'bubble'. The user is then redirected to the bubble and can read the article; or the user can navigate back to the menu of source options and continue adding news sources.

After the user has read an article, the user can remove a news article by clicking a button beneath the article.

The app is deployed at: https://news-bubble.herokuapp.com/

## Technical Discussion

The app utilizes the following technologies:

* HTML/EJS (general framework for the page views)
* CSS (style, formatting, adaptive design for web browser widths with break points at 800px and 500px)
* JavaScript (functions for models, controllers, routes, and config file)
* SQL (migration file, communicate with database with tables for registered users and news sources selected by users)
* Express.js (for the web app framework)
* API Call (retrieve news data to display)

### Notes on App Structure

In terms of structure, the app is broken down into 3 parts: (1) login/registration; (2) news source selection; and (3) viewing the top news article from the selected news source. 

### Sample Code

Here is the code for the views/sources/sources-index.ejs file - used to display the top news article(s) from the selected news source(s):

    <% for (let source of data) { %>

      <div class="news-articles">
          <h4>Source: <%= source.source %></h4>
          <div class="article" id="title"><%= source.title %></div><br>
          <div class="article" id="urlToImage"><img src="<%= source.urltoimage %>"></div>
          <div class="article" id="description"><%= source.description %></div><br>
          <div class="article" id="url"><a href="<%= source.url %>" target="_blank">Read the whole article</a></div><br>
          <form method='POST' action='/sources/<%= source.id %>?_method=DELETE'>
          <input id="remove-button" type='submit' value='DONE / BACK' />
          </form>
      </div>

    <% } %>
  </div>


Here is the code for my sources table in the migrations file, with columns for the id, data retrieved by the API call, and the user's id:

    CREATE TABLE IF NOT EXISTS sources
    (
    id SERIAL PRIMARY KEY,
    source VARCHAR(255),
    title TEXT,
    description TEXT,
    url TEXT,
    urlToImage TEXT,
    user_id INT REFERENCES users(id)
    );

### Acknowledgements

Thanks to the following for providing their comments along the way: John Bell, Gainor Bostwick, Alex Calleia, Ramsey Nasser, J Silverstein, and Phil Zak.

## Opportunities for Future Growth

In terms of future edits, I would like to allow the user to select several news sources to display in the view while, at the same time, removing buttons for any news sources already selected in order to prevent a user from accidentally selecting the same news source twice.
