import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "../api/service";

const Login = () => {
  const defaultValues = {
    username: "",
    password: "",
  };
  const [isError, setIsError] = React.useState({
    username: false,
    password: false,
  });
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsError({
      ...isError,
      username: !formValues.username,
      password: !formValues.password,
    });

    if (!formValues.username || !formValues.password) {
      return;
    }

    setIsLoading(true);
    loginService(formValues)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((res) => {
        console.log(res);
        navigate("/home", { replace: true });

        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form style={{ marginBottom: "30px" }} onSubmit={handleSubmit}>
        <h3 style={{ float: "right", fontSize: "20px", marginBottom: "20px" }}>
          Login
        </h3>
        {errorMessage && <p>{errorMessage}</p>}
        <br />
        <div className="form-control">
          <label>Username</label>
          <input
            style={{ borderColor: isError.username && "red" }}
            type="text"
            placeholder="Username"
            value={formValues.username}
            disabled={isLoading}
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
            disabled={isLoading}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          {isError.password && (
            <span style={{ color: "red" }}>Please enter a password</span>
          )}
        </div>
        <input
          disabled={isLoading}
          type="submit"
          value={`Login${isLoading ? "..." : ""}`}
          className="btn btn-block"
          style={{
            cursor: isLoading && "progress",
            backgroundColor: isLoading && "gray",
          }}
        />
      </form>
      <Link to="/register" style={{ marginBottom: "30px", float: "right" }}>
        Don't have account, Register
      </Link>
    </div>
  );
};

export default Login;
