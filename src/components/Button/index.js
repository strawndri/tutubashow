import styled from "styled-components";

const Button = styled.button`
 color: var(--white);
    border: 1px solid var(--white);
    background: solid var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    border-width: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;