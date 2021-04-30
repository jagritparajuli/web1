
const button_prev = document.getElementById("prev");
const button_next = document.getElementById("next");
const slider = document.getElementById('slider');
const slider_info = document.getElementById('slider-info');

var slider_data = ["Shree","Nobody","Raya and the Last Dragon"];
var trailer = ["https://www.youtube.com/watch?v=TSkxZCdpJbU","https://www.youtube.com/watch?v=wZti8QKBWPo", "https://www.youtube.com/watch?v=1VIZ89FEjYI"]

var i = 0;
var timer;

function loadSlider() {
    slider.style.backgroundImage = `url('assets/images/covers/${slider_data[i]}.jpg')`
    slider_info.innerHTML=` 
    <h1>${slider_data[i]}</h1>
    <h4 class = "slider_tag">Now Showing</h4>
    <a class="btn" href = "${trailer[i]}" target="_blank"><i class = "fas fa-play-circle"></i>Watch Trailer</a>
    `;
    i < slider_data.length - 1 ? i++ : i = 0;
    timer = setTimeout("loadSlider()",5000);
}

// slider Control Event Listerner
button_prev.addEventListener('click',function() {
    i == 0 ? i = slider_data.length-1: i = i - 1
    i <= 0 ? i = slider_data.length-1 : i = i-1 ;
    clearTimeout(timer);
    loadSlider();
})
button_next.addEventListener('click',function() {
    i = i - 1;
    i == slider_data.length-1 ? i = 0 : i++ ;
    clearTimeout(timer);
    loadSlider();
})


window.onload = loadSlider();