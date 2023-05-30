import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  th {
    padding-bottom: 20px;
  }

  td {
    padding: 30px;
    color: #666;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    max-width: 30ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

`;

export const Quantidade = styled.div`
  max-width: 100px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;

  span {
    padding: 0 10px;
  }

`;

export const Button = styled.button`
  background: transparent;
  border: none;
  width: 33%;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  color: #3483fa;
  padding: 0 5px;

`;
