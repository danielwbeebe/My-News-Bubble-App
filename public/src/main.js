// entire code is a function
console.log('script.js loaded!');

  // function to get news article and related data
  function getData() {
    console.log('manipulating the DOM');
    let title = data.articles[0].title;
    let description = data.articles[0].description;
    let url = data.articles[0].url;
    let urlToImage = data.articles[0].urlToImage;

    // manipulating DOM to add the data
    document.getElementById('title').innerHTML = `${title}`;
    document.getElementById('description').innerHTML = `${description}`;
    document.getElementById('url').innerHTML = `<a href="${url}">link to article</a>`;
    document.getElementById('urlToImage').innerHTML = `<img src="${urlToImage}">`;

  };
