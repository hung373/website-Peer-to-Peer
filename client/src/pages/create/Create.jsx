import React, { useContext, useState } from "react";
import styles from "./Create.module.css";
import TopBar from "../../components/topbar/TopBar";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import axios from "axios";
import { BigNumber } from 'bignumber.js';
import useEth from "../../contexts/EthContext/useEth";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const { state: { contract, accounts } } = useEth();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState(null);
  const { user } = useContext(AuthContext);
  const navagate = useNavigate()
  const handleCreate = async (e) => {
    e.preventDefault();
    const s = await contract.methods.createItem(title, new BigNumber(parseInt(price) * 10**18)).send({ from: accounts[0] });
    const product = {
      title,
      desc,
      price: new BigNumber(parseInt(price) * 10**18),
      indexItem : s.events.ItemCreated.returnValues[0],
      state : s.events.ItemCreated.returnValues.state,
      itemAdd: s.events.ItemCreated.returnValues._itemaddress,
      author: user._id,
      owner: user._id,
    };
    if (photo) {
      const data = new FormData();
      const filename = Date.now() + photo.name;
      data.append("name", filename);
      data.append("file", photo);
      product.photo = filename;
      try {
        await axios.post("http://localhost:8000/api/upload/", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("http://localhost:8000/api/product/", product);
      // navagate(`/`) 
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <TopBar />
      <div className={styles.create}>
        <h1 className={styles.title}>TẠO SẢN PHẨM CỦA BẠN</h1>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <form className={styles.form} onSubmit={handleCreate}>
              <div className={styles.field}>
                <h5>Ảnh</h5>
                <div className={styles.boxUploadFile}>
                  <div className={styles.type}>
                    {photo ? `${photo.name}` : "PNG, JPG, GIF, WEBP "}
                  </div>
                  <input
                    id="upLoadPhoto"
                    className={styles.upLoadFile}
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                  <label htmlFor="upLoadPhoto" className={styles.btn}>
                    Browser
                  </label>
                </div>
              </div>
              <div className={styles.field}>
                <h5>Tên</h5>
                <input
                  className={styles.input}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                />
              </div>
              <div className={styles.field}>
                <h5>Mô tả</h5>
                <textarea
                  className={styles.inputDesc}
                  type="text"
                  onChange={(e) => setDesc(e.target.value)}
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
              <div className={styles.field}>
                <h5>Giá(ETH)</h5>
                <input
                  className={styles.input}
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <center><button className={styles.btn} type="submit">
                Xác nhận
              </button></center>
            </form>
          </div>
          {/* {photo && (
            <div className={styles.right}>
              <div className={styles.preview}>
                <div className={styles.box}>
                  <div className={styles.img}>
                    <img
                      className={styles.imgNFT}
                      src={URL.createObjectURL(photo)}
                      alt=""
                    />
                  </div>
                  <div className={styles.bottomBoxItem}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.priceBox}>
                      <div className={styles.price}>{price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
      <Footer />
    </div>
  );
}