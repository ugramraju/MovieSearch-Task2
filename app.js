const poster = document.getElementById("poster");
const movieTitle = document.getElementById("title");
const year = document.getElementById("year");
const imdbRating = document.getElementById("imdbRating");
const actors = document.getElementById("actors");
const director = document.getElementById("director");
const writer = document.getElementById("writer");

const inputSearchMovie = document.getElementById("inputSearchMovie");
function movieSearchFunc() {
    let movieName = inputSearchMovie.value;
    fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=f2329d11`)
        .then(res => res.json())
        .then(data => {
            poster.setAttribute("src", `${data.Poster}`);
            movieTitle.innerText = `${data.Title}`;
            year.innerText = `Year Of Release: ${data.Year}`;
            imdbRating.innerText = `IMDB Rating: ${data.imdbRating}`;
            actors.innerText = `Actors: ${data.Actors}`;
            director.innerText = `Director: ${data.Director}`;
            writer.innerText = `Writer: ${data.Writer}`;

        })
        .catch((e) => console.log(e))
}
