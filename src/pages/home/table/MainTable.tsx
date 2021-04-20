import React from 'react'

import TableHeader from './TableHeader'
import TableContent from './TableContent'

import { makeStyles } from '@material-ui/core/styles'
import { Table, TableContainer, TableBody, Paper } from '@material-ui/core'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    margin: '4rem auto',
    width: '90%',
  },
  paper: {
    minHeight: '100vh',
  },
})

function MainTable() {
  const classes = useStyles()
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHeader />
        <TableBody>
          <TableContent />
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MainTable
