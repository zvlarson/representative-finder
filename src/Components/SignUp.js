import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUpUser = (e) => {
    e.preventDefault()  
    console.log('signing up...')
  }

  return (
    <div className="sign-up-container">
      <form onSubmit={(e) => signUpUser(e)}>
        <label className="form-label">
          Email:&nbsp;
          <input
            name="email"
            type="text"
            className="form-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Password:&nbsp;
          <input
            name="password"
            type="password"
            className="form-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button
            className="submit-btn"
            type="submit"
            Submit
            >
            </button>
      </form>
    </div>
  );
}

export default SignUp;
