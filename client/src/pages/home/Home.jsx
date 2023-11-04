import React from 'react'
import TopBar from '../../components/topbar/TopBar'
import HotCollections from '../../components/hotcollections/HotCollections'
import styles from "./Home.module.css"
import Header from '../../components/header/Header'
import SwipeToSlide from '../../components/newitem/NewItem'
import TopSeller from '../../components/topseller/TopSeller'
import Category from '../../components/category/Category'
import Footer from '../../components/footer/Footer'

export default function home() {
  return (
    <div className={styles.background}>
      <div className={styles.home}>
          <TopBar />
          <Header/>
          <HotCollections />
          <SwipeToSlide/>
          <TopSeller />
          <Category />
          <Footer />
      </div>
    </div>
  )
}