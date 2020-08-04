import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
width: 100%;
max-width: 315px;

form {
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  margin:0 auto;

  input {
    background-color: rgba(0,0,0,0.1);
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color:#fff;
    margin: 0 0 10px;
    width: 100%;

    &::placeholder {
      color:rgba(255,255,255,0.7);
    }
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    font-weight:bold;
    color:#fff;
    background:#F08418;
    width: 100%;
    font-size: 1rem;
    transition: background 0.5s;

    &:hover {
      background: ${darken(0.03, '#00A6A6')}
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 1rem;
    opacity: 0.8;

    &:hover {
      opacity:1;
    }
  }
}
`;
