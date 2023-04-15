import styled from "styled-components";

interface ButtonProps {
    variant: boolean;
  }

export const ItemStyle = styled.div<ButtonProps>`
  margin: 10px 10px 10px 10px;
  opacity: ${props => props.variant ? 1.0 : 0.5};
  &:hover {
    transform: scale(1.02);
    opacity: 1.0;
  }
`;
