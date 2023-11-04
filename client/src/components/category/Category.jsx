import React from 'react'
import styles from "./Category.module.css"

export default function Category() {
  return (
    <div className={styles.category}>
        <br/><br/><br/><br/>
        <div className='line'></div>
        <br/><br/><br/><br/>
        <h2 className="mainTitle">Tìm kiếm bằng danh mục</h2>
        <div className={styles.categoryList}>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fa fa-image'></i>
                    <span>Art</span>
                </a>
            </div>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fa fa-music'></i>
                    <span>Music</span>
                </a>
            </div>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fab fa-xbox'></i>
                    <span>Gaming</span>
                </a>
            </div>
            <div className={styles.categoryItem}>
                <a href="1" className={styles.categoryBox}>
                    <i className='fa fa-camera'></i>
                    <span>Photography</span>
                </a>
            </div>
        </div>
    </div>
  )
}
