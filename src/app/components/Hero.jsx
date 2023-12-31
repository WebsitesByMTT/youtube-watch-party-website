import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className={`${styles.hero} `}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles["inner-container"]}>
              <div className={styles.headings}>
                <h1>
                  Immerse yourself in endless movie nights with Youtube Watch
                  Party
                </h1>
              </div>
              <div className={styles.text}>
                <p>
                  Enjoy the joy of endless movie nights with this extension.
                  Now, you can view movies together with your friends and
                  family, even if you&apos;re far apart. This extension lets you
                  synchronize videos and chat and you can even make audio or
                  video calls while seeing content.
                </p>
                <p>
                  It’s just you need to simply install the extension on your
                  browser, start a movie or show on it, and invite your friends
                  to join. Enjoy laughter, excitement, and discussions as you
                  all see your favorite films simultaneously.
                </p>
              </div>
              <div className={styles.btn}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
