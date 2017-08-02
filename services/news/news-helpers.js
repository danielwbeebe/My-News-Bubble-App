require('isomorphic-fetch');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

// Thanks and credit to Phil for helping me understand and utilize this function
// Thanks and credit to Ryan for input on helpers file

function getNewsData(req, res, next) {
  // PULLING NEWS
  let newsSource = req.body.newsSource;
  fetch(`https://newsapi.org/v1/articles?source=${newsSource}&sortBy=top&apiKey=${API_KEY}`)
  .then(fetchRes => fetchRes.json())
  .then((jsonRes) => {
    console.log(newsSource);
    res.locals.title = jsonRes.articles[0].title
    res.locals.description = jsonRes.articles[0].description
    res.locals.url = jsonRes.articles[0].url
    res.locals.urlToImage = jsonRes.articles[0].urlToImage
    console.log('title'+jsonRes.title);
    console.log(jsonRes.description);
    console.log(jsonRes.url);
    console.log(jsonRes.articles[0].urlToImage);
    next()
  }).catch(err => {
    console.log(err);
    next()
  });
};

module.exports = {
  getNewsData
};
