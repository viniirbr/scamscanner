import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 600px;
`;

export const Cover = styled.div`
    height: 150px;
    width: 100%;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 0.25rem;
`;

export const Content = styled.div`
    height: 150px;
    padding: 20px;
`;
