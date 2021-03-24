import React, { useState,  forwardRef, useImperativeHandle, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import CourseContext from "./CourseContext";
const Login = forwardRef((props, ref) => {
    const {isAuthenticated, setAuthenticated} =useContext(CourseContext);
    useImperativeHandle(
        ref,
        () => ({
            showAlert() {
                setOpen(true);
               // alert("Child Function Called")
            }
        }),
    )

  const [open, setOpen] = useState(false);
  //const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPwd, setErrorPwd] = useState("");
//   const [userlogin, setuserlogin] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (email === "") {
      setErrorEmail("Required");
    } else if (!pattern.test(email)) {
      setErrorEmail("Please enter Valid email Address.");
    } else {
      setErrorEmail("");
    }
    if (password === "") {
      setErrorPwd("Required");
    } else {
      setErrorPwd("");
    }

    if (email !== "" && password !== "") {
      let userdata = { email: email, password: password };
      console.log(userdata);
      localStorage.setItem("user-data", JSON.stringify(userdata));
      setAuthenticated(true);
      setEmail('');
      setPassword('');
      //history.push("/");
    }
  };
  if (isAuthenticated) {
    return (<Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      ><div>You have successfully loggedin.</div></Modal>);
  }
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
    >
      <div>
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email(*):</label>
            <input
              type="text"
              name="email"
              onChange={handleEmail}
              value={email}
            />
            {errorEmail ? <div className="error"> {errorEmail}</div> : ""}
          </div>
          <div>
            <label>Password(*):</label>
            <input
              type="text"
              name="password"
              onChange={handlePassword}
              value={password}
            />
            {errorPwd ? <div className="error"> {errorPwd}</div> : ""}
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </Modal>
  );
});
export default Login;