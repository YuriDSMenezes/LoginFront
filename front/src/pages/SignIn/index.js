import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import Button from '@material-ui/core/Button'

import { signInRequest } from '../../store/modules/auth/actions'

import * as Yup from 'yup'

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  password: Yup.string().min(6, 'Mínimo 6 caractéres').required("A senha é obrigatória")
})

export default function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)


  function handleSubmit({ name, password }) {
    dispatch(signInRequest(name, password))
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type='text' placeholder="Digite seu nome" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <Button variant='contained' type="submit">{loading ? 'Carregando...' : 'Entrar'}</Button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </Container>
  )
}