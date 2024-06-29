import { useForm } from "react-hook-form";
import { Form } from "reactstrap";

import * as S from "../styled";

export const CadastrarUsuario = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <S.divBackgroundColor>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <S.Center>
          <div className="d-flex justify-content-center">
            <div className="content-criar-conta">
              <S.centralizarDiv>
                <h3>Criar conta</h3>
              </S.centralizarDiv>
              <div className="inputgroup">
                <div className="inptcriaruser">
                  <input
                    {...register("nome")}
                    type="text"
                    className="input-cadastro-user me-3"
                    name="nome"
                    placeholder="nome"
                  ></input>
                  <input
                    {...register("sobrenome")}
                    type="text"
                    className="input-cadastro-user"
                    name="sobrenome"
                    placeholder="sobrenome"
                  ></input>
                </div>

                <input
                  {...register("email")}
                  type="email"
                  className="input-cadastro-user"
                  name="email"
                  placeholder="email"
                ></input>
              </div>
              <div className="inptcriaruser">
                <input
                  {...register("senha")}
                  type="password"
                  className="input-cadastro-user me-3"
                  placeholder="senha"
                ></input>
                <input
                  {...register("confirmsenha")}
                  type="password"
                  className="input-cadastro-user"
                  placeholder="confirmar senha"
                ></input>
              </div>
              <S.ButtonCadastro color="primary" type="submit">
                Enviar
              </S.ButtonCadastro>
              <div className="mt-2 ">
                <span className="weaktxt">Já tem uma conta? </span>
                <strong className="marktxt">Clique aqui</strong>
              </div>
            </div>
          </div>
        </S.Center>
      </Form>
    </S.divBackgroundColor>
  );
};
