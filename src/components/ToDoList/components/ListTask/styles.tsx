import styled from "styled-components";
import { presenceAnimation } from "../../../../animations/presence";

export const ListTask = styled.ul`
  width: 100%;
  margin-top: 4rem;
  
  display: flex;
  flex-direction: column;
`;

interface ITaskProps {
  wasfinished: string
}

export const Task = styled.li<ITaskProps>`
  width: 100%;
  padding: 2rem 1rem;
  ${({ wasfinished }) => wasfinished === "true" ? "background-color: #292828" : ""};
  border-top: 1px solid  ${({ wasfinished }) => wasfinished === "true" ? "#E9B95B" : "#ffffff40"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: .2s;
  ${presenceAnimation({
  animation: "translateRight",
  duration: 0.4,
})};
  .name-task{
    width: calc(100% - 200px);
    font-weight: bold;
    overflow-wrap: break-word;
  }
  .controller{
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    button{
      all: unset;
      fill: #fff;
      cursor: pointer;
      transition: .2s;
      opacity: .7;
      &:disabled{
        pointer-events: none;
        opacity: .4;
      }
      &:hover{
        opacity: 1;
      }
    }
    button.btn-edit{
      /* fill: #b1b1ff; */
    }
    button.btn-check{
      svg{
      }
    }
    button.btn-del{
      svg{
        /* fill: #fc7f7f; */
      }
    }
  }
`;
