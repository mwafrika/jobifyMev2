import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};
const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const toggleIsMember = () =>
    setValues((prev) => ({
      ...prev,
      isMember: !prev.isMember,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            handleChange={handleChange}
            value={values.name}
            name="name"
            type="text"
          />
        )}
        <FormRow
          handleChange={handleChange}
          value={values.email}
          name="email"
          type="email"
        />
        <FormRow
          handleChange={handleChange}
          value={values.password}
          name="password"
          type="password"
        />
        <button type="submit" className="btn btn-block">
          {values.isMember ? "Login" : "Register"}
        </button>
        <p>
          {values.isMember ? "Not a member yet ?" : "Already a member ?"}
          <button type="button" onClick={toggleIsMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
