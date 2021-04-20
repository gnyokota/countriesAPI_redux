import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toogleCart } from '../../../redux/actions/fetchCartAction'
import { FetchState } from '../../../redux/types/fetchCart'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import {
  Drawer,
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      maxWidth: 320,
      margin: '0.5rem auto',
      width: '95%',
    },
    drawerPaper: {
      width: 400,
      marginTop: 64,
    },
    img: {
      height: '30px',
      width: 'auto',
      margin: 0,
    },
  })
)

type State = {
  data: FetchState
}

function CartDrawer() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { open, inCart } = useSelector((state: State) => state.data)

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
      open={open}
      onClose={() => dispatch(toogleCart(false))}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Flag</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Qty.</TableCell>
              <TableCell align="center">Remove from cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inCart?.map((country) => (
              <TableRow key={country.alpha2Code}>
                <TableCell align="center">
                  <img
                    className={classes.img}
                    src={country.flag}
                    alt="countrie-flag"
                  />
                </TableCell>
                <TableCell align="center">{country.name}</TableCell>
                <TableCell align="center">{country.qty}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="show new countries" color="inherit">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Drawer>
  )
}

export default CartDrawer
