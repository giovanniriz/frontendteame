import styles from "./HeaderB.module.css";
import React, { useState, useEffect } from "react";
import ModalLogin from "react-modal";
import ModalRegister from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../redux/actions/loginAct";
import { handleRegis } from "../../redux/actions/regisAct";
import jwt_decode from "jwt-decode";
import { login, regis } from "../../services/userService";

function HeaderB() {
  const dispatch = useDispatch();
  const picture = "";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginmodal, setLoginmodal] = useState(false);
  const [regmodal, setRegmodal] = useState(false);
  const [regVal, setRegVal] = useState(false);
  const [logVal, setLogVal] = useState(false);
  const { status } = useSelector((state) => state.regisred);
  const { fullname, token, logstatus } = useSelector((state) => state.loginred);
  console.log("TES OI OI", fullname, token, logstatus);
  //function for sign up onClick at login modal
  const regHandler = (e) => {
    e.preventDefault();
    setLoginmodal(true);
  };

  //function for login onClick at login modal
  const loginHandler = (e) => {
    e.preventDefault();
    const store = window.localStorage;
    login(email, password)
      .then((response) => {
        store.setItem("token", response.data.token);
        const { token, status } = response.data;
        console.log("response", response);
        console.log("status", status);
        console.log("token", token);
        const decoded = jwt_decode(token);
        console.log(decoded);
        dispatch(handleLogin(email, decoded.dtToken.fullname, token, status));
      })
      .catch((error) => {
        console.log(error);
        dispatch(handleLogin(null, null, null, error.message));
      });
  };

  //function for login
  //succes: close login modal
  //failed: give failed notice
  useEffect(() => {
    if (logstatus === 200) {
      setLoginmodal(false);
    } else if (logstatus === null) {
      setLogVal(false);
    } else {
      setLogVal(true);
    }
  }, [logstatus]);
  console.log(logstatus, "status");

  //function for signup onClick at regis modal
  const regisHandler = (e) => {
    e.preventDefault();
    regis(username, email, password, picture, username)
      .then((response) => {
        console.log("response", response);
        const { status } = response;
        dispatch(handleRegis(username, email, password, picture, status));
      })
      .catch((error) => {
        console.log(error);
        dispatch(handleRegis(null, null, null, null, error.message));
      });
  };

  //function for username logout onClick
  const logout = () => {
    const store = window.localStorage;
    store.clear();
    window.location.reload();
  };

  //function for registration
  //succes: close regmodal and open login modal
  //failed: give failed notice
  useEffect(() => {
    if (status === 200) {
      setLoginmodal(true);
      setRegmodal(false);
    } else if (status === null) {
      setRegVal(false);
    } else {
      setRegVal(true);
    }
  }, [status]);

  return (
    <div>
      <div>
        <header>
          <div className={styles.logo}>
            <img
              className={styles.triangle_right}
              src="https://pbs.twimg.com/media/E31VoCqUYAMAQEP?format=png&name=orig"
              alt=""
            />
            <h1 className={styles.logoText}>TEAME+</h1>
          </div>
          <div className={styles.headerKanan}>
            <input className={styles.searchbar} placeholder="search movie..." />
            <h2 onClick={regHandler}> </h2>
          </div>

          <div>
            {token === null ? (
              <div className={styles.signinText}>
                <p onClick={() => setLoginmodal(true)}>Sign in</p>
                <ModalLogin
                  className={styles.ReactModal__Content}
                  isOpen={loginmodal}
                  onRequestClose={(e) => {
                    e.preventDefault();
                    setLoginmodal(false);
                  }}
                >
                  <form className={styles.form}>
                    <div className={styles.contentLogin}>
                      <div className={styles.logoSignin}>
                        <img
                          className={styles.triangleModal}
                          src="https://pbs.twimg.com/media/E31VoCqUYAMAQEP?format=png&name=orig"
                          alt=""
                        />
                        <h1 className={styles.titleModal}>TEAME+</h1>
                      </div>
                      <div className={styles.inputLogin}>
                        <p className={styles.usernameTitle}>Email</p>
                        <input
                          type="text"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className={styles.usernameTitle}>Password</p>
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {logVal && <p>invalid username or password</p>}
                      </div>
                      <br></br>

                      <button onClick={loginHandler}>Login</button>

                      <p className={styles.textBottom}>
                        Don't have an account?<br></br>
                        <a
                          href="#"
                          onClick={() => {
                            setLoginmodal(false);
                            setRegmodal(true);
                          }}
                        >
                          <span>Sign up</span>
                        </a>
                      </p>
                    </div>
                  </form>
                </ModalLogin>
                <ModalRegister
                  className={styles.regisModal}
                  isOpen={regmodal}
                  onRequestClose={() => setRegmodal(false)}
                >
                  <form className={styles.form}>
                    <div className={styles.contentLogin}>
                      <div className={styles.logoSignin}>
                        <img
                          className={styles.triangleModal}
                          src="https://pbs.twimg.com/media/E31VoCqUYAMAQEP?format=png&name=orig"
                          alt=""
                        />
                        <h1 className={styles.titleModal}>TEAME+</h1>
                      </div>
                      <div className={styles.detail}>
                        <p>Username</p>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <p>Email</p>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>Password</p>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {regVal && (
                          <p>
                            username or password <br></br>is already been used
                          </p>
                        )}
                      </div>
                      <br></br>
                      <button onClick={regisHandler}>Sign Up</button>

                      <p className={styles.textBottom}>
                        Already have an account?<br></br>
                        <a
                          href="#"
                          onClick={() =>
                            setLoginmodal(true) & setRegmodal(false)
                          }
                        >
                          <span>Log in</span>
                        </a>
                      </p>
                    </div>
                  </form>
                </ModalRegister>
              </div>
            ) : (
              <p className={styles.signinText} onClick={logout}>
                {fullname}
              </p>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}
export default HeaderB;
