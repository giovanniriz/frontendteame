import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.column1}>
          <div className={styles.logoFooter}>
            <img
              className={styles.triangle_right}
              src="https://pbs.twimg.com/media/E31VoCqUYAMAQEP?format=png&name=orig"
              alt=""
            />
            <h1 className={styles.logoText}>TEAME+</h1>
          </div>
          <p className={styles.aboutUs}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className={styles.column2}>
          <ul className={styles.navFooterContainer}>
            <li className={styles.navFooter}>Tentang Kami</li>
            <li className={styles.navFooter}>Blog</li>
            <li className={styles.navFooter}>Layanan</li>
            <li className={styles.navFooter}>Karir</li>
            <li className={styles.navFooter}>Pusat Media</li>
          </ul>
        </div>

        <div className={styles.column3}>
          <h5 className={styles.download}>Download</h5>
          <div className={styles.store}>
            <img
              className={styles.playstore}
              src="https://pbs.twimg.com/media/E3yy9ovVgAIaWUz?format=png&name=orig"
              alt=""
            />
            <img
              className={styles.appstore}
              src="https://pbs.twimg.com/media/E3yy9oxVgAIeyRQ?format=png&name=orig"
              alt=""
            />
          </div>
          <h5 className={styles.social}>Social media</h5>
          <div className={styles.listSocial}>
            <img
              className={styles.socialicon}
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Pinterest_colored_svg-512.png"
              alt=""
            />
            <img
              className={styles.socialicon}
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
              alt=""
            />
            <img
              className={styles.socialicon}
              src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png"
              alt=""
            />
            <img
              className={styles.socialicon}
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © 2000-202 TEAME+. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
