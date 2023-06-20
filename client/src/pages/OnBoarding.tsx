import React from "react"
import { Progress } from "../components/Progress"
import { UploadCompanyLogo } from "../components/onboarding/UploadCompanyLogo"

export const OnBoarding = () => {
  return (
    <>
      <Progress percent="60%" />
      <div className="on-boarding">
        <UploadCompanyLogo />

        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 5rem",
          }}
        >
          <small>skip</small>
          <small>next {">"}</small>
        </div>
      </div>
    </>
  )
}
