import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    position: fixed;
    background-color: #fff159;
    z-index: 1;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    gap: 10px;
`;

export const Logo = styled.div`
    width: 70px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        color: #181818;
        font-style: italic;
        font-weight: 600;
        font-size: 23px;
        cursor: pointer;
        text-decoration: none;
    }
`;
