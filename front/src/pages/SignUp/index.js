import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import Button from '@material-ui/core/Button'

import { useDispatch } from 'react-redux'
import { signUpRequest } from '../../store/modules/auth/actions'

import * as Yup from 'yup'

import { Container } from './styles';

export default function SignUp() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    password: Yup.string().min(6,"Mínimo 6 caractéres").required("A senha é obrigatória")
  })

  function handleSubmit({ name, password }) {
    dispatch(signUpRequest(name, password))
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type='text' placeholder="Nome completo" />
        <Input name="password" type="password" placeholder="Crie uma senha" />

        <Button type="submit">Criar conta</Button>
        <Link to="/">Já possuo conta</Link>
      </Form>
    </Container>
  )
}