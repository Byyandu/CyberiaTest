import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/feedbackForm.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Введите имя"),
  phone: yup.string().matches(/^\d{11}$/, "Введите корректный номер телефона").required("Введите телефон"),
  email: yup.string().email("Неверный email").required("Введите email"),
  message: yup.string().min(10, "Сообщение слишком короткое").required("Введите сообщение"),
  consent: yup.boolean().oneOf([true], "Необходимо дать согласие на обработку данных").required(),
});

const FeedbackForm = () => {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const params = new URLSearchParams();
      params.append("phone", data.phone);
      params.append("email", data.email);
      params.append("message", data.message);

      const response = await fetch("https://api.test.cyberia.studio/api/v1/feedbacks?" + params.toString(), {
        method: "POST",
      });

      if (!response.ok) {
        if (response.status === 422) {
          const errorData = await response.json();
          Object.keys(errorData.errors).forEach((field) => {
            setError(field, { type: "server", message: errorData.errors[field][0] });
          });
          throw new Error("Ошибка валидации на сервере");
        }
        throw new Error("Ошибка отправки формы");
      }

      alert("Сообщение отправлено!");
      reset();
    } catch (error) {
      alert("Ошибка: " + error.message);
    }
  };

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Расскажите<br/> о вашем проекте:</h1>

      <form onSubmit={handleSubmit(onSubmit)} >
        <div className={styles.container2}>

            <div className={styles.field}>
              <label>Ваше имя*</label>
              <input {...register("name")}/>
              {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            </div>

            <div className={styles.field}>
              <label>Телефон*</label>
              <input {...register("phone")}/>
              {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
            </div>

            <div className={styles.field}>
              <label>Email*</label>
              <input {...register("email")}/>
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
        </div>

        <div className={styles.field}>
          <label>Сообщение*</label>
          <textarea {...register("message")}/>
          {errors.message && <p className={styles.error}>{errors.message.message}</p>}
        </div>
        
        <div className={styles.checkboxLabel}>
          <label>
            <input {...register("consent")} type="checkbox" />
            Согласие на обработку персональных данных.
          </label>
          {errors.consent && <p className={styles.error}>{errors.consent.message}</p>}
        </div>
        
        <div className={styles.buttonСontainer}>
          <button type="submit" disabled={isSubmitting} className={styles.submit}>
            {isSubmitting ? "Отправка..." : "Обсудить проект"}
          </button>
        </div>
     </form>
    </div>
  );
};

export default FeedbackForm;
