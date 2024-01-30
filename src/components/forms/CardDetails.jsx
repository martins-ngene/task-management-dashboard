import React from "react";
import Image from "next/image";

import styles from "./CardDetails.module.css";
import { SubmitBtn } from "@/components/buttons";
import Logo from "@/components/logo";
import Card from "../card";

const CardDetails = ({ closeBtn }) => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>
          <Logo />
          <button onClick={closeBtn}>
            <Image
              src='/close.svg'
              alt='Cancel Action button'
              width={25}
              height={25}
            />
          </button>
        </div>
        <div className={styles.card_container}>
          <Card
            cardType='/visa.svg'
            cardBg='/card_template_5.svg'
            isHome={false}
          />
        </div>
        <div className={styles.card_details}>
          <h3 className={styles.card_name}>
            <strong>Card Name:</strong> John Doe
          </h3>
          <p className={styles.card_type}>
            <strong>Card Type:</strong> Visa
          </p>
          <p className={styles.card_address}>
            <strong> Card Address:</strong>{" "}
            8897b5dbc8541ed446a5e59ffa62f39f5894fb9cee169ba85b5cfa436ae5ac41
          </p>
        </div>
        <div>
          <SubmitBtn className='mb-8' label='Delete Card' />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
