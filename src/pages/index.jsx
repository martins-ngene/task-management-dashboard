import { useState } from "react";

import Navbar from "@/components/navbar";
import styles from "@/styles/styles.module.css";
import Card from "@/components/card";
import Modal from "@/components/modal";
import AddNewTask from "@/components/forms/AddNewTask";
import TaskDetails from "@/components/forms/TaskDetails";

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
      <div>
        <div></div>
        <div></div>
      </div>
      <>
        {!data ? (
          <div className={styles.body}>
            <h1>No Tasks Available</h1>
          </div>
        ) : (
          <div className={styles.cardContainer}>
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
