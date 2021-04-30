const bar = document.getElementById('bars');
const nav =  document.getElementById('links');

bar.addEventListener('click',()=>{
    nav.classList.toggle('show');
    console.log(nav);
})