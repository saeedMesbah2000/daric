import styles from "./Register.module.css";
import Notification from "../../share-component/Notification";
import {useInput, useMessage} from "../../hooks";
import {Link, NavLink} from "react-router";

const userNameValidation = (value) => {
  return value.trim() !== "";
};

const emailValidation = (value) => {
  return value.includes("@");
};

const passwordValidation = (value) => {
  return value.trim() !== "";
};

const Register = () => {
  const {showMessage, toastMessages, setToastMessages} = useMessage();

  const {
    value: userNameValue,
    inputIsValid: userNameIsValid,
    hasError: userNameError,
    onBlurHandler: userNameOnBlurHandler,
    onChangeHandler: userNameOnChangeHandler,
    onResetHandler: userNameOnResetHandler,
  } = useInput(userNameValidation);

  const {
    value: emailValue,
    inputIsValid: emailIsValid,
    hasError: emailError,
    onBlurHandler: emailOnBlurHandler,
    onChangeHandler: emailOnChangeHandler,
    onResetHandler: emailOnResetHandler,
  } = useInput(emailValidation);

  const {
    value: passwordValue,
    inputIsValid: passwordIsValid,
    hasError: passwordError,
    onBlurHandler: passwordOnBlurHandler,
    onChangeHandler: passwordOnChangeHandler,
    onResetHandler: passwordOnResetHandler,
  } = useInput(passwordValidation);

  const formIsValid = userNameIsValid && passwordIsValid && emailIsValid;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.register}>
      <Notification
        hasError={true}
        listOfMessages={toastMessages}
        setListOfMessages={setToastMessages}
      />

      <div className={styles.register_container}>
        <form onSubmit={handleSubmit}>
          <p className={styles.register_container_form_header}>Register</p>

          <div class={`form-group ${styles.register_container_form_container}`}>
            <label
              for="exampleInputEmail1"
              className={styles.register_container_form_label}>
              User
            </label>

            <input
              type="text"
              className={`form-control ${styles.register_container_form_input}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userNameValue}
              onChange={userNameOnChangeHandler}
              onBlur={userNameOnBlurHandler}
            />

            {userNameError && (
              <div className={styles.register_container_form_error}>
                wrong user name
              </div>
            )}
          </div>

          <div class={`form-group ${styles.register_container_form_container}`}>
            <label
              for="exampleInputEmail1"
              className={styles.register_container_form_label}>
              Email
            </label>

            <input
              type="email"
              className={`form-control ${styles.register_container_form_input}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={emailValue}
              onChange={emailOnChangeHandler}
              onBlur={emailOnBlurHandler}
            />

            {emailError && (
              <div className={styles.register_container_form_error}>
                wrong Email
              </div>
            )}
          </div>

          <div
            className={`form-group ${styles.register_container_form_container}`}>
            <label
              for="exampleInputPassword1"
              className={styles.register_container_form_label}>
              Password
            </label>

            <input
              type="password"
              className={`form-control ${styles.register_container_form_input}`}
              id="exampleInputPassword1"
              onChange={passwordOnChangeHandler}
              onBlur={passwordOnBlurHandler}
              value={passwordValue}
            />

            {passwordError && (
              <div className={styles.register_container_form_error}>
                inValid password
              </div>
            )}
          </div>

          <button
            type="submit"
            className={`btn ${styles.register_container_form_button}`}
            disabled={!formIsValid}>
            Register
          </button>
        </form>

        <div className={styles.register_container_registered}>
          <p>Already registerd ?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
