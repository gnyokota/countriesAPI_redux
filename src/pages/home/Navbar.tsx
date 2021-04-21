import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FetchState } from '../../redux/types/fetchCart'
import {
  handleSearchChange,
  toogleCart,
} from '../../redux/actions/fetchCartAction'
import { toogleTheme } from '../../redux/actions/themeActions'

import { fade, createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SearchIcon from '@material-ui/icons/Search'
import PublicIcon from '@material-ui/icons/Public'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
    },
    space: {
      flexGrow: 1,
    },
    menuButton: {
      //theme.spacing(1, 2) // = '8px 16px'
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    titleIcon: {
      margin: '0.5rem',
    },
    cartButton: {
      marginLeft: theme.spacing(2),
    },
    search: {
      flexGrow: 1,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100% !important',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 1),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
      width: '100% !important',
    },
  })
)

type State = {
  data: FetchState
}

function Navbar() {
  const classes = useStyles()

  const { searchField, inCart } = useSelector((state: State) => state.data)

  var totalQty = !inCart.length
    ? 0
    : inCart.reduce((accum, item) => accum + (item.qty as number), 0)

  console.log('inCart length', inCart.length)
  const dispatch = useDispatch()

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => dispatch(toogleTheme(true))}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Countries API <PublicIcon className={classes.titleIcon} />
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={(e) => dispatch(handleSearchChange(e.target.value))}
            value={searchField}
          />
        </div>
        <div className={classes.space} />
        <div className={classes.space} />
        <div className={classes.space} />
        <IconButton
          aria-label="show new countries"
          className={classes.cartButton}
          color="inherit"
          onClick={() => dispatch(toogleCart(true))}
        >
          <Badge badgeContent={totalQty} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
