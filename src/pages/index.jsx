import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Head from "next/head";

import Navbar from "@/components/navbar";
import styles from "@/styles/styles.module.css";
import Card from "@/components/card";
import Modal from "@/components/modal";
import Form from "@/components/form";
import Button from "@/components/buttons";
import { addTask, deleteTask, editTask, getTasks } from "../../helpers";

const Dashboard = () => {
  // Get user Session
  const { data: session, status } = useSession();

  // Fetch Data To Display Tasks
  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    refetchOnMount: () => "always",
  });

  // mutation Query
  const mutation = useMutation({
    mutationFn: deleteTask,
  });

  // Switch form State
  const [formSwitcher, setFormSwitcher] = useState("");

  // Filter Tasks
  const [filter, setFilter] = useState("");

  // State to store task
  const [task, setTask] = useState();

  // Form States
  const showModals = [
    <></>,
    <Form
      key={1}
      isAdd={true}
      status={status}
      addMutateFunc={addTask}
      closeBtn={() => setFormSwitcher("")}
    />,
    <Form
      key={2}
      isEdit={true}
      savedTask={task}
      editMutateFunc={editTask}
      closeBtn={() => setFormSwitcher("")}
    />,
  ];

  const setTaskId = task_id => {
    if (typeof window !== "undefined") {
      const taskId = window.localStorage.getItem("taskId");

      // Add To LocalStorage
      if (!taskId) {
        window.localStorage.setItem("taskId", task_id);
      }
      if (taskId !== task_id) {
        window.localStorage.removeItem("taskId");
        window.localStorage.setItem("taskId", task_id);
      }
    }
  };

  // Filter Tasks By Name
  const getTask = (data, searchTerm) => {
    const newData = data.filter(item => item.task_id === searchTerm);
    return newData[0];
  };

  const viewTask = task_id => {
    setTaskId(task_id);

    if (typeof window !== "undefined") {
      const taskId = window.localStorage.getItem("taskId");
      let singleTask = getTask(data.tasks.tasks, taskId);
      setTask(singleTask);
    }
    setFormSwitcher(2);
  };

  const deleteATask = task_id => {
    setTaskId(task_id);
    if (typeof window !== "undefined") {
      const taskId = window.localStorage.getItem("taskId");
      console.log(taskId);
      if (taskId) {
        // Send form data to endpoint
        mutation.mutate({ task_id: taskId });
      }
    }
  };

  // Filter Tasks By Name
  const filterTasks = (data, searchTerm) => {
    if (searchTerm === "all") {
      return data;
    }
    const newData = data.filter(item =>
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return newData;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>TM Dashboard</title>
      </Head>
      {formSwitcher && <Modal>{showModals[formSwitcher]}</Modal>}

      <Navbar session={session} signIn={signIn} signOut={signOut} />

      {session ? (
        <>
          <header className={styles.header}>
            <h1 className={styles.heading}>Tasks</h1>
            <div className={styles.btnContainer}>
              <div className={styles.selectContainer}>
                <select
                  onChange={e => setFilter(e.target.value)}
                  className={styles.select}
                  name='status'
                  id='status'>
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
          {data.tasks.tasks.length === 0 ? (
            <div className={styles.body}>
              <h1 className={styles.heading}>No Tasks Available</h1>
            </div>
          ) : (
            <div className={styles.cardContainer}>
              <div className={styles.cardGrid}>
                {data.tasks.tasks &&
                  filterTasks(data.tasks.tasks, filter).map(task => {
                    return (
                      <Card
                        title={task.title}
                        description={task.description}
                        deadline={task.deadline}
                        status={task.status}
                        key={task.task_id}
                        onClick={() => viewTask(task.task_id)}
                        deleteTask={() => deleteATask(task.task_id)}
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
