import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 13px;
    background-color: white;
    width: 100%;
    max-width: 500px;
    padding-right: 13px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
    padding: 13px;
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-weight: 500;
    border-radius: 1px solid #ddd;
`;

export const Button = styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    cursor: pointer;
`;
