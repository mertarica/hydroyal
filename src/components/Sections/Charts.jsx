import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import chartsImage from '../../assets/img/charts.png';
import { useForm, ValidationError } from '@formspree/react';

export default function Charts() {
  const [showModal, setShowModal] = useState(false);
  const [state, handleSubmit] = useForm('mknlgbwn');

  const handleChartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Close modal when form is successfully submitted
  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
  }, [state.succeeded]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const company = formData.get('company') || 'Not provided';
    
    // Create a custom message for chart inquiry
    const message = `User requested detailed research information for charts.\n\nName: ${fullName}\nEmail: ${email}\nCompany: ${company}`;
    
    // Create hidden inputs for name and message
    const nameInput = document.createElement('input');
    nameInput.type = 'hidden';
    nameInput.name = 'name';
    nameInput.value = fullName;
    
    const messageInput = document.createElement('input');
    messageInput.type = 'hidden';
    messageInput.name = 'message';
    messageInput.value = message;
    
    // Add hidden inputs to the form
    e.target.appendChild(nameInput);
    e.target.appendChild(messageInput);
    
    // Submit the form using Formspree hook
    handleSubmit(e);
  };

  return (
    <>
      <Wrapper id='charts'>
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <HeaderInfo>
                  <h1 className='font30 extraBold'>
                    Single Cell Performance
                  </h1>
                  <p className='font20'>
                    Explore the performance of our CCMs in single cell tests
                  </p>
                </HeaderInfo>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12'>
                <ChartContainer onClick={handleChartClick}>
                  <ChartImage src={chartsImage} alt="Research Charts" />
                  <ChartOverlay>
                    <ChartText>
                      <h3>PGM-free CCMs</h3>
                      <p>Click to learn more about technical data including polarization curves and H₂ crossover data</p>
                    </ChartText>
                  </ChartOverlay>
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {showModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h2>Detailed Information</h2>
              <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
              <p>
                To access our technical data sheet, please provide your email address. We'll send you the complete report and additional materials.
              </p>
              <EmailForm onSubmit={handleEmailSubmit}>
                <label htmlFor='modal-fullName'>Full Name: *</label>
                <input
                  type='text'
                  id='modal-fullName'
                  name='fullName'
                  required
                  placeholder='Enter your full name'
                />
                <ValidationError
                  prefix='Name'
                  field='fullName'
                  errors={state.errors}
                />
                
                <label htmlFor='modal-email'>Email Address: *</label>
                <input
                  type='email'
                  id='modal-email'
                  name='email'
                  required
                  placeholder='Enter your email address'
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
                
                <label htmlFor='modal-company'>Company Name: (Optional)</label>
                <input
                  type='text'
                  id='modal-company'
                  name='company'
                  placeholder='Enter your company name'
                />
                
                <SubmitButton
                  type='submit'
                  disabled={state.submitting || state.succeeded}
                >
                  {state.succeeded ? 'Thank You! Check your email.' : 'Get Research Report'}
                </SubmitButton>
              </EmailForm>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: #f8f9fa;
`;

const HeaderInfo = styled.div`
  text-align: center;
  padding: 0 0 50px 0;
  > h1 {
    margin-bottom: 15px;
    color: #024129;
  }
  > p {
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ChartContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ChartImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ChartOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(2, 65, 41, 0.9), rgba(2, 114, 0, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ChartContainer}:hover & {
    opacity: 1;
  }
`;

const ChartText = styled.div`
  text-align: center;
  color: white;
  padding: 20px;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    margin: 0;
    opacity: 0.9;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 1px solid #eee;

  h2 {
    margin: 0;
    color: #024129;
    font-size: 20px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 25px;

  p {
    margin-bottom: 20px;
    color: #666;
    line-height: 1.6;
  }
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    font-weight: 600;
    color: #333;
    font-size: 14px;
  }

  input {
    padding: 12px 15px;
    border: 2px solid #e1e1e1;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #024129;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #024129;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #027200;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
