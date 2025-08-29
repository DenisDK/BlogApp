import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../../../components/menu/Menu";
import Image from "next/image";
import Comments from "../../../components/comments/comments";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>DenisDK</span>
              <span className={styles.date}>29.08.2025</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium libero numquam voluptatem dicta illum nemo voluptate
              aspernatur necessitatibus at. Ut possimus omnis animi debitis,
              quos ullam aliquid quasi laudantium iste?
            </p>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium libero numquam voluptatem dicta illum nemo voluptate
              aspernatur necessitatibus at. Ut possimus omnis animi debitis,
              quos ullam aliquid quasi laudantium iste?
            </p>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium libero numquam voluptatem dicta illum nemo voluptate
              aspernatur necessitatibus at. Ut possimus omnis animi debitis,
              quos ullam aliquid quasi laudantium iste?
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
