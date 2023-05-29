/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

// src/components/Layout.js
import React from "react"
import { Box } from '@chakra-ui/react';
// import Background from "./Background"; // used for grid background
import Header from './header';
import Footer from './footer';
import "../styles/global.scss"
import * as layoutStyles from "../styles/layout.module.scss"

const Layout = ({ children }) => {
  return (

    <Box className={layoutStyles.layout}>
      <Header />
      <Box flexGrow={1} display="flex" justifyContent="center" alignItems="center">{children}</Box>
      <Footer />
    </Box>
  )
}

export default Layout

