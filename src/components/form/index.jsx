import React, { useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as task_id } from "uuid";

import styles from "./styles.module.css";
import Button from "@/components/buttons";
import Logo from "@/components/logo";

const schema = yup
  .object({
    title: yup.string().required("This field is required"),
    deadline: yup.string().required("This field is required"),
    description: yup.string().required("This field is required"),
  })
  .required();

const Form = ({
  closeBtn,
  isAdd,
  isEdit,
  addMutateFunc,
  editMutateFunc,
  savedTask,
}) => {
  // Form Validation Resources
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Control edit state
  const [isEdited, setIsEdited] = useState(false);

  // mutation Query
  const mutation = useMutation({
    mutationFn: isAdd ? addMutateFunc : editMutateFunc,
  });

  // Submit  Form Function
  const submitForm = formData => {
    // Access LocalStorage
    if (typeof window !== "undefined") {
      const email = localStorage.getItem("userEmail");
      const taskId = window.localStorage.getItem("taskId");

      if (isAdd) {
        const addTask = {
          email: email,
          task_id: task_id(),
          title: formData.title,
          deadline: formData.deadline,
          description: formData.description,
          status: formData.status,
        };
        // Send form data to endpoint
        mutation.mutate(addTask);
        // Clear the form
        reset();
      }

      if (isEdit) {
        const editTask = {
          task_id: taskId,
          title: formData.title,
          deadline: formData.deadline,
          description: formData.description,
          status: formData.status,
        };
        // Send form data to endpoint
        mutation.mutate(editTask);
        // Clear the form
        reset();
      }
    }
  };

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

        <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
          {/* Task Title */}
          <div className={styles.title}>
            <label className={styles.label} htmlFor='title'>
              Title
            </label>
            <input
              defaultValue={isEdit && savedTask.title}
              className={styles.input}
              id='title'
              placeholder='Enter the title'
              type='text'
              name='title'
              {...register("title")}
            />
            <p className={styles.error}>{errors.title?.message}</p>
          </div>
          {/* Task Deadline */}
          <div className={styles.deadline}>
            <label className={styles.label} htmlFor='deadline'>
              Deadline
            </label>
            <input
              defaultValue={isEdit && savedTask.deadline}
              className={styles.input}
              id='deadline'
              placeholder='Enter task deadline'
              type='date'
              name='deadline'
              {...register("deadline")}
            />
            <p className={styles.error}>{errors.deadline?.message}</p>
          </div>
          {/* Task Status */}
          <div className={styles.status}>
            <label className={styles.label} htmlFor='deadline'>
              Status
            </label>
            <select
              defaultValue={isEdit && savedTask.status}
              {...register("status")}
              className={styles.input}
              name='status'
              id='status'>
              <option value='new'>New</option>
              <option value='ongoing'>Ongoing</option>
              <option value='completed'>Completed</option>
            </select>
          </div>
          {/* Task Description */}
          <div className={styles.description}>
            <label htmlFor='description' className={styles.textLabel}>
              Description
            </label>
            <textarea
              className={styles.textArea}
              name='description'
              id='description'
              defaultValue={isEdit && savedTask.description}
              placeholder='Enter your description'
              {...register("description")}></textarea>
            <p className={styles.error}>{errors.description?.message}</p>
          </div>
          <div className={styles.btnContainer}>
            {isEdit && (
              <>
                <Button
                  onClick={() => setIsEdited(!isEdited)}
                  isFilled={false}
                  label={isEdited ? "Save" : "Edit"}
                />
              </>
            )}
            {isAdd && (
              <>
                <Button type='submit' isFilled={false} label='Add' />
                <Button
                  type='reset'
                  onClick={() => reset()}
                  isFilled={true}
                  label='Reset'
                />
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
