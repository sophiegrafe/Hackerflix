import './styles.scss';
import { movies } from './src/movies';


/** *************************************Affichage**************************** */

/* traitement header*/
const header = `
<header>
  <h1>Films on the theme of hacking</h1>
  <button class="btnRecent">Recent Film Only</button>
</header>
`;

/*traitement main*/
let main = '<main>';

//création de la grille d'image de film
let moviesGrid = '<section class="moviesGrid">';
movies.forEach((movie)=>{
  if (movie.img) {
    moviesGrid += `  
    <img src="posters/${movie.imdb}.jpg" id="${movie.imdb}" alt="movie poster">
   `;
  } else {
    moviesGrid += `<img class="imgEmpty" id="${movie.imdb}">`;
  }
});
moviesGrid += '</section>';
main += moviesGrid + '</main>';

/*traitement footer*/


/*affichage*/
const app = document.getElementById("app");
app.innerHTML += header + main;

/** *************************************Fonctions/envents**************************** */

/* popup */
// afficher la popUpInfo avec un delegate
document.body.addEventListener('click', (e) => {
  if (e.target.matches('img')) {           
    movies.forEach((movie) => {        
      if (e.target.id === movie.imdb) {
        const popUpInfosFilm = `
        <div class="popUpContainer">
          <div class="popUpInfos">
            <i class="far fa-times-circle"></i>
            <h3> Title: ${movie.title}</h3>
            <p> Genres: </br> ${movie.genres} </p>
            <p> Year: ${movie.year}</p>
            <p> Note: ${movie.note}</p>
            <p> Plot: </br> ${movie.plot} </p>
          </div>
        </div> `;
        app.innerHTML += popUpInfosFilm;
      } 
    });
  }
});

// fermer la popup avec un delegate

//version 1 si pas fond pour empêcher "surclique" et empilement de popup
// document.body.addEventListener("click", (e) => {
//   if (e.target.matches(".fa-times-circle")) {
//     console.log(e);
//     const popupInfoToRemove = document.querySelectorAll(".popUpInfos");    
//     const lastEntry = popupInfoToRemove[popupInfoToRemove.length - 1];       
//     lastEntry.remove();
//   }
// });

//version 2 avec le div container/écran sous la popup

document.body.addEventListener("click", (e) => {
  if (e.target.matches(".fa-times-circle")) {    
    const popupInfoToRemove = document.querySelector(".popUpContainer");           
    popupInfoToRemove.remove();
  }
});