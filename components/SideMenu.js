import styled from 'styled-components';

const SideMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #CCC;
  height: 100vh;
  text-align: left;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 676px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 3rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 676px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: var(--shopnow-btn-color);
    }
  }

  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;

export default SideMenu;