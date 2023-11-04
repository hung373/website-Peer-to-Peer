import React, { useRef } from "react";
import styles from "./Register.module.css";
import TopBar from "../../components/topbar/TopBar";
import Footer from "../../components/footer/Footer";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post("http://localhost:8000/api/auth/register", user)
        navigate("/login")
      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <div className="container">
      <TopBar />
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <div className={styles.registerBox}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.titleForm}>Đăng ký</div>
              <input
                className={styles.input}
                type="text"
                ref={username}
                placeholder="Tên"
              />
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
              <input
                className={styles.input}
                type="password"
                ref={passwordAgain}
                placeholder="Nhập lại mật khẩu"
              />
              <button type="submit" className={styles.btn}>Đăng ký</button>
            </form>
            <div className={styles.left}>
              <img src="https://thietkewebchuyen.com/images/noi-dung/newfolder/banhangorder.jpg" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
