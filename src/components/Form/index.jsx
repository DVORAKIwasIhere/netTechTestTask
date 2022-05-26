import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/schemes";
import { API } from "../../api/api";
import { cities, preferences, question } from "./data";
import * as S from "./styles";

export const Form = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { checkBox: false },
    resolver: yupResolver(schema),
  });
  const [citiesValue, setCitiesValue] = React.useState("");
  const [questionValue, setQuestionValue] = React.useState("");
  const [preferenceConnectionValue, setPreferenceConnectionValue] =
    React.useState("");

  const onSubmit = (data) => {
    API.uploadData(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <input
        type="text"
        {...register("name")}
        className="form-control"
        placeholder="Введите свое имя"
      />
      <select
        {...register("cities", { required: true })}
        className="form-select"
        value={citiesValue}
        onChange={(event) => setCitiesValue(event.target.value)}
      >
        <option value="" selected disabled hidden>
          Выберите город
        </option>
        {cities.map((city) => {
          return (
            <option value={city.value} key={city.value}>
              {city.label}
            </option>
          );
        })}
      </select>
      <InputMask
        className="form-control"
        type="text"
        alwaysShowMask="true"
        placeholder="Введите свой номер телефона"
        mask="+7\(999) 999-99-99"
        {...register("phoneNumber", { required: true })}
      />
      <input
        className="form-control"
        type="email"
        {...register("email")}
        placeholder="Введите свой адрес электронной почты"
      />
      <select
        {...register("question", { required: true })}
        className="form-select"
        value={questionValue}
        onChange={(event) => setQuestionValue(event.target.value)}
      >
        <option value="" selected disabled hidden>
          Выберите интересующий вас вопрос
        </option>
        {question.map((question) => {
          return (
            <option value={question.value} key={question.value}>
              {question.label}
            </option>
          );
        })}
      </select>
      <select
        {...register("preferenceConnection", { required: true })}
        className="form-select"
        aria-label="Default select example"
        value={preferenceConnectionValue}
        onChange={(event) => setPreferenceConnectionValue(event.target.value)}
      >
        <option value="" selected disabled hidden>
          Выберите удобный вам способ связи
        </option>
        {preferences.map((preferenceConnection) => {
          return (
            <option
              value={preferenceConnection.value}
              key={preferenceConnection.value}
            >
              {preferenceConnection.label}
            </option>
          );
        })}
      </select>
      <div>
        <input
          type="checkbox"
          {...register("checkBox", { required: true })}
          className="form-check-input mt-0"
        />
        <label htmlFor="check">
          Нажимая на кнопку "отправить", я даю согласие на обработку
          персональных данных (обязательный выбор для отправки формы)
        </label>
      </div>
      <input type="submit" className="btn btn-primary" />
    </S.Form>
  );
};
