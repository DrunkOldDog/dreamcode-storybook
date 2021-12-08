import styled from "styled-components";

export const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`;

export const CoverImage = styled.img`
  border-radius: 4px;
`;

export const ArtistName = styled.span`
  margin-top: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.02em;

  /* Main/Text */
  color: ${(props) => (props.mode === "light" ? "#252525" : "#FFF")};
  opacity: 0.6;
`;

export const SongTitle = styled.h4`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: 0.02em;
  color: ${(props) => (props.mode === "light" ? "#252525" : "#FFF")};
`;
