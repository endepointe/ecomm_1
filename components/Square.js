import styled from 'styled-components';

const Square = styled.div`
  flex: 1 1 ${props => props.w}px;
  height: ${props => props.h}px;
`;

export default Square;