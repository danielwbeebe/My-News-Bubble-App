// require isomorphic-fetch and dotenv
require('isomorphic-fetch');
require('dotenv').config();

// get news
function getNews(req, res, next) {
  fetch(`https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=${process.env.API_KEY}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      res.locals.articles = jsonRes.main;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
}

// export
module.exports = {
  getNews,
}
