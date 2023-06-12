import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import nft from "../assets/nft.png";
import uav from "../assets/teamuavSmall.png";
import gpt3 from "../assets/gpt3Small.png";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Check from "@mui/icons-material/Check";
import CustomCard from "./CustomCard";

const steps = [
  {
    label: "TeamUAV Recruitments",
    description: `Introducing Team UAV! We are a dedicated college team passionate about unmanned aerial vehicles (UAVs). Visit our website to get to know us better. Learn about our team members, the various departments within our team, and our past achievements.`,
    tech: "ReactJs",
    imgsrc: uav,
  },

  {
    label: "GPT-3 Info",
    description:
      "Discover GPT-3 and OpenAI on our website. Stay updated with the latest news, breakthroughs, and applications of this powerful language model. Explore the world of AI and its impact with us.",
    tech: "ReactJs, HTML, CSS & JS",
    imgsrc: gpt3,
  },
];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.text.primary,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? "black" : theme.palette.grey[300],
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: theme.palette.text.primary,
  }),
  "& .QontoStepIcon-completedIcon": {
    color: theme.palette.text.primary,
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    marginLeft: "8px",
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const CustomStepLabel = styled(StepLabel)(({ theme, active }) => ({
  "& .MuiStepLabel-label": {
    color: theme.palette.text.primary,
  },
  "&:hover": {
    "& .MuiStepLabel-label": {
      visibility: "visible",
    },
  },
}));

export default function CustomStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);

  const handleStepHover = (index) => {
    setActiveStep(index);
  };

  const handleStepperMouseLeave = () => {
    setActiveStep(1);
  };

  return (
    <Box sx={{ maxWidth: 1200 }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        onMouseLeave={handleStepperMouseLeave}
        connector={<QontoConnector />}
      >
        {steps.map((step, index) => (
          <Step
            key={step.label}
            completed={index < activeStep && index > activeStep}
            onMouseEnter={() => handleStepHover(index)}
          >
            <CustomStepLabel StepIconComponent={QontoStepIcon}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: 28,
                  fontWeight: 600,
                }}
              >
                {step.label}
              </Typography>
            </CustomStepLabel>
            <StepContent>
              <Box>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                >
                  {/* {step.description} */}
                  <CustomCard
                    imgsrc={step.imgsrc}
                    label={step.label}
                    description={step.description}
                    tech={step.tech}
                  />
                </Typography>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
