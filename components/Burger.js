import styled from 'styled-components';

const Burger = styled.button`
position: absolute;
top: 0.5rem;
left: 0.6rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 1.5rem;
height: 1.5rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 20;

&:focus {
  outline: none;
}

div {
  width: 100%;
  height: 0.2rem;
  background: ${({ open }) => open ? 'white' : 'black'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}
`;

export default Burger;