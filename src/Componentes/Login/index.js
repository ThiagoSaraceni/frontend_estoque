import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import { useNavigate } from "react-router-dom";

import * as S from "../styled";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();

  return (
    <S.divBackgroundColor>
      <S.Center>
        <S.divCenter>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <S.Container>
              <S.centralizarDiv>
                <h3>Acesse o sistema</h3>
              </S.centralizarDiv>

              <div className="d-flex justify-content-center">
                <div>
                  <div className="inputgroup">
                    <input
                      {...register("login")}
                      type="text"
                      className="input-style"
                      name="login"
                      placeholder="login"
                    ></input>
                  </div>
                  <input
                    {...register("senha")}
                    type="password"
                    className="input-style"
                    placeholder="senha"
                  ></input>
                  <div cla>
                    <S.ButtonCadastro color="primary" type="submit">
                      Enviar{" "}
                    </S.ButtonCadastro>
                  </div>
                  <div className="mt-2">
                    <span className="weaktxt">Deseja se cadastrar? </span>
                    <b
                      className="marktxt"
                      onClick={() => navigate(`/cadastrar-user`)}
                    >
                      Clique aqui
                    </b>
                  </div>
                </div>
              </div>
            </S.Container>
          </Form>
        </S.divCenter>
      </S.Center>
    </S.divBackgroundColor>
  );
};
