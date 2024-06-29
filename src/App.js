import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageCadastro } from "./Pages/cadastro";
import { ListagemPage } from "./Pages/listagem";
import { Navbar } from "./Componentes/Navbar";
import Home from "./Pages/home";
import imagem from "./assets/minimalist.webp";
import { LoginPage } from "./Pages/login";
import { CadastrarUserPage } from "./Pages/newaccount";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="teste">
          <Routes>
            <Route path="/" element={<Home backgroundImage={imagem} />} />
            <Route path="/cadastro" element={<PageCadastro />} />
            <Route path="/editar/:codigo_produto" element={<PageCadastro />} />
            <Route path="/listagem" element={<ListagemPage />} />
            <Route path="/listagem/:produto" element={<ListagemPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastrar-user" element={<CadastrarUserPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
