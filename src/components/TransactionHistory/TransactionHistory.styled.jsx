import styled from '@emotion/styled';

export const Table = styled.table`
    margin: 25px auto 0 auto;
    width: 300px;
    border-collapse: collapse;
    border-radius: 10px;
    overflow:hidden;    
`;


export const TableHead = styled.tr`
    height: 40px;
    background-color: #5fc;
    text-align: center;
    ter-transform: uppercase;
    color: white;
`;

export const TableItem = styled.tr`
    height: 35px;
    text-align: center;
    &:nth-of-type(even) {
        background-color: rgba(0,0,0,0.2)
    }
`;