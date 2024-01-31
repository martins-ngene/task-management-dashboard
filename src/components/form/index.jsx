import React from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./styles.module.css";
import Button from "@/components/buttons";
import Logo from "@/components/logo";
import { sendMessage } from "../../../helpers";

const schema = yup
  .object({
    title: yup.string().required("This field is required"),
    deadline: yup.string().required("This field is required"),
    description: yup.string().required("This field is required"),
  })
  .required();

const Form = ({ closeBtn, isEdited = false }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({ mutationFn: sendMessage });

  const submitForm = contactInfo => {
    // // Send form data to endpoint
    // mutation.mutate(contactInfo);
    // // Clear the form
    // reset();
    console.log(contactInfo);
  };

  mutation.isLoading
    ? "Message is sending ..."
    : mutation.isSuccess
    ? "Message is sent successfully"
    : mutation.isError
    ? "Please reload the page and try again"
    : "";
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
          <div className={styles.title}>
            <label className={styles.label} htmlFor='title'>
              Title
            </label>
            <input
              className={styles.input}
              id='title'
              placeholder='Enter the title'
              type='text'
              name='title'
              {...register("title")}
            />
            <p className={styles.error}>{errors.title?.message}</p>
          </div>
          <div className={styles.deadline}>
            <label className={styles.label} htmlFor='deadline'>
              Deadline
            </label>
            <input
              className={styles.input}
              id='deadline'
              placeholder='Enter task deadline'
              type='date'
              name='deadline'
              {...register("deadline")}
            />
            <p className={styles.error}>{errors.deadline?.message}</p>
          </div>
          <div className={styles.status}>
            <label className={styles.label} htmlFor='deadline'>
              Status
            </label>
            <select
              {...register("status")}
              className={styles.input}
              name='status'
              id='status'>
              <option value='new'>New</option>
              <option value='ongoing'>Ongoing</option>
              <option value='completed'>Completed</option>
            </select>
          </div>
          <div className={styles.description}>
            <label htmlFor='description' className={styles.textLabel}>
              Description
            </label>
            <textarea
              className={styles.textArea}
              name='description'
              id='description'
              placeholder='Enter your description'
              {...register("description")}></textarea>
            <p className={styles.error}>{errors.description?.message}</p>
          </div>
          <div className={styles.btnContainer}>
            <Button isFilled={true} label='Delete' />
            <Button type='submit' isFilled={false} label='Add' />
            {/* <Button isFilled={true} label='Reset' /> */}
            {/* <Button isFilled={false} label={isEdited ? "Sign out" : "Sign in"} /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
