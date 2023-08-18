import { styled } from "styled-components";
import { presenceAnimation } from "../../../animations/presence";

export const AlertInBox = styled.div`
  position: absolute;
  width: calc(100% + .8rem);
  left: -.4rem;
  height: calc(100% + .8rem);
  bottom: -.4rem;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  ${presenceAnimation({
  animation: "opacity",
  duration: .2
})
  }
  .helper-card{
    background-color: #2e2828;
    padding: 2rem 3rem;
    color: #fff;
    border-radius: .6rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    gap: 1rem;
    ${presenceAnimation({
    animation: "scale",
    duration: .2
  })
  }
    button{
      all: unset;
      cursor: pointer;
      border-radius: .4rem;
      background-color: #E9B95B;
      color: #000;
      padding: .4rem 1rem;
      border: 1.5px solid #E9B95B;
      transition: .2s;
      &:hover{
        color: #E9B95B;
        background-color: transparent;
      }
    }
  }
`;
