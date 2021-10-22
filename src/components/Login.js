import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { LoginRequest } from "../Redux/Auth/AuthAction";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigation=useHistory();
  const dispatch = useDispatch();
  const handleLoginRequest = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/users/" + form.password).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          const payload = { username: data.data.first_name };
          dispatch(LoginRequest(payload));
            navigation.push('/');
        });
      }
    });
  };

  return (
    <div className="container mt-5 py-5">
      <section className="py-5">
        <div className="conatiner py-5">
          <div className="col col-md-4 offset-md-4">
            <div className="login-form">
              <form action="" method="post" onSubmit={handleLoginRequest}>
                <h2 className="text-center my-2">Simple Login</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={form.username}
                    onChange={(e) => {
                      setForm({ username: e.target.value });
                    }}
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => {
                      setForm({ password: e.target.value });
                    }}
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
