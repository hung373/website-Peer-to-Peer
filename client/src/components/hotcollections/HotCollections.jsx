import React, { useEffect, useState } from "react";
import styles from "./HotCollections.module.css";
import axios from "axios";
import { Link } from 'react-router-dom'

export default function HotCollections() {
  const PF = process.env.REACT_APP_IMAGES
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios("http://localhost:8000/api/product/")
      setProducts(res.data)
    }
    fetchProducts()
  }, [])
  return (
    <div className={styles.hotcollections}>
      <h2 className="mainTitle">Sản phẩm</h2>
      <div className={styles.dayne}>
        {products.map((item) => (
          <Link key={item._id} to={`/itemdetail/${item._id}`}>
            {parseInt(item.state) === 0 ? <div className={styles.wrapper}>
              <div className={styles.hotItem}>
                <div className={styles.topHotItem}>
                  <div className={styles.img}>
                    <img
                      className={styles.imgNFT}
                      src={PF + item.photo}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.bottomHotItem}>
                  <div className="name">{item.title}</div>
                  <div className={styles.price}>Giá: {(item.price / 10 ** 18).toFixed(8)} ETH</div>
                </div>
              </div>
            </div> : ""}
          </Link> 
        ))}
      </div>
    </div>
  );
}