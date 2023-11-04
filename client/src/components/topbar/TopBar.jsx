import React, {useContext} from 'react'
import styles from "./Topbar.module.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export default function TopBar() {
    const {user} = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.removeItem("user")
        window.location.replace("http://localhost:3000/")
    }
    
  return (
    <div className={`${styles.topbar} container`}>
        <Link to="/" className='link'>
            <div className="logo">
                <div className={styles.logo}>BINANCE<i className="fa-solid"></i></div>
            </div>
        </Link>
    
        <div className={styles.menu}>
            <Link to="/" className='link'>
                <div className={styles.menuItem}>Trang chủ <i className="fa-solid"></i></div>
            </Link>
            <Link to="/create" className="link">
                <div className={styles.menuItem}>Thêm sản phẩm</div>
            </Link>
        </div>

        <div className={styles.search}>
            <input type="text" placeholder='Tìm kiếm' className={styles.searchInput} />
        </div>

        <div className={styles.mainside}>
            {user ? <Link className='link' to={`/personal/${user._id}`}>
                <div className={styles.avatarBox}>
                    <img className={styles.avatar} src="https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg" alt="" />
                    <span className={styles.name}>{user.username}</span>
                </div>
            </Link>
            : <Link className='link' to="/login">
                <div className={`${styles.connectWal} link`}>Đăng nhập</div>
            </Link>
            }
            {user ? <span onClick={handleLogout} className={styles.btn}>X</span> : <div></div>}
        </div>
    </div>
  )
}