import styled from "styled-components";
import {
  GenericButton,
  GoogleSigninButton,
  InvertedButton,
} from "../button/button.styles";

export const Img = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${GenericButton},
  ${GoogleSigninButton},
  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 240px;
    display: none;
  }

  &:hover {
    ${Img} {
      opacity: 0.8;
    }

    ${GenericButton},
    ${GoogleSigninButton},
    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;
export const Price = styled.span`
  width: 20%;
`;
