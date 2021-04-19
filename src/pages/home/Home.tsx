import React from 'react'
import CartDrawer from '../drawers/cart/CartDrawer'
import Navbar from './Navbar'
import MainTable from './table/MainTable'
import ThemeDrawer from '../drawers/themes/ThemeDrawer'

export default function Home() {
  return (
    <>
      <Navbar />
      <ThemeDrawer />
      <CartDrawer />
      <MainTable />
    </>
  )
}
