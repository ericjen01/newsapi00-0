let url = "https://nodejs-api-news00.herokuapp.com/news";
let newsList = document.querySelector(".newsList");

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		data.forEach((article) => {
			let title = article.title;
			let img = article.img;
			let url = article.url;
			let label = article.lable;
			let date = article.date;

			let li = document.createElement("li");

			li.innerHTML = `
				<div class="imgWrapper">
					<img class="newsImg" src="${img}" alt="">
				</div>
				<p class="label">${label}  |  ${date}</p>
				<h1 class="title">${title}</h1>
				<a class = "read" href="${url}">Read More</a>
			`;
			newsList.appendChild(li);
		});
	});
