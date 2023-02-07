import styled from '@emotion/styled';

export const Container = styled.ul`
    width: 300px;
    padding: 0;
`;

export const FriendItem = styled.li`
    display: flex;
    
    align-item: center;
    padding: 10px 15px;
    width: 250px;
    height: 70px;
    border-radius: 8px;
    border: 1px solid #000;
`;

export const Status = styled.span`
    margin-top: auto;
    margin-bottom: auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
    margin-left: 20px;
    width: 50px;
    height: 90%;
    birder-radius: 5px;
`;

export const Name = styled.p`
    margin-left: 20px;
    font-size: 24px;
    font-weight: 700;
`;