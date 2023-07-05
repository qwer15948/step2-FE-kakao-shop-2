import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import useInput from "../../hooks/useInput"
import { register } from "../../services/api"

const RegisterForm = () => {
  const {value, handleOnChange} = useInput({
    username:"",
    email:"",
    password:"",
    passwordConfirm:""
  }) 
  
  return (
    <Container>
      <InputGroup 
        id="username"
        type="text" 
        name="username"
        placeholder="사용자의 이름을 입력해주세요" 
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup 
        id="email" 
        type="email" 
        name="email"
        placeholder="이메일을 입력해주세요" 
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup 
        id="password" 
        type="password" 
        name="password"
        placeholder="******" 
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <InputGroup 
        id="passwordConfirm" 
        type="password" 
        name="passwardConfirm"
        placeholder="******" 
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        onClick={()=>{
          //api 요청 
          // register(value) 로 보내면 passwordConfirm 이라는 불필요한 값까지 섞여있음
          register({
            email: value.email,
            password: value.password,
            username: value.username
          })
        }}
      >회원가입</Button>
    </Container>
  )
}

export default RegisterForm