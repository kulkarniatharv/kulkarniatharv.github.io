/* eslint-disable react/prop-types */
// src/components/Layout.js
import { useLocation } from '@reach/router'
import React, { ReactNode } from 'react'
import Container from './Container'
import Footer from './footer'
import Header from './Header'
import ScrollToTopButton from './ScrollToTopButton'

import '../styles/global.scss'
import * as layoutStyles from '../styles/layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className={layoutStyles.layout}>
      <div className={layoutStyles.backgroundWrapper}>
        <div className={layoutStyles.dottedBackground} />
      </div>
      <div className="min-h-screen">
        <Header />
        <Container
          className={`flex-grow flex justify-center items-center overflow-auto min-h-[calc(100vh-(100px+100px))] ${layoutStyles.contentArea}`}
        >
          {children}
          <ScrollToTopButton />
        </Container>
        {!isHomePage && (
          <footer className={`py-6 ${layoutStyles.contentArea}`}>
            <Footer />
          </footer>
        )}
      </div>
    </div>
  )
}

export default Layout
