import React from "react"
import camera from "../../assets/Camera.png"

export const UploadCompanyLogo = () => {
  return (
    <div className="upload-company-logo">
      <h2>Welcome Greenera Tech, Let’s get you started</h2>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <p style={{ fontSize: "20px", fontWeight: 500 }}>Add company logo</p>
      </div>
      <div style={{ position: "relative" }}>
        <input type="file" className="file-input" id="upload-company-logo" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <label htmlFor="upload-company-logo" className="file-input-label">
            <img src={camera} alt="Upload Image" />
          </label>
        </div>
      </div>
    </div>
  )
}
