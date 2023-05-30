import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #ededed;
    padding-top: 120px;
    height: 100vh;
`;

export const InfoCart = styled.div`
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 10px auto;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const CartDescription = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 70%;

    @media screen and (max-width: 768px){
        width: 90%;
    }
`;


export const Summary = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 27%;
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        width: 90%;
        margin-top: 10px;
    }
`;

export const Product = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    padding: 20px;
    font-size: 20px;
    font-weight: 500;
`;


export const Frete = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;

    span:nth-of-type(2) {
        color: #00a650;
    }
`;
