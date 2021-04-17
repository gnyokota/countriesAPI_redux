import React from 'react'

import { TableHead, TableRow, TableCell } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  font: {
    fontWeight: 800,
  },
})

function TableHeader() {
  const classes = useStyles()
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.font} align="center">
          Flag
        </TableCell>
        <TableCell className={classes.font} align="center">
          Name
        </TableCell>
        <TableCell className={classes.font} align="center">
          Languages
        </TableCell>
        <TableCell className={classes.font} align="center">
          Population
        </TableCell>
        <TableCell className={classes.font} align="center">
          Region
        </TableCell>
        <TableCell className={classes.font} align="center">
          Add To Cart
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
