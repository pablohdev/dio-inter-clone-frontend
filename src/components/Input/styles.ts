import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 46px;


    background: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 10px;

    margin-bottom: 20px;

    display:flex;
    justify-content: center;

    z-index: 5000;

    input {
        font-size: 0.75rem;
        font-weight: 400;
        background: transparent;
        border: 0;
        width: 100%;
        margin: 0 20px
    }
`