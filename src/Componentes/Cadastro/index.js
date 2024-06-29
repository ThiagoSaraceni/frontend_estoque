import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import * as S from "../styled";
import { useParams } from "react-router-dom";

export const Cadastro = () => {
  const { codigo_produto } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const showSuccessAlert = (message) => {
    toast.success(message);
  };

  const showErrorAlert = () => {
    toast.error("Código do produto já existe!");
  };

  useEffect(() => {
    if (codigo_produto) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/produtos/${codigo_produto}`
          );
          const item = await response.json();
          console.log(item);
          setValue("codigo_produto", codigo_produto);
          setValue("descricao", item[0].descricao);
          setValue("quantity", item[0].quantity);
          setValue("price", item[0].price);
          setValue("location", item[0].location);
          console.log(item);
        } catch (error) {
          console.error("Error fetching item:", error);
        }
      };
      fetchData();
    } else {
      reset();
    }
  }, [codigo_produto, setValue, reset]);

  const createItem = async (item) => {
    try {
      const response = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      console.log(response);
      const dados = await response.text();
      console.log(response.status);
      if (response?.status === 400) {
        console.log("deu ruim");
        showErrorAlert();
      } else {
        showSuccessAlert("Cadastro realizado com sucesso!");
        reset();
        return dados; // Retorna os dados criados
      }
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const onSend = (data) => {
    if (codigo_produto) {
      updateItem(data);
    } else {
      createItem(data);
    }
  };

  console.log(codigo_produto);

  const updateItem = async (item) => {
    try {
      const response = await fetch(
        `http://localhost:3000/produtos/${item.codigo_produto}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      const dados = await response.text();
      showSuccessAlert("Edição feita com sucesso! ");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <S.divBackgroundColor>
      <S.Center>
        <S.centralizarDiv></S.centralizarDiv>
        <S.divCenter>
          <S.ContainerCadastro>
            <h3 className="mb-4">
              {codigo_produto
                ? "Editar cadastro de produto"
                : "Cadastro de produtos"}
            </h3>
            <form onSubmit={handleSubmit(onSend)} className="centercenter">
              <div className="input-group">
                <label>Código produto</label>
                <input
                  {...register("codigo_produto", {
                    required: "Digite o código do produto",
                  })}
                  className="inpt"
                  type="number"
                  placeholder="código"
                ></input>
                {errors.codigo_produto && (
                  <p className="error">{errors.codigo_produto.message}</p>
                )}
              </div>
              <div className="input-group">
                <label>Descrição</label>
                <textarea
                  {...register("descricao", {
                    required: "Digite a descrição do produto",
                  })}
                  className="inpt"
                  type=""
                  placeholder="descrição"
                ></textarea>
                {errors.descricao && (
                  <p className="error">{errors.descricao.message}</p>
                )}
              </div>
              <div className="input-group">
                <label>Quantidade</label>
                <input
                  {...register("quantity", {
                    required: "Digite a quantidade em estoque do produto",
                  })}
                  className="inpt"
                  type="number"
                  placeholder="quantidade"
                ></input>
                {errors?.quantity && (
                  <p className="error">{errors?.quantity.message}</p>
                )}
              </div>
              <div className="input-group">
                <label>Preço</label>
                <input
                  {...register("price", {
                    required: "Digite o preço do produto",
                  })}
                  className="inpt"
                  type="number"
                  placeholder="preço"
                ></input>
                {errors?.price && (
                  <p className="error">{errors?.price.message}</p>
                )}
              </div>
              <div className="input-group">
                <label>Localização</label>
                <select {...register("location")} required>
                  <option value="">Selecione uma opção</option>
                  <option value="MA">MA</option>
                  <option value="MB">MB</option>
                  <option value="PP">PP</option>
                </select>
              </div>

              <S.ButtonCadastro color="primary" type="submit">
                {codigo_produto ? "Editar" : "Cadastrar"}
              </S.ButtonCadastro>
            </form>
          </S.ContainerCadastro>
        </S.divCenter>
      </S.Center>
      <Toaster />
    </S.divBackgroundColor>
  );
};
