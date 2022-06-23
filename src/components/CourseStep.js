import React from "react";
import { Steps, Typography } from "antd";
import styled from "styled-components";

const { Step } = Steps;
const { Title } = Typography;

const CourseStep = () => {
  return (
    <div className="courseStep container mt-5">
      <StyledStep>
        <Title className="text-center mb-5" level={5}>
          Study Your Check You Want With Four Simple Steps
        </Title>
        <Steps current={1} percent={60}>
          <Step title="Choose" description="Choose the course" />
          <Step title="Add" description="Add to cart" />
          <Step title="Pay" description="Pay your course" />
          <Step title="Check" description="Check your course" />
        </Steps>
      </StyledStep>
    </div>
  );
};

export default CourseStep;

const StyledStep = styled.div`
  @media only screen and (min-width: 375px) and (max-width: 736px) {
    .ant-typography {
      font-size: 12px;
      font-weight: 500;
    }
    .ant-steps-vertical {
      align-items: center;
      .ant-steps-item.ant-steps-item-finish {
        margin-left: 12px;
        .ant-steps-item-container {
          margin-left: 5px;
        }
        .ant-steps-item-tail {
          margin-left: 92px;
        }
        .ant-steps-item-icon {
          margin-left: 86px;
        }
        .ant-steps-item-content {
          margin-right: 48px;
          .ant-steps-item-title {
            font-size: 10px;
          }
          .ant-steps-item-description {
            font-size: 10px;
          }
        }
      }
      .ant-steps-item.ant-steps-item-process {
        .ant-steps-item-content {
          .ant-steps-item-title {
            font-size: 10px;
          }
          .ant-steps-item-description {
            font-size: 10px;
          }
        }
      }
      .ant-steps-item.ant-steps-item-wait {
        margin-left: 30px;
        .ant-steps-item-content {
          .ant-steps-item-title {
            font-size: 10px;
          }
          .ant-steps-item-description {
            font-size: 10px;
          }
        }
      }
    }
  }
`;
