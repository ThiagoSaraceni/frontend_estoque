import { Button } from "reactstrap";
import * as S from "../styled";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFilter,
  FilterByName,
  FilterByCod,
  FilterByLocation,
  ClearFilter,
} from "../../redux/estoqueSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const { params } = useSelector((state) => state.estoque);

  const filter = params?.filter;
  console.log(filter);

  console.log(params);

  const handleOpenFilter = () => {
    dispatch(handleFilter(!filter));
  };

  const handleChangeFilterName = (e) => {
    dispatch(FilterByName(e.target.value));
  };

  const handleChangeFilterCod = (e) => {
    dispatch(FilterByCod(e.target.value));
  };

  const handleChangeFilterLocation = (e) => {
    dispatch(FilterByLocation(e.target.value));
  };

  const handleClearParams = () => {
    dispatch(ClearFilter());
  };

  return (
    <>
      <S.HeaderFilter>
        <div>
          <h5>Produtos cadastrados</h5>
        </div>
        <div>
          <Button onClick={() => handleOpenFilter()}>Filtro</Button>
        </div>
      </S.HeaderFilter>
      {filter ? (
        <div className="filter">
          <div className="me-4">
            <label className="lblinput">Descrição produto</label>
            <input
              className="inptfilter"
              type="text"
              onChange={(e) => handleChangeFilterName(e)}
            ></input>
          </div>

          <div className="me-4">
            <label className="lblinput">Codigo produto</label>
            <input
              className="inptfilter"
              type="text"
              onChange={(e) => handleChangeFilterCod(e)}
            ></input>
          </div>

          <div className="me-4">
            <label className="lblinput">Localização Produto</label>

            <select
              onChange={(e) => handleChangeFilterLocation(e)}
              className="selct"
            >
              <option value="">Selecione uma opção</option>
              <option value="MA">MA</option>
              <option value="MB">MB</option>
              <option value="PP">PP</option>
            </select>
          </div>

          <div className="d-flex align-items-end">
            <Button
              color="danger"
              size="sm"
              className="btnFilter"
              onClick={handleClearParams}
            >
              <b>Limpar FILTRO</b>
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};
