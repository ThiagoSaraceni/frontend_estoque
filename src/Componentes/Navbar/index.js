import { Button, Col } from "reactstrap";
import { Search } from "react-feather";
import { BsBox2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as S from "../styled";

export const Navbar = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSearch = (data) => {
    navigate(`/listagem/${data?.search}`);
    return console.log(data);
  };

  return (
    <S.DivNavbar>
      <div className="navbar">
        <Col md="3">
          <S.TitleNavbar>
            <S.Linkk to="/" className="titleStock">
              <BsBox2 className="me-3" />
              Blabla - Estoque
            </S.Linkk>
          </S.TitleNavbar>
        </Col>
        <Col md="5">
          <S.Linkk to="/cadastro">Cadastro</S.Linkk>
          <S.Linkk to="listagem">Listagem</S.Linkk>
        </Col>
        <Col md="3">
          <form onSubmit={handleSubmit(onSearch)}>
            <input
              {...register("search")}
              type="text"
              placeholder="Procurar item"
              className="inptsearch"
            ></input>
            <Button type="submit">
              <Search />
            </Button>
          </form>
        </Col>
        <Col className="d-flex justify-content-end me-5">
          <Button color="success" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Col>
      </div>
    </S.DivNavbar>
  );
};
