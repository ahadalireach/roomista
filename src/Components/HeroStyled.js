import styled from "styled-components";
import defaultImg from "../images/defaultBcg.jpg";

const HeroStyled = styled.header`
  min-height: 60vh;
  background: url(${(props) => props.img || defaultImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HeroStyled;
