import { useState } from "react";
import { FaFacebook, FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../../Css/Login.css';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" &&password === "123") {
      navigate("/admin");
    } else if (email === "pissasu@gmail.com"&& password === "123") {
      navigate("/nav");
    } else {
      console.log("Invalid email or other cases");
      alert("Please enter the email and password");
    }
  };

  return (
    <div className="body">
      <div className={`container ${isSignIn ? "" : "active"}`} id="container">
        <div className={`form-container ${isSignIn ? "sign-in" : "sign-up"}`}>
          <form onSubmit={handleSubmit}>
            <h1>{isSignIn ? "Sign In" : "Create Account"}</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FaFacebook />
              </a>
              <a href="#" className="icon">
                <FaGoogle />
              </a>
              <a href="#" className="icon">
                <FaGithub />
              </a>
              <a href="#" className="icon">
                <FaLinkedin />
              </a>
            </div>
            {!isSignIn && <span>or use your email for registration</span>}
            {!isSignIn && <input type="text" placeholder="Name" />}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder="Password " value={password} onChange={(e)=>setPassword(e.target.value)} />
            {isSignIn ? (
              <>
                <a href="#">Forget Your Password?</a>
                <button type="submit">Sign In</button>
              </>
            ) : (
              <>
                <button type="submit">Sign Up</button>
              </>
            )}
          </form>
        </div>
        <div className="form-container toggle-container">
        <div className="toggle">
          <div
            className={`toggle-panel ${
              isSignIn ? "toggle-left" : "toggle-right"
            }`}
          >
            <h1>{isSignIn ? "Welcome Back!" : "Hello, Friend!"}</h1>
            <p>
              {isSignIn
                ? "Enter your personal details to use all of site features"
                : "Register with your personal details to use all of site features"}
            </p>
            <button className="hidden" onClick={toggleForm}>
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div
            className={`toggle-panel ${
              isSignIn ? "toggle-right" : "toggle-left"
            }`}
          >
            <h1>{isSignIn ? "Hello, Friend!" : "Welcome Back!"}</h1>
            <p>
              {isSignIn
                ? "Register with your personal details to use all of site features"
                : "Enter your personal details to use all of site features"}
            </p>
            <button className="hidden" onClick={toggleForm}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
