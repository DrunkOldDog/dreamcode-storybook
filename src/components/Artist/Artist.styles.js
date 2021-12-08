import styled from "styled-components";

export const ArtistContainer = styled.div`
  height: 70px;
  width: 280px;
  display: flex;
`;

export const ArtistContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-left: 15px;
  border-bottom: 1px solid rgba(37, 37, 37, 0.1);
`;

export const ArtistAvatar = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-position: center;
  background-size: cover;
`;

export const TextContent = styled.div`
  span {
    /* Text/Regular 13px */
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */
    letter-spacing: 0.02em;

    /* Main/Text */
    color: #252525;
    opacity: 0.6;
  }

  h4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #252525;
    margin: 0;
  }
`;
