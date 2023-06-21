import React, { useState } from "react"
import { Progress } from "../components/Progress"
import { UploadCompanyLogo } from "../components/onboarding/UploadCompanyLogo"
import { ProjectDetails } from "../components/onboarding/ProjectDetails"
import { TermsOfService } from "../components/onboarding/TermsOfService"

export const OnBoarding = () => {
  const [step, setStep] = useState(1)
  return (
    <>
      <Progress percent={`${(step / 3) * 100}%`} />
      <div className="on-boarding">
        {step === 1 && <UploadCompanyLogo />}
        {step === 2 && <ProjectDetails />}
        {step === 3 && <TermsOfService />}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 5rem",
          }}
        >
          <small onClick={() => setStep((step) => step - 1)}>skip</small>
          {step !== 3 ? (
            <small onClick={() => setStep((step) => step + 1)}>
              next {">"}
            </small>
          ) : (
            <small>Submit</small>
          )}
        </div>
      </div>
    </>
  )
}
