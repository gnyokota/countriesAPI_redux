import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ThemeState } from '../../../redux/types/themes'
import { toogleTheme } from '../../../redux/actions/themeActions'
import { ThemeContext } from './ThemeProvider'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import {
  Drawer,
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Avatar,
} from '@material-ui/core'
import { indigo, orange, red, purple, teal } from '@material-ui/core/colors'

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      maxWidth: 220,
      margin: '0.5rem auto',
      width: '95%',
    },
    drawerPaper: {
      width: 250,
      marginTop: 64,
    },
    button: {
      fontSize: '0.7rem',
      fontWeight: 'bold',
    },
    avatar: {
      padding: '0.5rem',
      width: 'auto',
      fontSize: '1rem',
    },
    avatarBlue: {
      backgroundColor: indigo[500],
    },
    avatarOrange: {
      backgroundColor: orange[500],
    },
    avatarRed: {
      backgroundColor: red[500],
    },
    avatarPurple: {
      backgroundColor: purple[500],
    },
    avatarTeal: {
      backgroundColor: teal[500],
    },
    paper: {
      minHeight: '100vh',
    },
  })
)

type State = {
  theme: ThemeState
}

function ThemeDrawer() {
  const setThemeName = useContext(ThemeContext)

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
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">Choose a Theme</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Avatar
                  variant="square"
                  className={`${classes.avatar} ${classes.avatarBlue}`}
                  color="primary"
                >
                  Blue
                </Avatar>
              </TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={() => setThemeName('blueTheme')}
                >
                  Change
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Avatar
                  variant="square"
                  className={`${classes.avatar} ${classes.avatarOrange}`}
                >
                  Orange
                </Avatar>
              </TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={() => setThemeName('orangeTheme')}
                >
                  Change
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Avatar
                  variant="square"
                  className={`${classes.avatar} ${classes.avatarRed}`}
                >
                  Red
                </Avatar>
              </TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={() => setThemeName('redTheme')}
                >
                  Change
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Avatar
                  variant="square"
                  className={`${classes.avatar} ${classes.avatarPurple}`}
                >
                  Purple
                </Avatar>
              </TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={() => setThemeName('purpleTheme')}
                >
                  Change
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">
                <Avatar
                  variant="square"
                  className={`${classes.avatar} ${classes.avatarTeal}`}
                >
                  Teal
                </Avatar>
              </TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={() => setThemeName('tealTheme')}
                >
                  Change
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Drawer>
  )
}

export default ThemeDrawer
