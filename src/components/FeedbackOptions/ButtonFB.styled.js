import { styled } from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 30%;
  border: 5px solid white;
  background-color: #444444;
  color: white;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  outline: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
// export const BtnIcon = styled.svg`
//   font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 24;
// `;
