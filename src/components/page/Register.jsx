import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const defaultValues = {
    name: "",
    username: "",
    password: "",
  };
  const [isError, setIsError] = React.useState({
    name: false,
    username: false,
    password: false,
  });
  const [formValues, setFormValues] = React.useState(defaultValues);

  return (
    <div>
      <form style={{ marginBottom: "30px" }}>
        <h3 style={{ float: "right", fontSize: "20px", marginBottom: "20px" }}>
          Register
        </h3>
        <br />
        <div className="form-control">
          <label>Name</label>
          <input
            style={{ borderColor: isError.name && "red" }}
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
          {isError.name && (
            <span style={{ color: "red" }}>Please enter a name</span>
          )}
        </div>
        <div className="form-control">
          <label>Username</label>
          <input
            style={{ borderColor: isError.username && "red" }}
            type="text"
            placeholder="Username"
            value={formValues.username}
            onChange={(e) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
          />
          {isError.username && (
            <span style={{ color: "red" }}>Please enter a username</span>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            style={{ borderColor: isError.password && "red" }}
            type="password"
            placeholder="Password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          {isError.password && (
            <span style={{ color: "red" }}>Please enter a password</span>
          )}
        </div>
        <input type="submit" value="Register" className="btn btn-block" />
      </form>
      <Link to="/login" style={{ marginBottom: "30px", float: "right" }}>
        Already Registred, Login
      </Link>
    </div>
  );
};

export default Register;
