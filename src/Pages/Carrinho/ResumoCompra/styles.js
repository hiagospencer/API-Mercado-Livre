import styled from 'styled-components';

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    h3 {
        padding: 18px;
        font-size: 20px;
        font-weight: 500;
    }
`;

export const BoxResume = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductResume = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 14px;
`;

export const FreteResume = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 14px;

    span:nth-of-type(2) {
        color: #00a650;
        font-size: 16px;
    }
`;

export const TotalResume = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 14px;
`;

export const Button = styled.button`
    width: 90%;
    margin: 14px auto;
    border: none;
    padding: 8px;
    background-color: #3483fa;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    transition: background-color .2s;

    &:hover {
        background-color: #2968c8;
    }
`;
