import React from "react"
import signUpImage from "../assets/signup.png"
import { Typography } from "antd"
import { Input } from "../components/Input"
import mailBox from "../assets/message-icon.png"
import authIcon from "../assets/auth.png"
import { Select } from "../components/Select"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"

export const SignUp = () => {
  const { Title } = Typography
  const projectType: { label: string; value: string }[] = [
    {
      value: "renewable_energy",
      label: "Renewable Energy",
    },
    {
      value: "forestry_and_conservation",
      label: "Forestry and Conservation",
    },
    {
      value: "direct_air_capture",
      label: "Direct Air Capture",
    },
    {
      value: "waste_to_energy",
      label: "Waste to Energy",
    },
    {
      value: "cook_stove",
      label: "Cook Stove",
    },
  ]
  return (
    <div className="sign-up">
      <div className="sign-up_image">
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
          <p style={{ fontSize: "20px", color: "#7C7C7C" }}>Welcome</p>
          <Title
            level={3}
            style={{
              color: "#105a0e",
              fontWeight: 600,
              lineHeight: "36px",
              marginBottom: "24px",
            }}
          >
            Sign up to Get Started.
          </Title>

          <Input
            type="email"
            prefix={mailBox}
            id="email"
            label="email"
            style={{ marginBottom: 17 }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <Input
              type="text"
              id="business_name"
              label="business name"
              containerStyle={{ width: "47%" }}
            />
            <Input
              type="text"
              id="manager"
              label="manager"
              containerStyle={{ width: "47%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}
          >
            <Input
              type="password"
              id="password"
              label="password"
              containerStyle={{ width: "47%" }}
              prefix={authIcon}
              prefixStyle={{ top: "3.2rem" }}
            />
            <Input
              type="password"
              id="confirm_password"
              label="confirm password"
              containerStyle={{ width: "47%" }}
              prefix={authIcon}
              prefixStyle={{ top: "3.2rem" }}
            />
          </div>
          <div>
            <Select options={projectType} label="project type" />
          </div>
          <div style={{ width: "60%", margin: "auto", marginTop: "1.5rem" }}>
            <Button>Sign Up</Button>
          </div>
          <div>
            <p
              style={{
                color: "#105a0e",
                marginTop: "19px",
                textAlign: "center",
              }}
            >
              Have an account?{" "}
              <Link to={"sign-in"} style={{ color: "#105a0e" }}>
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
