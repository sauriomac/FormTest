import React from "react";
import { useForm } from "../hooks/useForm";
import DatosForm from "./DatosForm";

const initialForm = {
  text: "",
  number: "",
  date: "",
  select: "",
};
const validationForm = (form) => {
  const errors = {};
  const regText = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regNumber = /^[+]?([0-9]+(?:[\\.][0-9]*)?|\.[0-9]+)$/;

  if (!form.text.trim()) {
    errors.text = "Field Text is requerid";
  } else if (!regText.test(form.text.trim())) {
    errors.text = "Format invalid, only letters";
  }

  if (!form.number.trim()) {
    errors.number = "Field number is requerid";
  } else if (!regNumber.test(form.number.trim())) {
    errors.number = "Format invalid, only number or number positive";
  }

  return errors;
};

const TestContact = () => {
  const { form, errors, handleSubmint, handleBlur, handleChange } = useForm(
    initialForm,
    validationForm
  );

  return (
    <div className="container">
      <div className="form">
        <h1 className="title">TestContactForm</h1>
        <DatosForm
          text={form.text}
          number={form.number}
          date={form.date}
          select={form.select}
        />
        <hr />
        <div className="container">
          <div>
            <form className="form_container" onSubmit={handleSubmint}>
              <h5 className="label">Text</h5>
              <input
                id="text"
                className="m1"
                type="text"
                placeholder="Text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.text}
                required
                name="text"
                maxLength="20"
                data-testid="text-input"
              />
              {errors.text && <p className="alert">{errors.text}</p>}
              <h5 className="label" htmlFor="date">
                Date
              </h5>
              <input
                id="date"
                className="m1"
                type="date"
                placeholder="Text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.date}
                name="date"
              />
              <h5 className="label" htmlFor="select">
                Select
              </h5>
              <select
                id="select"
                name="select"
                value={form.select}
                onChange={handleChange}
              >
                <option value="1">select 1</option>
                <option value="2">select 2</option>
                <option value="3">select 3</option>
              </select>
              <h5 className="label" htmlFor="number">
                Number
              </h5>
              <input
                id="number"
                className="m1"
                type="text"
                placeholder="00000"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.number}
                required
                maxLength="5"
                name="number"
                data-testid="number-input"
              />
              {errors.number && <p className="alert">{errors.number}</p>}
              <h5 className="label" htmlFor="texta">
                Lorem ipsum
              </h5>
              <textarea
                id="textarea"
                placeholder="Lorem Imp"
                cols="30"
                rows="10"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.texta}
                name="texta"
              ></textarea>
              <input
                id="button"
                type="submit"
                className="button"
                value="Enter"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestContact;
