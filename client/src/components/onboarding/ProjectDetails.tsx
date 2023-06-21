import React from "react"
import { Row, Col } from "antd"
import { Input } from "../Input"
import { Select } from "../Select"

export const ProjectDetails = () => {
  return (
    <div>
      <h2>Details About Your Renewable Energy Project</h2>
      <form className="project-details-form">
        <Row gutter={[30, 30]}>
          <Col xs={24} md={12} lg={15}>
            <Input
              label="site location"
              type="text"
              id="first"
              style={{ borderRadius: 5, border: "none" }}
            />
          </Col>
          <Col xs={24} md={12} lg={9}>
            <Input
              label="country"
              type="text"
              id="second"
              style={{ borderRadius: 5, border: "none" }}
            />
          </Col>
          <Col xs={24} md={12} lg={9}>
            <Select
              label="Renewable Category"
              style={{ borderRadius: 5, border: "none" }}
              options={[]}
            />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Input
              label="Life Span (Years)"
              type="number"
              id="fourth"
              style={{ borderRadius: 5, border: "none" }}
            />
          </Col>
          <Col xs={24} md={12} lg={9}>
            <Input
              label="launch date"
              type="date"
              id="fifth"
              style={{ borderRadius: 5, border: "none" }}
            />
          </Col>
          <Col xs={24} md={12} lg={9}>
            <Input
              label="Capacity"
              type="number"
              id="sixth"
              style={{ borderRadius: 5, border: "none" }}
            />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Input
              label="Capacity Utility (%)"
              type="number"
              id="seventh"
              style={{ borderRadius: 5, border: "none" }}
            />
          </Col>
          <Col xs={24} md={12} lg={9}>
            <Input
              label="Active days per week"
              type="number"
              id="eight"
              style={{ borderRadius: 5, border: "none" }}
            />
          </Col>
        </Row>
      </form>
    </div>
  )
}
