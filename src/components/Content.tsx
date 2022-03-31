import { MovieCard } from "./MovieCard";

import "../styles/content.scss";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface ContentProps {
  moviesList: Array<Movie>;
  selectedGenre: Genre;
}

export function Content(props: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria: <span>{props.selectedGenre.title}</span>
        </span>
      </header>
      <main>
        <div className="movies-list">
          {props.moviesList.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
