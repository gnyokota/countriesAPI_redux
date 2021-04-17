import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { FetchState, Countries } from '../../redux/types/fetchData'

import {
  Grid,
  makeStyles,
  Avatar,
  Typography,
  Box,
  Button,
} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles({
  title: {
    padding: '1rem',
    fontWeight: 900,
  },
  card: {
    padding: '2rem 0.5rem',
    borderRadius: '8px',
    maxWidth: 250,
    margin: '1rem auto',
    textAlign: 'center',
  },
  avatar: {
    width: '80px',
    height: '80px',
    margin: '1rem auto',
  },
  img: {
    width: '120px',
    height: 'auto',
  },
  name: {
    align: 'center',
    marginBottom: '1rem',
  },
  details: {
    fontSize: '1rem',
    display: 'block',
    margin: '0.5rem auto',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    fontWeight: 600,
    margin: '0.5rem',
  },
})

type Alpha = {
  alpha: string
}

type State = {
  data: FetchState
}

function CountryCard() {
  //use params from the url path:name
  const { alpha } = useParams<Alpha>()

  const history = useHistory()
  //history will avoid rendering the parent page when I go from children to parent
  const handleClick = () => {
    history.goBack()
  }

  const classes = useStyles()

  const { countries } = useSelector((state: State) => state.data)

  const alphaCountry = countries.filter((country: Countries) => {
    return country.alpha2Code
      ?.toLowerCase()
      .includes(alpha.toLowerCase().trim())
  })

  return (
    <div>
      {alphaCountry.map((item) => (
        <div key={item.alpha2Code}>
          <Typography variant="h3" align="center" className={classes.title}>
            {item.name}
          </Typography>
          <Box
            boxShadow={2}
            component={Grid}
            justifyContent="space-between"
            alignItems="center"
            className={classes.card}
          >
            {/* avatar with the flag*/}
            <Avatar className={classes.avatar}>
              <img
                className={classes.img}
                src={item.flag}
                alt="countrie-flag"
              />
            </Avatar>

            {/* name */}
            <Typography variant="h5" align="center" className={classes.name}>
              {item.name}
            </Typography>
            {/* Region */}
            <Typography variant="caption" className={classes.details}>
              {item.region}
            </Typography>
            {/* Region */}
            <Typography variant="caption" className={classes.details}>
              {item.nativeName}
            </Typography>
            {/* link and button  */}
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<ArrowBackIosIcon />}
              onClick={handleClick}
            >
              BACK TO LIST
            </Button>
          </Box>
        </div>
      ))}
    </div>
  )
}

export default CountryCard
