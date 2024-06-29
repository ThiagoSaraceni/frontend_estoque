import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "reactstrap";
import { changeData, handlePage } from "../../redux/estoqueSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Filter } from "./filter";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import * as S from "../styled";

export const Listagem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { produto } = useParams();

  const { data, params, paginacao } = useSelector((state) => state.estoque);
  console.log(produto);

  console.log({ paginacao });

  console.log({ data });

  const nameChanged = params?.nomeproduto;
  const codChange = params?.cod;
  const locationChanged = params?.location;

  console.log({ codChange });
  console.log({ nameChanged });

  const applyFilters = () => {
    return data.filter((item) => {
      const matchesName = nameChanged
        ? item.descricao.toLowerCase().includes(nameChanged.toLowerCase())
        : true;
      const matchesCod = codChange
        ? item.codigo_produto != null &&
          item.codigo_produto.toString().toLowerCase() ===
            codChange.toLowerCase()
        : true;
      const matchesLocation = locationChanged
        ? item.location != null &&
          item.location.toLowerCase() === locationChanged.toLowerCase()
        : true;
      return matchesName && matchesCod && matchesLocation;
    });
  };

  const filteredData = applyFilters();

  console.log({ filteredData });
  console.log(filteredData.length);

  //paginacao
  const limit = paginacao.limit;
  const qntItems = filteredData.length;
  const qntPages = Math.ceil(qntItems / limit);
  const currentPage = paginacao.page;
  const visionPage = filteredData.slice(
    currentPage === 1 ? 0 : (currentPage - 1) * limit,
    currentPage * limit
  );

  const handlePageChange = (e, value) => {
    dispatch(handlePage(value));
  };

  console.log(visionPage);

  const BuscarDados = async () => {
    try {
      const response = await fetch("http://localhost:3000/produtos");
      const dados = await response.json();
      dispatch(changeData(dados));
    } catch (error) {
      console.log(error);
    }
  };

  const BuscarDadosParams = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/descricao/${produto}`
      );
      const dados = await response.json();
      dispatch(changeData(dados));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!produto) {
      BuscarDados();
    } else {
      BuscarDadosParams();
    }
  }, [produto]);

  const deleteItem = async (codigo_produto) => {
    try {
      await fetch(`http://localhost:3000/produtos/${codigo_produto}`, {
        method: "DELETE",
      });
      // Após deletar, buscar os dados novamente para atualizar a lista
      BuscarDados();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEditClick = (codigo_produto) => {
    navigate(`/editar/${codigo_produto}`);
  };

  console.log(data);
  return (
    <S.divBackgroundColor>
      <S.CardFilter>
        <Filter />
      </S.CardFilter>
      <div className="aligncenter mt-3">
        <div className="datatable">
          <Table>
            <thead>
              <tr>
                <th>Editar</th>
                <th>Deletar</th>
                <th>Código produto</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Localização</th>
              </tr>
            </thead>
            <tbody>
              {visionPage.length > 0 ? (
                visionPage.map((item) => (
                  <tr key={item.codigo_produto}>
                    <td>
                      <Button
                        onClick={() => handleEditClick(item.codigo_produto)}
                      >
                        <FaEdit />
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => deleteItem(item.codigo_produto)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </td>
                    <td>{item.codigo_produto}</td>
                    <td>{item.descricao}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.location}</td>
                  </tr>
                ))
              ) : (
                <h4>Is loading....</h4>
              )}
            </tbody>
          </Table>
        </div>
        <div className="pagination">
          <Stack spacing={1}>
            <Pagination
              count={qntPages}
              onChange={handlePageChange}
              size="large"
              color="primary"
            />
          </Stack>
        </div>
      </div>
    </S.divBackgroundColor>
  );
};
