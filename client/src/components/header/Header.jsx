import styles from "./Header.module.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Header extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,

    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.desc}>
          <br /><br /><br />
          <h1 className={styles.title}>NFT Marketplace</h1>
          <br />
          <div className="name">Get an NFT marketplace with an eWallet for managing, minting, selling & trading art.</div>
          <br /><br /><br /><br />
          <div className={styles.center}>
            <span className={styles.btn}>Service options</span>
            <span className={styles.btn}>Seller details</span>
            <span className={styles.btn}>Budget</span>
            <span className={styles.btn}>Delivery time</span>
          </div>
        </div>
      </div>
    );
  }
}
