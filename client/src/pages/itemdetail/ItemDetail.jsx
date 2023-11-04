import React, { useEffect, useState, useContext } from "react";
import Footer from "../../components/footer/Footer";
import TopBar from "../../components/topbar/TopBar";
import styles from "./ItemDetail.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import useEth from "../../contexts/EthContext/useEth";
import { AuthContext } from '../../contexts/Auth/AuthContext'

export default function ItemDetail() {
  const PF = process.env.REACT_APP_IMAGES
  const { state: { contract, accounts } } = useEth();
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [toggleState, setToggleState] = useState(1);
  const [product, setProduct] = useState({})
  const [pay, setPay] = useState(0)
  const [indexItem, setIndexItem] = useState(0)
  const { user } = useContext(AuthContext)

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleBuy = async () => {
    await contract.methods.purchaseItem(parseInt(indexItem)).send({ from: accounts[0], value: pay });

    const exchange = {
      state: "1",
      buyer: user._id,
    };
    try {
      await axios.put(
        `http://localhost:8000/api/product/${product._id}`,
        exchange
      );
      window.location.reload(true);
    } catch (err) { }
  }

  useEffect(() => {
    const fetchItem = async () => {
      const res = await axios.get(`http://localhost:8000/api/product/${path}`)
      setProduct(res.data)
      setIndexItem(res.data.indexItem)
      setPay(res.data.price)
    }
    fetchItem()
  }, [path])

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <TopBar />
      <br />
      <div className={styles.title}>{product.title}</div>
      <div className={`${styles.itemdetail}`}>
        <div className={styles.left}>
          <img
            className={styles.img}
            src={PF + product.photo}
            alt=""
          />
          {console.log(product)}
          <div className="name">Item Address: {product.itemAdd}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.boxInfos}>
            <div className={styles.boxInfo}>
              <div className={styles.boxInfoDetail}>
              </div>
              <div className="avatarBox">
                <img
                  className="avatar"
                  src={product.owner?.avatar}
                  alt=""
                />
                <div className="name">{product.owner?.username}</div>
              </div>
              <br /> <br />
              <div className={styles.textDesc}>
                {product.desc}
              </div>
              <br />
              <div className={styles.box}>
                <h1>{`${(parseInt(product.price) / 10 ** 18).toFixed(8)} ETH`}</h1>
              </div>
              <br />
              <div className={styles.bottomRight}>
                {console.log(user.username === product.owner?.username)}
                {(product.state === "0" && user.username !== product.owner?.username) || (product.isForSale === true && user.username !== product.owner?.username) ? <button onClick={handleBuy} className={styles.btn}>Mua</button> : <button className={styles.btnDisabled}></button>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}