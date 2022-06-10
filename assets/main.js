let url = "https://nodejs-api-news00.herokuapp.com/news";
let newsList = document.querySelector(".newsList");

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
	});
