import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

import Navbar from "@/components/navbar";
import styles from "@/styles/styles.module.css";
import Card from "@/components/card";
import Modal from "@/components/modal";
import Form from "@/components/form";
import Button from "@/components/buttons";
import useStore from "../../store";
import { addTask, getTasks } from "../../helpers";

const Dashboard = () => {
  // Get user Session
  const { data: session, status } = useSession();

  // Fetch Data To Display Tasks
  const { data } = useQuery({ queryKey: ["tasks"], queryFn: getTasks });

  // Switch form State
  const [formSwitcher, setFormSwitcher] = useState("");

  console.log(data);

  // Form States
  const showModals = [
    <></>,
    <Form
      isAdd={true}
      status={status}
      addMutateFunc={addTask}
      closeBtn={() => setFormSwitcher("")}
    />,
    <Form isEdit={true} closeBtn={() => setFormSwitcher("")} />,
  ];

  const viewTask = task_id => {
    if (typeof window !== "undefined") {
      const taskId = window.localStorage.getItem("taskId");
      const email = window.localStorage.getItem("userEmail");

      console.log(taskId, email);

      // Add To LocalStorage
      if (!taskId) {
        window.localStorage.setItem("taskId", task_id);
      }
    }
    setFormSwitcher(2);
  };

  if (typeof window !== "undefined") {
    const taskId = window.localStorage.getItem("taskId");
    const email = window.localStorage.getItem("userEmail");

    console.log(taskId, email);
    window.localStorage.clear();
  }

  return (
    <div className={styles.container}>
      {formSwitcher && <Modal>{showModals[formSwitcher]}</Modal>}

      <Navbar session={session} signIn={signIn} signOut={signOut} />

      {session ? (
        <>
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
                onClick={() => setFormSwitcher(1)}
                isFilled={true}
                label='Add Task'
              />
            </div>
          </header>
          {!data ? (
            <div className={styles.body}>
              <h1 className={styles.heading}>No Tasks Available</h1>
            </div>
          ) : (
            <div className={styles.cardContainer}>
              <div className={styles.cardGrid}>
                {data.tasks.tasks.map(task => {
                  return (
                    <Card
                      title={task.title}
                      description={task.description}
                      deadline={task.deadline}
                      status={task.status}
                      key={task.task_id}
                      onClick={() => viewTask(task.task_id)}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={styles.body}>
          <h1 className={styles.heading}>Sign In To Manage Tasks</h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
