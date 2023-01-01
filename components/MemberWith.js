import Image from "next/image";
import React from "react";

// css
import styles from "../styles/components/MembersWith.module.css";

// client images
import client1 from "../public/img/clients/client-1.png";
import client2 from "../public/img/clients/client-2.png";
import client3 from "../public/img/clients/client-3.png";
import client4 from "../public/img/clients/client-4.png";
import client5 from "../public/img/clients/client-5.png";
import { Container } from "react-bootstrap";

const MemberWith = () => {
  return (
    <Container className={styles.space}>
      <h2 className="text-center my-5">Members With</h2>
      <p></p>

      <div className={styles.client_container}>
        <div className={styles.img_wrapper}>
          <Image
            className={styles.img}
            src={client1}
            alt="Picture of client 1"
          />
        </div>
        <div className={styles.img_wrapper}>
          <Image
            className={styles.img}
            src={client2}
            alt="Picture of client 1"
          />
        </div>
        <div className={styles.img_wrapper}>
          <Image
            className={styles.img}
            src={client3}
            alt="Picture of client 1"
          />
        </div>
        <div className={styles.img_wrapper}>
          <Image
            className={styles.img}
            src={client4}
            alt="Picture of client 1"
          />
        </div>
        <div className={styles.img_wrapper}>
          <Image
            className={styles.img}
            src={client5}
            alt="Picture of client 1"
          />
        </div>
      </div>
    </Container>
  );
};

export default MemberWith;
