// Personalized Path From
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Typography } from '@mui/material';
import close from './images/close.png';
import './PPForm.css';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";

//setting the number of steps
const steps = ['', '', '', '', '',''];

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
//returns the tracking element on the top
function CustomStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <CustomStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="CustomStepIcon-circle" style={{ backgroundColor: 'var(--secondary-text-color)' }} />
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
  let navigate = useNavigate();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleGeneratePath = () => {
    setActiveStep(0);
    let path = `/welcome`; 
      navigate(path);
  };

  return (
    <>
      <Header isLoggedIn={true} />
      <div className='ppform-container'>
        <div className='close-btn-container'>
          <span><a href="/"><img src={close} /></a></span>
        </div>
        <Stepper alternativeLabel connector={<CustomConnector />} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel StepIconComponent={CustomStepIcon} {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {/* If last step, render only back and generate path button, otherwise render back and next */}
        {activeStep === steps.length - 1 ? (
          <>
            <h2 className='welcome-subtitle'>Click below to generate path!</h2>
            <button className='small-btn'
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </button>

            <div>
              <button className='small-btn' onClick={handleGeneratePath}>Generate&nbsp;Path</button>
            </div>
          </>
        ) : (
          <>
           

            <div className='navigation-buttons'>
             


            </div>


            {activeStep + 1 === 1 ? (
              <>
                <div class="welcome-subtitle">What brings you to illuminate?</div>
                <div tabindex="1" className="a q1_option1">A. To learn real life implementation of skills</div>
                <div tabindex="1" className="a q1_option2">B. Unsure of what to expect from your new job role</div>
                <div tabindex="1" className="a q1_option3">C. Looking for a switch</div>
                <div tabindex="1" className="a q1_option4">D. In search of guidance</div>
              </>
            ) : activeStep + 1 === 2 ? (
              <>
                <div class="welcome-subtitle">Where are you in your career right now?</div>
                <div tabindex="1" className="a q2_option1">A. Entry level ( 0-2 years)</div>
                <div tabindex="1" className="a q2_option2">B. Mid Level (3-9 years)</div>
                <div tabindex="1" className="a q2_option3">C. Senior Level (10+ years)</div>


              </>
            ) : activeStep + 1 === 3 ? (
              <>

                <div class="welcome-subtitle">What would you like to learn?</div>

                <div tabindex="1" className="a q3_option1" >A. Back-end development</div>
                <div tabindex="1" className="a q3_option2" >B. Front-end development</div>
                <div tabindex="1" className="a q3_option3" >C. Mobile Application Development</div>
                <div tabindex="1" className="a q3_option4" >D. Programming Language</div>
                <div tabindex="1" className="a q3_option5" >E. Machine Learning</div>
                <div tabindex="1" className="a q3_option6" >F. Big data management</div>
                <div tabindex="1" className="a q3_option7" >G. DevOps</div>
                <div tabindex="1" className="a q3_option8" >H. System Design</div>
                <div tabindex="1" className="a q3_option9" >I. User Centered Design</div>

              </>
            ) : activeStep + 1 === 4 ?
              (
                <>
                  <section div class="question4">
                    <div class="welcome-subtitle">
                      Back-end frameworks help build the back-end structure of a website. Which framework would you like to learn?
                    </div>
                  </section>
                  <div tabindex="1" className="a q3_option4">A. Spring Boot</div>
                  <div tabindex="1" className="a q3_option5">B. Flask</div>
                  <div tabindex="1" className="a q3_option6">C. Django</div>
                  <div tabindex="1" className="a q3_option7">D. Node.js</div>
                  <div tabindex="1" className="a q3_option8">H. PHP</div>
                  <div tabindex="1" className="a q3_option9">I. Ruby on Rails</div>


                </>)
              : activeStep + 1 === 5 ?
                (
                  <>
                    <section div class="question4">
                      <div class="welcome-subtitle">
                        Spring Boot is a Java framework for creating production-grade applications and services.
                        Therefore, it is essential to have a good grip of Java to understand the concepts of Spring Boot.
                        Would you like a Java refresher before starting Spring Boot?
                      </div>
                    </section>

                    <div tabindex="1" className="a q5_option1">A. Yes</div>
                    <div tabindex="1" className="a q5_option2">B. No</div>


                  </>
                )
                : activeStep + 1 === 6 ?
                  (
                    <>
                      <section div class="question4">
                        <div class="welcome-subtitle">
                          You’re almost done. To build your personalized plan, we need to know a little more about you.
                          What do you intend to achieve from this learning plan?
                        </div>
                      </section>

                      <div tabindex="1" className="a q6_option1">A. Learn the essentials of Spring and Spring Boot so that you can make back-end web applications.</div>
                      <div tabindex="1" className="a q6_option2">B. Build stand-alone applications that efficiently manage data handling and storage.</div>
                      <div tabindex="1" className="a q6_option3">C. Learn to separate cross-cutting concerns while making modular applications</div>
                      <div tabindex="1" className="a q6_option4">D. Learn Java web development using the Model-View-Controller design pattern.</div>
                      <div tabindex="1" className="a q6_option5">E. Learn to test Spring and Spring Boot.</div>
                      <div tabindex="1" className="a q6_option6">F. Learn to build production-ready applications efficiency.</div>
                      <div tabindex="1" className="a q6_option7">G. Become a Spring Boot master who can develop production-ready applications as quickly as possible.</div>


                    </>
                  ) : activeStep + 1 === 7 ? (
                    <>
                      <section div class="question7">
                        <div class="welcome-subtitle">
                          Set a weekly learning goal.
                        </div>
                      </section>

                      <div tabindex="1" className="a q7_option1">A. Light Schedule
                        2 Hours per week</div>
                      <div tabindex="1" className="a q7_option2">B. Regular Schedule
                        4 Hours per week</div>
                      <div tabindex="1" className="a q7_option3">C. Active Schedule 8 Hours per week</div>

                    </>
                  )
                    : (<p>nothing</p>)
            }
           
            <button className='continue-btn' onClick={handleNext}>
              Continue
            </button>
            <button className='back-btn'
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </button>
           
          </>
        )}
      </div>
    </>);
}
