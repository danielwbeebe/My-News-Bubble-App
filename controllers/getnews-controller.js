// define getnews controller as object
const getnewsController = {};

// index
getnewsController.index = (req, res) => {
  res.render('news/news-index', {
    news: res.locals.news,
  });
};

// export module
module.exports = getnewsController;
