const now_showing = document.getElementById('now-showing');
const coming_soon = document.getElementById('coming-soon');

const movies = [
    {'name': 'Nobody', 'imdb': 'tt7888964','state':'ns'},
    {'name': 'Raya and the Last Dragon', 'imdb':'tt5109280', 'state':'ns'},
    {'name': 'The Virtuoso', 'imdb':'tt4136456', 'state':'ns'},
    {'name': 'Limbo', 'imdb':'tt9138170', 'state':'ns'},
    {'name': 'Vanquish', 'imdb':'tt5932368', 'state':'ns'},
    {'name': 'Godzilla vs. Kong', 'imdb':'tt5034838', 'state':'ns'},
    {'name': 'The Courier', 'imdb':'tt8368512', 'state':'ns'},
    {'name': 'A Quiet Place Part II', 'imdb':'tt8332922', 'state':'cs'},
    {'name': 'Spiral: From the Book of Saw', 'imdb':'tt10342730', 'state':'cs'},
    {'name': 'Cruella', 'imdb':'tt3228774', 'state':'cs'},
    {'name': 'The Dry', 'imdb':'tt5144174', 'state':'cs'}
]

function getNowShowing(){
    movies.forEach(async (movie)=>{
        var code ='';
        if(movie.state=='ns'){
        try {
            const response = await fetch(
              `https://www.omdbapi.com/?apikey=8a48da82&i=${movie.imdb}`
            );
            const item = await response.json();
            var card = document.createElement('div');
            card.className = 'card';
            code += 
            `
                <div class="card" onclick="gotoDetail('${movie.imdb}')">
                <div class="card-poster">
                <img src = "${item.Poster}">
                </div>
                <div class="card-info">
                    <h3>${item.Title.length > 15 ? item.Title.substring(0, 14)+'...' : item.Title }</h3>
                    <p>Rating</p>
                    <p>Run time : ${item.Runtime}</p>
                </div>
            `;
            
          } catch (error) {
            console.log(error);
          }
          card.innerHTML = code;
          now_showing.appendChild(card);
        } 
    });
}

function getComingSoon(){
    movies.forEach(async (movie)=>{
        var code ='';
        if(movie.state=='cs'){
        try {
            const response = await fetch(
              `https://www.omdbapi.com/?apikey=8a48da82&i=${movie.imdb}`
            );
            const item = await response.json();
            var card = document.createElement('div');
            card.className = 'card';
            code += 
            `
                <div class="card" >
                <div class="card-poster">
                <img src = "${item.Poster}">
                </div>
                <div class="card-info">
                    <h3>${item.Title.length > 15 ? item.Title.substring(0, 14)+'...' : item.Title }</h3>
                    <p>Rating</p>
                    <p>Run time : ${item.Runtime}</p>
                </div>
            `;
            
          } catch (error) {
            console.log(error);
          }
          card.innerHTML = code;
          coming_soon.appendChild(card);
        } 
    });
}

function gotoDetail(id){
    window.localStorage.setItem("id",id);
    window.location.href = "moviedetail.html";
    console.log("set to ls");
}

getNowShowing();
getComingSoon();