import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="Post 1" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>29.08.2025</span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          cupiditate labore debitis quis vitae unde et omnis. Cupiditate laborum
          tenetur ex atque, molestiae voluptatibus placeat assumenda? Corporis
          optio accusantium cupiditate?
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
