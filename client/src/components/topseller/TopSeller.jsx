import React from 'react'
import styles from "./TopSeller.module.css"
import { hotItem } from "../../data";

export default function TopSeller() {
    return (
        <div className={styles.topSeller}>
            <br/><br/><br/><br/>
            <div className='line'></div>
            <br/><br/><br/><br/>
            <h2 className="mainTitle">Các đồng tiền mã hóa phổ biến</h2>
            <br/>
            <ol className={styles.authorList} >
                <div className="avatarBox">
                    <div className="name">Tên</div>
                </div>
                <div className="name">Giá tiền gần nhất</div>
                <div className="name">Biến động giá 24h</div>
                <div className="name">Vốn hóa thị trường</div>
            </ol>
            <br/>
            <ol className={styles.authorList} >
                <div className="avatarBox">
                    <img
                        className="avatar"
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                        alt=""
                    />
                    <div className="name">BNB</div>
                </div>
                <div className="name">$243,2</div>
                <div className="percent">+ 0.21 %</div>
                <div className="name">$37.449 M</div>
            </ol>
            <br/><br/><br/>
            <ol className={styles.authorList} >
                <div className="avatarBox">
                    <img
                        className="avatar"
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                        alt=""
                    />
                    <div className="name">Blockchain</div>
                </div>
                <div className="name">$29.845</div>
                <div className="percent-">- 0.94 %</div>
                <div className="name">$579.449 M</div>
            </ol>
            <br/><br/><br/>
            <ol className={styles.authorList} >
                <div className="avatarBox">
                    <img
                        className="avatar"
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                        alt=""
                    />
                    <div className="name">Ehereum</div>
                </div>
                <div className="name">$1.893</div>
                <div className="percent">+ 0.03 %</div>
                <div className="name">$227.522 M</div>
            </ol>
        </div>
    )
}