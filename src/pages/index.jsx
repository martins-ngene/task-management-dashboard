import { useState } from "react";

import Navbar from "@/components/navbar";
import styles from "@/styles/styles.module.css";
import Card from "@/components/card";
import Modal from "@/components/modal";
import AddNewTask from "@/components/forms/AddNewTask";
import TaskDetails from "@/components/forms/TaskDetails";
import Select from "@/components/customSelect";
import { taskStatus } from "@/components/constants";
import Button from "@/components/buttons";

const Dashboard = ({ data = true }) => {
  const [taskDetails, setTaskdetails] = useState(false);
  const [addTask, setAddTask] = useState(false);

  return (
    <div className={styles.container}>
      {addTask && (
        <Modal>
          <AddNewTask closeBtn={() => setAddTask(!addTask)} />
        </Modal>
      )}
      {taskDetails && (
        <Modal>
          <TaskDetails closeBtn={() => setTaskdetails(!taskDetails)} />
        </Modal>
      )}
      <Navbar />
      <header className={styles.header}>
        <h1 className={styles.heading}>Tasks</h1>
        <div className={styles.btnContainer}>
          <div className={styles.select}>
            <Select id='status' itemsList={taskStatus} defaultValue='All' />
          </div>
          <Button isFilled={true} label='Add Task' />
        </div>
      </header>
      <>
        {!data ? (
          <div className={styles.body}>
            <h1 className={styles.heading}>No Tasks Available</h1>
          </div>
        ) : (
          <div className={styles.cardContainer}>
            <Card onClick={() => setTaskdetails(!taskDetails)} />
            <Card onClick={() => setTaskdetails(!taskDetails)} />
            <Card onClick={() => setTaskdetails(!taskDetails)} />
            <Card onClick={() => setTaskdetails(!taskDetails)} />
            <Card onClick={() => setTaskdetails(!taskDetails)} />
            <Card onClick={() => setTaskdetails(!taskDetails)} />
            <Card onClick={() => setTaskdetails(!taskDetails)} />
          </div>
        )}
      </>
    </div>
  );
};

export default Dashboard;
