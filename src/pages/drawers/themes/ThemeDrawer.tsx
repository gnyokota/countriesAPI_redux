import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ThemeState } from '../../../redux/types/drawersCartTheme'
import { toogleTheme } from '../../../redux/actions/themeActions'

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
  theme: ThemeState
}

function ThemeDrawer() {
  const classes = useStyles()
  const { openTheme } = useSelector((state: State) => state.theme)
  const dispatch = useDispatch()

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={openTheme}
      onClose={() => dispatch(toogleTheme(false))}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Choose a Theme</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Drawer>
  )
}

export default ThemeDrawer
