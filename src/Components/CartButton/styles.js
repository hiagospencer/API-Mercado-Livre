import styled from "styled-components";

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 5px;
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
    margin-left: 20px;
    color: #333;
`;

export const Span = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    font-size: 11px;
    font-weight: 600;
`;
