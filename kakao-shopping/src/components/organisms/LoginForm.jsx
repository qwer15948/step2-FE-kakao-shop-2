import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { loginApi } from "../../apis/api";
import { loginSuccess, login } from "../../actions/authActions";
import Title from "../atoms/Title";
import { useDispatch } from "react-redux";
const LoginForm = () => {
  const [value, handleOnChange] = useInput({
    email:"",
    password:"",
  })
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>로그인</Title>
      <InputGroup id="email" type="email" placeholder="이메일" label="이메일" value={value.email} onChange={handleOnChange}/>
      <InputGroup id="password" type="password" placeholder="비밀번호"  label="비밀번호" value={value.password} onChange={handleOnChange}/>
      <Button
        onClick={() => {
          dispatch(loginSuccess());
          dispatch(login());
          loginApi({
            email:value.email,
            password: value.username
          })
        }}>로그인</Button>
    </Container>
  );
}

export default LoginForm;