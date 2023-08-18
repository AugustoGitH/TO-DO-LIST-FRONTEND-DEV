import styled from "styled-components";
import { presenceAnimation } from "../../../../animations/presence";


export const InputTask = styled.div`
width: 100%;
margin-top: 4rem;
label{
  color: #E9B95B;
  font-weight: bold;
  display: inline-block;
  margin-bottom: .2rem;
  padding-left: .7rem;
}
.input-and-btns{
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  input{
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: .6rem;
    font-size: 1;
    padding: 0 2rem;
    border: none;
    box-shadow: 3px 3px #ffffffae;
    transition: .2s;
    &:focus{
      box-shadow: none;
      transform: translate(3px, 3px);
    }
  }
  button.btn-add{
    background-color: #E9B95B;
    box-shadow: 3px 3px #e9ba5b9b; 
  }
  button.btn-cancel{
    background-color: #f16363;
    box-shadow: 3px 3px #f16363c0; 
    ${presenceAnimation({
  animation: "scale",
  duration: .3
})
  }
  }
  button{
    all: unset;
    flex: none;
    width: 40px;
    height: 100%;
    cursor: pointer;
    
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
    opacity: .7;
    &:hover{
      opacity: 1;
      box-shadow: none;
      transform: translate(3px, 3px);
    }
    svg{
      width: 15px;
    }
  }
 
}

 
`