// entire code is a function
$(function() {
  console.log('script.js loaded!')

  // function for getting the weather data
  function getNews() {
    console.log('getting data....');

    // worked with Jason on proper http address format to pull the data
    $.ajax({
    url: `https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=336c5527739c4eb398067073d69ca075`,
    method: 'GET',
    success: function(data){
      console.log(data);
      getData(data);
      }
    })
  }

  function getData(data) {
    let title = data.articles[0].title;
      console.log(title);
    let description = data.articles[0].description;
      console.log(description);
    let url = data.articles[0].url;
      console.log(url);
    let urlToImage = data.articles[0].urlToImage;
      console.log(urlToImage);

    // manipulating DOM to add the data
    document.getElementById('title').innerHTML = `${title}`;
    document.getElementById('description').innerHTML = `${description}`;
    document.getElementById('url').innerHTML = `<a href="${url}">link to article</a>`;
    document.getElementById('urlToImage').innerHTML = `<img src="${urlToImage}">`;

    }

  getNews();

})

