import React from "react";
import { Steps, Typography } from "antd";

const { Step } = Steps;
const { Title } = Typography;

const CourseStep = () => {
  return (
    <div className="courseStep container mt-5">
      <Title className="text-center mb-5" level={3}>
        Study Your Check You Want With Four Simple Steps
      </Title>
      <Steps current={1} percent={60}>
        <Step title="Choose" description="Choose the course" />
        <Step title="Add" description="Add to cart" />
        <Step title="Pay" description="Pay your course" />
        <Step title="Check" description="Check your course" />
      </Steps>
    </div>
  );
};

export default CourseStep;
