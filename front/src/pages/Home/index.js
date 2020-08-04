import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import Button from '@material-ui/core/Button'

import { useDispatch } from 'react-redux'
import { signOut } from '../../store/modules/auth/actions'

import api from '../../services/api'

import { Container } from './styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: 'auto'
  },
  table: {
    minWidth: 450,
  },
});

export default function Home() {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    async function getUsers() {
      const response = await api.get('/users');

      const data = response.data.map(user => ({
        ...user,
        dateDistance: formatDistance(
          parseISO(user.createdAt),
          new Date(), {
          addSuffix: true,
          locale: pt
        }
        )
      }))

      setUsers(data)
    }

    getUsers()
  }, [])

  function handleClick() {
    dispatch(signOut())
  }

  return (
    <Container>
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table}>
          {users ? (
            <>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Criado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell align="right">{user.id}</TableCell>
                    <TableCell align="right">{user.dateDistance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          ) : ''}
        </Table>
      </TableContainer>
      <Button variant="contained" color="secondary" onClick={handleClick}>Sair</Button>
    </Container>
  );
}
