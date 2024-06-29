import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "estoque",
  initialState: {
    data: [],
    params: {
      filter: false,
      nomeproduto: "",
      cod: "",
      location: "",
    },
    paginacao: {
      page: 1,
      limit: 5,
    },
  },
  reducers: {
    changeData(state, { payload }) {
      state.data = payload;
    },
    handleFilter(state, { payload }) {
      state.params.filter = payload;
    },
    FilterByName(state, { payload }) {
      state.params.nomeproduto = payload;
    },
    FilterByCod(state, { payload }) {
      state.params.cod = payload;
    },
    FilterByLocation(state, { payload }) {
      state.params.location = payload;
    },
    ClearFilter(state, { payload }) {
      state.params.nomeproduto = "";
      state.params.cod = "";
      state.params.location = "";
    },
    handlePage(state, { payload }) {
      state.paginacao.page = payload;
    },
  },
});

export const {
  changeData,
  handleFilter,
  FilterByName,
  FilterByCod,
  FilterByLocation,
  ClearFilter,
  handlePage,
} = slice.actions;

export default slice.reducer;
