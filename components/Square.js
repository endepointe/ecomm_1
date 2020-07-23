import styled from 'styled-components';

const Square = styled.div`
  flex: 1 1 ${props => props.w}px;
  height: ${props => props.h}px;

  div {
    width: 100%;
    height: 100%;
    background-color: #ffeacc;
    position: absolute;
    z-index: 1;
    transition: 0.5s;
    top: 0%;
    left: 100%;
    opacity: 0.7;
  }

  div:hover {
    transform: translateX(-100%);
  }
`;

export default Square;