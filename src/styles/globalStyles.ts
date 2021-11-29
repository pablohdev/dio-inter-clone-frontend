import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
      background-color: ${({theme}) => theme.colors.background};
  }
`

export default GlobalStyle