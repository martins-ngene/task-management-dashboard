import { useState } from "react";

import Navbar from "@/components/navbar";
import styles from "@/styles/styles.module.css";
import Card from "@/components/card";
import Modal from "@/components/modal";
import Form from "@/components/form";
import Button from "@/components/buttons";

const Dashboard = ({ data = true }) => {
  const [taskDetails, setTaskdetails] = useState(false);
  const [addTask, setAddTask] = useState(false);

  return (
    <div className={styles.container}>
      {addTask && (
        <Modal>
          <Form closeBtn={() => setAddTask(!addTask)} />
        </Modal>
      )}
      {taskDetails && (
        <Modal>
          <Form closeBtn={() => setTaskdetails(!taskDetails)} />
        </Modal>
      )}
      <Navbar />
      <header className={styles.header}>
        <h1 className={styles.heading}>Tasks</h1>
        <div className={styles.btnContainer}>
          <div className={styles.selectContainer}>
            <select className={styles.select} name='status' id='status'>
              <option value='all'>All</option>
              <option value='new'>New</option>
              <option value='ongoing'>Ongoing</option>
              <option value='completed'>Completed</option>
            </select>
          </div>
          <Button
            onClick={() => setAddTask(!addTask)}
            isFilled={true}
            label='Add Task'
          />
        </div>
      </header>
      <>
        {!data ? (
          <div className={styles.body}>
            <h1 className={styles.heading}>No Tasks Available</h1>
          </div>
        ) : (
          <div className={styles.cardContainer}>
            <div className={styles.cardGrid}>
              <Card onClick={() => setTaskdetails(!taskDetails)} />
              <Card onClick={() => setTaskdetails(!taskDetails)} />
              <Card onClick={() => setTaskdetails(!taskDetails)} />
              <Card onClick={() => setTaskdetails(!taskDetails)} />
              <Card onClick={() => setTaskdetails(!taskDetails)} />
              <Card onClick={() => setTaskdetails(!taskDetails)} />
              <Card onClick={() => setTaskdetails(!taskDetails)} />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Dashboard;
