const poster = document.getElementById('banner-poster');
const bannerdetails = document.getElementById('banner-details');
const backdrop = document.getElementsByClassName('container');


const id = window.localStorage.getItem("id");

async function getData() {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=8a48da82&i=${id}&plot=full`
      );
    const item = await response.json();
    poster.innerHTML = `<img src="${item.Poster}">`;
    bannerdetails.innerHTML = 
    `
        <h1>${item.Title}</h1>
        <div>
            <ul>
            <li><span>Actors</span>${item.Actors}</li>
            <li><span>Director</span>${item.Director}</li>
            <li><span>Genre</span>${item.Genre}</li>
            <li><span>Runtime</span>${item.Runtime}</li>
            </ul>
            <p>${item.Plot}</p>
        </div>
    `;
}

getData();