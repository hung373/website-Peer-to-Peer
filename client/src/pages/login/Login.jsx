import React from "react";
import styles from "./Login.module.css";
import TopBar from "../../components/topbar/TopBar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCall"
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function Login() {
  const email = useRef()
  const password = useRef()
  const { dispatch } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    loginCall({ email: email.current.value, password: password.current.value }, dispatch)
  }
  return (
    <div className="container">
      <TopBar />
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <div className={styles.loginBox}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.titleForm}>Đăng nhập</div>
              <input
                className={styles.input}
                type="email"
                ref={email}
                placeholder="Email"
              />
              <input
                className={styles.input}
                type="password"
                ref={password}
                placeholder="Mật khẩu"
              />
              <button className={styles.btn} type="submit">Đăng nhập</button>
              <div className={styles.loginRegister}>
                bạn chưa có tài khoản? Đăng ký <Link className="link" to="/register"><span>tại đây</span></Link>.
              </div>
            </form>
            <div>
              <img src = " https://thietkewebchuyen.com/images/noi-dung/newfolder/banhangorder.jpg "/>
            </div>
          </div>
        </div>  
      </div>
      <Footer />
    </div>
  );
}