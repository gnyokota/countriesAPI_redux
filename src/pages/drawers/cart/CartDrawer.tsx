import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toogleCart } from '../../../redux/actions/cartActions'
import { CartState } from '../../../redux/types/drawers'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  Drawer,
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableCell,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      maxWidth: 300,
      margin: '0.5rem auto',
      width: '95%',
    },
    drawerPaper: {
      width: 320,
      marginTop: 64,
    },
  })
)

type State = {
  cart: CartState
}

function CartDrawer() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { open } = useSelector((state: State) => state.cart)

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
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Drawer>
  )
}

export default CartDrawer
