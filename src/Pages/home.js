import * as S from "../Componentes/styled";

import imgStock from "../assets/minimalist.webp";
import { useNavigate } from "react-router-dom";

const Home = ({ backgroundImage }) => {
  //return <S.InitialScreen backgroundImage={backgroundImage}></S.InitialScreen>;
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <div className="landingPage">
          <div>
            <h1 className="titlemain">
              Transforme a Gestão<br></br> do Seu Estoque
            </h1>
            <h2 className="textsecondary mt-1">
              Nossa solução de<br></br>gerenciamento de estoque<br></br>facilita
              o controle, rastreamento<br></br>e organização dos seus<br></br>
              produtos de maneira eficiente
            </h2>
            <button
              className="btnldpg"
              onClick={() => navigate(`cadastrar-user`)}
            >
              Cadastrar
            </button>
          </div>
          <div style={{ paddingTop: "50px" }}>
            <img src={imgStock} alt="imagem do estoque" height={550} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
