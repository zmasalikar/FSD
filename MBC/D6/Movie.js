class Movie {
    constructor(title, studio, rating = "UA") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies) {
        return movies.filter(movie => movie.rating === "UA");
    }
}

let Jawan= new Movie("Jawan", "Red Chillies Productions", "UA");
