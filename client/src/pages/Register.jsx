import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { showAlert, isLoading, displayAlert, registerUser, user, loginUser } =
    useAppContext();

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleIsMember = () =>
    setValues((prev) => ({
      ...prev,
      isMember: !prev.isMember,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    if (isMember) {
      const currentUser = { email, password };
      loginUser(currentUser);
    } else {
      const currentUser = { name, email, password };
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [navigate, user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            onChange={handleChange}
            value={values.name}
            name="name"
            type="text"
          />
        )}
        <FormRow
          onChange={handleChange}
          value={values.email}
          name="email"
          type="email"
        />
        <FormRow
          onChange={handleChange}
          value={values.password}
          name="password"
          type="password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
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
