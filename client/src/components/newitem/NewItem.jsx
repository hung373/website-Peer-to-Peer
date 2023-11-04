import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./NewItem.module.css";
import { hotItem } from "../../data";

export default class SwipeToSlide extends Component {
  render() {
    return (
      <div className={styles.newitems}>
        <br /><br />
        <div className='line'></div>
        <br /><br /><br /><br />
        <h2 className="mainTitle">Hoạt động gần đây</h2>
        <div className={styles.center}>
          <div className={styles.boxItem}>
            <div className={styles.img}>
              <img
                className={styles.imgNFT}
                src="https://i.seadn.io/s/production/dec0f3d6-e8e1-4db6-9898-0c46012c942c.png?w=500&auto=format 1x, https://i.seadn.io/s/production/dec0f3d6-e8e1-4db6-9898-0c46012c942c.png?w=500&auto=format 2x"
                alt=""
              />
            </div>
            <div className={styles.bottomBoxItem}>
              <div className={styles.title}>Ether</div>
            </div>
          </div>
          <div className={styles.boxItem}>
            <div className={styles.img}>
              <img
                className={styles.imgNFT}
                src="https://i.seadn.io/gcs/files/9508acda43367f3c6ac78fd8d55bbea5.png?auto=format&dpr=1&h=500&fr=1"
                alt=""
              />
            </div>
            <div className={styles.bottomBoxItem}>
              <div className={styles.title}>Skyborne - Genesis Immortals</div>
            </div>
          </div>
          <div className={styles.boxItem}>
            <div className={styles.img}>
              <img
                className={styles.imgNFT}
                src="https://i.seadn.io/gcs/files/0aa3075ce0e2a623cdf4beb708263967.png?auto=format&dpr=1&h=500&fr=1"
                alt=""
              />
            </div>
            <div className={styles.bottomBoxItem}>
              <div className={styles.title}>Skyborne - Nexian Gems</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}