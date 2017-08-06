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

The following code snippets provide an overview of the steps in the code from the click of a button calling for a news article to its display.

1 - VIEW: Here is code for one of the buttons from the views/sources-add view, used to begin the call for a news article:

    <form class="news-buttons" method='POST' action='/sources'>
        <button class="news-add-button" id="al-jazeera-english" type="submit" name="newsSource" value="al-jazeera-english">Al Jazeera</button>
        ... [code for other buttons ]
    </form>


2 - HELPER: Here is the code from the services/news/news-helpers file with the getNewsData function to make the API call for the news article:

    function getNewsData(req, res, next) {
        let newsSource = req.body.newsSource;
        fetch(`https://newsapi.org/v1/articles?source=${newsSource}&sortBy=top&apiKey=${API_KEY}`)
        .then(fetchRes => fetchRes.json())
        .then((jsonRes) => {
        console.log(newsSource);
        res.locals.title = jsonRes.articles[0].title
        res.locals.description = jsonRes.articles[0].description
        res.locals.url = jsonRes.articles[0].url
        res.locals.urlToImage = jsonRes.articles[0].urlToImage
        next()
        }).catch(err => {
        console.log(err);
        next()
        });
    };


3 - MODELS: Here is code from the models/source file, showing the insertion of the data into the database table sources:

    Source.create = (source) => {
        return db.one(`
        INSERT INTO sources
        (source, title, description, url, urlToImage, user_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `, [source.source, source.title, source.description, source.url, source.urlToImage, source.user_id]);
    };


4 - CONTROLLER: Here is the code from the controllers/sources-controller file with the index method, rendering data to the sources-index vew:

    sourcesController.index = (req, res) => {
        Source.findAll(req.user.id)
        .then(sources => {
        res.render('sources/sources-index', {
            data: sources,
        });
        }).catch(err => {
        console.log(err);
        res.status(500).json({ err });
        });
    };


5 - VIEW: Here is the code for the views/sources/sources-index.ejs file - used to display the top news article(s) from the selected news source(s):

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


### Acknowledgements

Thanks to the following for providing their comments along the way: John Bell, Gainor Bostwick, Alex Calleia, Ramsey Nasser, J Silverstein, and Phil Zak.

## Opportunities for Future Growth

In terms of future edits, I would like to allow the user to select several news sources to display in the view while, at the same time, removing buttons for any news sources already selected in order to prevent a user from accidentally selecting the same news source twice.
