import styled from 'styled-components';

const Square = styled.div`
  flex: 1 1 ${props => props.w}px;
  height: ${props => props.h}px;

  div {
    width: 100%;
    height: 100%;
    background-color: #CCC;
    position: relative; 
    z-index: 1;
    transition: 0.5s;
    top: 0;
    right: -100%;
    opacity: 0.7;
    overflow-x: hidden;
  }
  &:hover div {
    transform: translateX(-100%);
  }
  overflow-x: hidden;

  // Thank them somehow
  // https://codepen.io/Coding_Journey/pen/VopGgO?editors=1100
`;

export default Square;