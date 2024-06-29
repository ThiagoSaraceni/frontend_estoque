import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";
import styled from "styled-components";

export const Linkk = styled(Link)`
  margin-right: 100px;
  padding-top: 10px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-family: "Chivo Mono", monospace;
`;

export const InitialScreen = styled.div`
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: calc(100vh - 59px);
  overflow: hidden;
`;

export const TitleNavbar = styled.h5`
  font-size: 20px;
`;

export const divInput = styled.div`
  display: flex;
`;

export const InputSearch = styled(Input)`
  width: 50%;
`;

export const DivNavbar = styled.div`
  background-color: #2f4f4f !important;
`;

export const divCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #afeeee;
`;

export const Container = styled.div`
  width: 350px;
  height: auto;
  background-color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
`;

export const ContainerCadastro = styled.div`
  width: 400px;
  height: auto;
  background-color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
`;

export const divBackgroundColor = styled.div`
  background-color: #afeeee;
  min-height: calc(100vh - 58px); /* Ajuste a altura conforme necessário */
  padding-top: 13px;
  h3 {
    color: #191970;
  }
`;

export const ButtonCadastro = styled(Button)`
  margin-top: 15px;
  width: 100%;
  border-radius: 25px;
`;

export const centralizarDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardFilter = styled.div`
  border-radius: 10px;
  margin-right: 10% !important;
  margin-bottom: 6px;
  margin-left: 10%;
  background-color: white;
`;

export const HeaderFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: #191970;
`;
