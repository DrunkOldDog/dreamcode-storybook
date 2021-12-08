import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) =>
    props.type !== "secondary" ? "#f233b1" : "#252525"};
  border-radius: 40px;
  border: 0;
  padding: 6px 22px;
  display: flex;
  align-items: center;
  height: ${(props) => (props.type !== "secondary" ? "42px" : "40px")};

  color: #ffffff;
  font-family: Poppins;
  font-weight: ${(props) => (props.type !== "secondary" ? 600 : 700)};
  font-size: ${(props) => (props.type !== "secondary" ? "16px" : "14px")};
  line-height: ${(props) => (props.type !== "secondary" ? "30px" : "20px")};

  svg {
    margin-left: 10px;
  }
`;

export default function Button({ type, children, iconRight }) {
  return (
    <StyledButton type={type}>
      {children} {iconRight}
    </StyledButton>
  );
}
