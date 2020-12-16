import './styles.scss';
import { movies } from './src/movies';


/** *************************************Affichage**************************** */

/* traitement header*/
//version vt
const header = `
<header>  
  <h1>Films on the theme of hacking</h1>
</header>
`;

/* pffff/Grrrr pas trouvé mieux ...*/
const btnRecent = `
<button id="btnRecent">
  <span>R</span>
  <span>e</span>
  <span>c</span>
  <span>e</span>
  <span>n</span>
  <span>t</span>
  <div class="blackSpace"></div>
  <span>F</span>
  <span>i</span>
  <span>l</span>
  <span>m</span>
  <div class="blackSpace"></div>
  <span>O</span>
  <span>n</span>
  <span>l</span>
  <span>y</span>  
</button>`;

//version hz
/* <header>
  <h1>Films on the theme of hacking</h1>
  <button id="btnRecent">Recent Film Only</button>
</header>
`; */

/*traitement main*/
let main = '<main>';

//création de la grille d'image de film
let moviesGrid = '<section class="moviesGrid">';
movies.forEach((movie)=>{
  if (movie.img) {
    moviesGrid += `  
    <img src="posters/${movie.imdb}.jpg" class="poster" id="${movie.imdb}" alt="movie poster">
   `;
  } else {
    moviesGrid += `<img src="posters/no-poster.jpg" class="poster" id="${movie.imdb}">`;
  }
});
moviesGrid += '</section>';
main += moviesGrid + '</main>';

/*traitement footer*/


/*affichage*/
const app = document.getElementById("app");
app.innerHTML += header + btnRecent + main;

/** *************************************Fonctions/events**************************** */

/* popup */
 /*afficher la popUpInfo avec un delegate*/

document.body.addEventListener('click', (e) => {
  if (e.target.matches('img')) {           
    movies.forEach((movie) => {        
      if (e.target.id === movie.imdb) {
        const popUpInfosFilm = `
        <div class="popUpContainer">
          <div class="popUpInfos">
            <i class="far fa-times-circle"></i>
            <h3>${movie.title}</h3>
            <p id="movie_year">${movie.year}</p>
            <p>${movie.genres}</p>
            <p> ${movie.plot}</p>
            <p> note: ${movie.note} / 10</p>
          </div>
        </div> `;
        app.innerHTML += popUpInfosFilm;
      } 
    });
  }
});

 /*fermer la popup avec un delegate*/

   /*version 2 avec le div écran sous la popup pour interdire
   le surclique et l'empilement de popup*/

document.body.addEventListener("click", (e) => {
  if (e.target.matches(".fa-times-circle")) {    
    const popupInfoToRemove = document.querySelector(".popUpContainer");           
    popupInfoToRemove.remove();
  }
});

   /*version 1 si pas fond pour empêcher "surclique" et empilement de popup*/

/*document.body.addEventListener("click", (e) => {
  if (e.target.matches(".fa-times-circle")) {     
    const popupInfoToRemove = document.querySelectorAll(".popUpInfos");    
    const lastEntry = popupInfoToRemove[popupInfoToRemove.length - 1];       
    lastEntry.remove();
  }
});*/

/*bouton recent film only*/
// cacher les films antérieur à 2000
const btnRecentEvent = document.getElementById("btnRecent");
btnRecentEvent.addEventListener('click', () => {
    const posterList = document.querySelectorAll(".poster");
    for (const movie of movies) {
      posterList.forEach(poster =>{
        if (poster.id === movie.imdb) {
            const movieYears = movie.year;
            if (movieYears < 2000){
              poster.style.display="none";
            }
          }  
      });
    }
    btnRecentEvent.innerHTML= `
    <button id="show_all">
      <span>S</span>
      <span>h</span>
      <span>o</span>
      <span>w</span>
      <div class="blackSpace"></div>
      <span>A</span>
      <span>l</span>
      <span>l</span>      
    </button>`;
});

// Révéler tous les films
const btnShowAll = document.getElementById("show_all");
btnShowAll.addEventListener("click", () => {
  const posterList = document.querySelectorAll(".poster");
  for (const movie of movies) {
    posterList.forEach((poster) => {
      if (poster.id === movie.imdb) {
        const movieYears = movie.year;
        if (movieYears < 2000) {
          poster.style.display = "none";
        }
      }
    });
  }
  btnRecentEvent.innerHTML = `
    <button id="btnRecent">
      <span>R</span>
      <span>e</span>
      <span>c</span>
      <span>e</span>
      <span>n</span>
      <span>t</span>
      <div class="blackSpace"></div>
      <span>F</span>
      <span>i</span>
      <span>l</span>
      <span>m</span>
      <div class="blackSpace"></div>
      <span>O</span>
      <span>n</span>
      <span>l</span>
      <span>y</span>  
  </button>`;
});


