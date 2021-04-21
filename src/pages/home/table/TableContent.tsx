import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { FetchState } from '../../../redux/types/fetchCart'
import { fetchData, addToCart } from '../../../redux/actions/fetchCartAction'

import {
  TableRow,
  TableCell,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadWrapper: {
      textAlign: 'center',
    },
    img: {
      height: '50px',
      width: 'auto',
      margin: 0,
    },
  })
)

type State = {
  data: FetchState
}

function TableContent() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const { filteredCountries, pending } = useSelector(
    (state: State) => state.data
  )

  return (
    <>
      {!pending ? (
        filteredCountries.map((item) => (
          <TableRow key={item.alpha2Code}>
            <TableCell align="center">
              <img
                className={classes.img}
                src={item.flag}
                alt="countrie-flag"
              />
            </TableCell>

            <TableCell align="center">
              <Link to={`/countries/${item.alpha2Code}`}>{item.name}</Link>
            </TableCell>

            <TableCell align="center">
              {item.languages?.map((language) => (
                <li key={language.iso639_1}>{language.name}</li>
              ))}
            </TableCell>

            <TableCell align="center">{item.population}</TableCell>
            <TableCell align="center">{item.region}</TableCell>
            <TableCell align="center">
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => dispatch(addToCart(item))}
              >
                Add
              </Button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell className={classes.loadWrapper} colSpan={6}>
            {' '}
            <CircularProgress />
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

// React renders the component and memoizes the result.
// Before the next render, if the new props are the same,
// React reuses the memoized result skipping the next rendering
export default React.memo(TableContent)
