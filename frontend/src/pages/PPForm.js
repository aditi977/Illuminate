// Personalized Path From
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import {Typography, Box} from '@mui/material';
import close from './close.png';
import './PPForm.css';
import Header from '../components/Header';

const steps = ['', '', '', '', ''];

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'var(--secondary-text-color)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'var(--secondary-text-color)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderBottomWidth: 0,
    borderRadius: 1,
    borderStyle: 'dotted',
    
  },
}));

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .CustomStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .CustomStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function CustomStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <CustomStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="CustomStepIcon-circle" style={{backgroundColor: 'var(--secondary-text-color)'}} />
      ) : (
        <div className="CustomStepIcon-circle" />
      )}
    </CustomStepIconRoot>
  );
}

CustomStepIcon.propTypes = {
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

export default function PPForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
    <Header isLoggedIn={true}/>
    <div className='form-container'>
      <div className='close-btn-container'>
          <span><img src={close} /></span>
      </div>
      <Stepper alternativeLabel connector={<CustomConnector />} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step  key={label} {...stepProps}>
              <StepLabel StepIconComponent={CustomStepIcon} {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <button className='small-btn' onClick={handleReset}>Reset</button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {/* <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
             </Box>
            
           
            
            {activeStep + 1 === 1 ? (
  <React.Fragment>
     <div class="welcome-subtitle">What brings you to illuminate?</div>
    <div className="q1_option1">A. To learn real life implementation of skills</div>
    <div className="q1_option2">B. Unsure of what to expect from your new job role</div>
    <div className="q1_option3">C. Looking for a switch</div>
    <div className="q1_option4">D. In search of guidance</div>
  </React.Fragment>
) : activeStep + 1 === 2 ? (
  <React.Fragment>
      <div class="welcome-subtitle">Where are you in your career right now?</div>
  <div className="q2_option1">A. Entry level ( 0-2 years)</div>
  <div className="q2_option2">B. Mid Level (3-9 years)</div>
  <div className="q2_option3">C. Senior Level (10+ years)</div>
    
    
  </React.Fragment>
) : activeStep +1 ===3? (
  <React.Fragment>
     <div class="welcome-subtitle">What would you like to learn?</div>
     <section class="question3">
     <div className="q3_option1">A. Back-end development</div>
    <div className="q3_option2">B. Front-end development</div>
    <div className="q3_option3">C. Programming Language</div>
    <div className="q3_option4">D. Mobile Application Development</div>
    <div className="q3_option5">E. Machine Learning</div>
    <div className="q3_option6">F. Big data management</div>
    <div className="q3_option7">G. DevOps</div>
    <div className="q3_option8">H. System Design</div>
    <div className="q3_option9">I. User Centered Design</div>
    </section>
</React.Fragment>
):
(<p>nothing</p>)}


            <div class="continue-button">
            <button className='small-btn' onClick={handleNext}>Continue</button>
            </div>
        </React.Fragment>
      )}
    </div>
    </>);
}