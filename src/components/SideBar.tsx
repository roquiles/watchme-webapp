import { Button } from "./Button";

import "../styles/sidebar.scss";

interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SidebarProps {
  genres: Array<Genre>;
  clickHandler: Function;
  selectedGenreId: number;
}

export function SideBar(props: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={genre.id}
            title={genre.title}
            iconName={genre.name}
            onClick={props.clickHandler.bind(null, genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
