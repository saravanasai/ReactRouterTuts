import React from "react"

const Login = () => {
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor>Username</label>
        <input
          type="text"
          name
          id
          className="form-control"
          placeholder
          aria-describedby="helpId"
        />
        <small id="helpId" className="text-muted">
          Help text
        </small>
      </div>
    </div>
  )
}

export default Login
