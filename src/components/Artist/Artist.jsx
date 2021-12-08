import PlayIcon from "../../assets/icons/Play";
import {
  ArtistAvatar,
  ArtistContainer,
  ArtistContent,
  TextContent,
} from "./Artist.styles";

export default function Artist({ genre, name, imageUrl }) {
  return (
    <ArtistContainer>
      <ArtistAvatar
        role="img"
        aria-label={`${name}-thumbnail`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <ArtistContent>
        <TextContent>
          <span>{genre}</span>
          <h4>{name}</h4>
        </TextContent>

        <PlayIcon />
      </ArtistContent>
    </ArtistContainer>
  );
}
