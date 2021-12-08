import {
  SongContainer,
  CoverImage,
  ArtistName,
  SongTitle,
} from "./Song.styles";

export default function Song({ imageUrl, author, songTitle, mode = "light" }) {
  return (
    <SongContainer>
      <CoverImage alt={`${songTitle}-${author}`} src={imageUrl} />

      <ArtistName mode={mode}>{author}</ArtistName>
      <SongTitle mode={mode}>{songTitle}</SongTitle>
    </SongContainer>
  );
}
