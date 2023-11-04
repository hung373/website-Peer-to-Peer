import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={`${styles.footer} container`}>
      <br /><br /><br /><br />
      <div className='line'></div>
      <br /><br /><br /><br />
      <div className={styles.topFooter}>
        <div className={styles.widget}>
          <div className={styles.title}>Về chúng tôi</div>
          <ul className={styles.listWidget}>
            <li className={styles.itemWidget}>Thông tin thêm</li>
            <li className={styles.itemWidget}>Báo chí</li>
            <li className={styles.itemWidget}>Cộng đồng</li>
            <li className={styles.itemWidget}>Blog</li>
          </ul>
        </div>
        <div className={styles.widget}>
          <div className={styles.title}>Sản phẩm</div>
          <ul className={styles.listWidget}>
            <li className={styles.itemWidget}>Exchanxe</li>
            <li className={styles.itemWidget}>Academy</li>
            <li className={styles.itemWidget}>Live</li>
            <li className={styles.itemWidget}>Charity</li>
            <li className={styles.itemWidget}>Lab</li>
            <li className={styles.itemWidget}>NFT</li>
          </ul>
        </div>
        <div className={styles.widget}>
          <div className={styles.title}>Hỗ trợ</div>
          <ul className={styles.listWidget}>
            <li className={styles.itemWidget}>Trung tâm trợ giúp</li>
            <li className={styles.itemWidget}>Chat hỗ trợ 24/7</li>
            <li className={styles.itemWidget}>Phí giao dịch</li>
            <li className={styles.itemWidget}>Quy tắc giao dịch</li>
            <li className={styles.itemWidget}>Xác minh Binance</li>
          </ul>
        </div>
        <div className={styles.widget}>
          <div className={styles.title}>Cộng đồng</div>
          <ul className={styles.listWidget}>
            <li className={styles.itemWidget}>facebook</li>
            <li className={styles.itemWidget}>Twitter</li>
            <li className={styles.itemWidget}>Youtube</li>
            <li className={styles.itemWidget}>Discord</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className="logo">
          <div className={styles.logo}>BINANCE<i className="fa-solid"></i></div>
        </div>
        <div className={styles.iconFooter}>
          <ul className={styles.listIcon}>
            <li className={styles.itemIcon}><i className={`fa-brands fa-facebook-f ${styles.iconMedia}`}></i></li>
            <li className={styles.itemIcon}><i className={`fa-brands fa-twitter ${styles.iconMedia}`}></i></li>
            <li className={styles.itemIcon}><i className={`fa-brands fa-linkedin-in ${styles.iconMedia}`}></i></li>
            <li className={styles.itemIcon}><i className={`fa-brands fa-pinterest-p ${styles.iconMedia}`}></i></li>
            <li className={styles.itemIcon}><i className={`fa-solid fa-wifi ${styles.iconMedia}`}></i></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
