import styled from "styled-components"

const Container =styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://th.bing.com/th/id/OIP.mcwnQFSqCIoxnfnGXXEAtgHaKQ?w=201&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7") ;
    display:flex;
    background-size:cover;
    align-items:center;
    justify-content:center;
`;
const Wrapper =styled.div`
    width:25%;
    padding:20px;
    background-color:white;

`;
const Title =styled.h1`
    font-size:24px;
    font-weight:300;

`;
const Form =styled.form`
    display:flex;
    flex-direction:column;

`;
const Input =styled.input`
    flex: 1;
    min-width:40%;
    margin:10px 0px;
    padding:10px;
`;
const Button =styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
`;
const Link=styled.a`
    margin:10px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>DON'T YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
