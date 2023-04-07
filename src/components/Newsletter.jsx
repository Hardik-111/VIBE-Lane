import {Send} from '@material-ui/icons';
import styled from 'styled-components';

const Container=styled.div`
    height:60vh;
    ${'' /* background-color:blue; */}
    background: rgb(223,187,187);
    background: linear-gradient(90deg, rgba(223,187,187,1) 0%, rgba(233,230,209,1) 52%, rgba(226,177,162,1) 95%);
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title=styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc=styled.div`
    font-size: 24px;
    font-weight:300;
    margin-bottom : 20px;

`;

const InputContainer=styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input=styled.input`
    border:none;
    flex:8;
    padding-left: 20px;
`;

const Button=styled.button`
    flex:1;
    border:none;
    background-color: teal;
    color:white;
    
`;

export default function Newsletter() {
  return (
    <div>
      <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products</Desc>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
      </Container>
    </div>
  )
}
