import styled from 'styled-components';

export const StatementContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column ;
    justify-content: flex-start ;
    align-items: flex-start;
`

export const StatementItemContainer = styled.div`
    display: flex;
    width: 100%;
`

export const StatementItemInfo = styled.div`

    p{
        margin-bottom: 2px;
    }
`


export const StatementItemImage = styled.div<{
    type: 'pay' | 'received'
}>`
    width: 60px;
    height: 60px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.background};
    border-radius: 10px;
    margin-bottom: 20px;
      
    background-color: ${({type, theme}) => type === 'pay' ? theme.colors.red : theme.colors.green };
`;

