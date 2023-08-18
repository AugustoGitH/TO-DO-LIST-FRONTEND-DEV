import styled from "styled-components";
import { presenceAnimation } from "../../animations/presence";


export const CardAuthentication = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000006f;
  z-index: 99;
  .card{
    width: 600px;
    box-shadow: 5px 5px #ddddddb9;
    color: #000;
    background-color: #dddddd;
    border-radius: .3rem;
    padding: 4rem 2rem;
    position: relative;
    .btn-close{
      all: unset;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #000;
      position: absolute;
      top: 1rem;
      cursor: pointer;
      right: 2rem;

    }
    h1{
      text-transform: uppercase;
      text-align: center;
      font-size: 1.7rem;
      line-height: 1.9rem;
      margin-bottom: 2rem;
    }
    form{
      margin-bottom: 2rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: .5rem;
      position: relative;
      .input{
        width: 100%;
        .helper-text{
          font-size: .8rem;
          color: #ac0404;
          font-weight: bold;
          padding-left: .5rem;
          display: inline-block;
          line-height: .8rem;
          margin-top: .4rem;
          ${presenceAnimation({
  animation: "scale",
  duration: .2
})}
        }
        input{
        border-radius: .3rem;
        width: 100%;
        border: none;
        padding: .5rem 1rem;
        box-shadow: 3px 3px #a0a0a073;
        outline: none;
        transition: .2s;
        &:focus{
          box-shadow: none;
          transform: translate(3px, 3px);
        }
      }
      }
      .btn-form{
        all: unset;
        background-color: #000;
        box-shadow: 3px 3px #000000b2;
        border: 1px solid #000;
        color: #fff;
        width: 90px;
        font-size: .8rem;
        font-weight: bold;
        border-radius: .2rem;
        text-align: center;
        opacity: .7;
        cursor: pointer;
        padding: .4rem 0;
        transition: .2s;
        &:hover{
          opacity: 1;
          box-shadow: none;
          transform: translate(3px, 3px);
        }
      }
    }
  }


`