import styled from 'styled-components';


export const HeaderContainer = styled.head`
    width: 100%;
    height: 90px;

    background-color: ${({theme}) => theme.colors.background};

    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderWrapper = styled.div`
    width: 80%;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`