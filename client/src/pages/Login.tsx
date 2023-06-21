import React from "react"
import { Typography } from "antd"
import { Input } from "../components/Input"
import mailBox from "../assets/message-icon.png"
import authIcon from "../assets/auth.png"
import signUpImage from "../assets/signup.png"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"

export const Login = () => {
  const { Title } = Typography
  return (
    <div className="sign-in">
      <div className="sign-in_image">
        <img src={signUpImage} alt="Sign Up Background Image" />
      </div>
      <div className="tagline">
        <h2>
          EcoStack. <sup style={{ fontSize: "15px" }}>TM</sup>
        </h2>
        <p>Greentech Portal</p>
      </div>
      <div className="auth">
        <form className="auth_form">
          <p style={{ fontSize: "20px", color: "#7C7C7C" }}>Welcome Back</p>
          <Title
            level={3}
            style={{
              color: "#105a0e",
              fontWeight: 600,
              lineHeight: "36px",
              marginBottom: "24px",
            }}
          >
            Sign In to Continue
          </Title>

          <Input
            type="email"
            prefix={mailBox}
            id="email"
            label="email"
            style={{ marginBottom: 44 }}
            required
          />
          <Input
            type="password"
            id="password"
            label="password"
            prefix={authIcon}
            prefixStyle={{ top: "3.2rem" }}
            style={{ marginBottom: 39 }}
          />

          <div style={{ margin: "auto", marginTop: "1.5rem" }}>
            <Button>Sign In</Button>
          </div>
          <div>
            <p
              style={{
                color: "#105a0e",
                marginTop: "19px",
                textAlign: "center",
              }}
            >
              New Account?{" "}
              <Link to={"/sign-up"} style={{ color: "#105a0e" }}>
                Sign Up Here
              </Link>
            </p>
          </div>
        </form>

        <div
          style={{
            marginTop: 70,
            color: "#fff",
            display: "inline-flex",
            justifyContent: "center",
            width: 453,
          }}
        >
          <div>
            <input type="checkbox" id="remember" />
            {"   "}
            <label htmlFor="remember"> Remember me</label>
          </div>
        </div>
      </div>
    </div>
  )
}
