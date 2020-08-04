import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html {
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  font-family:'Roboto', sans-serif;
  width: 100%;
}

*,button,input {
  border:0;
  background:none;
}

a{
  text-decoration:none;
}

input:focus, button:focus{
  outline:0;
}

ul {
  list-style: none;
}
button {
  cursor:pointer;
}
`