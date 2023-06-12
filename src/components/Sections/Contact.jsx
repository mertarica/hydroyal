import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '../../assets/svg/Phone';
import HomeIcon from '../../assets/svg/Home';
import ChatIcon from '../../assets/svg/Chat';

export default function Contact() {
  return (
    <Wrapper id='contact'>
      <div>
        <div className='container'>
          <div className='row' style={{ paddingBottom: '30px' }}>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
              <HeaderInfo>
                <h1 className='font30 extraBold'>
                  Interested in testing our MEAs?
                </h1>
                <p className='font20'>
                  We will be glad to work with you! Send us your information and
                  we will be in touch with you shortly.
                </p>
              </HeaderInfo>
              <Form>
                <label className='font13'>First name:</label>
                <input
                  type='text'
                  id='fname'
                  name='fname'
                  className='font20 extraBold'
                />
                <label className='font13'>Email:</label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  className='font20 extraBold'
                />
                <label className='font13'>Subject:</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='font20 extraBold'
                />
                <textarea
                  rows='4'
                  cols='50'
                  type='text'
                  id='message'
                  name='message'
                  className='font20 extraBold'
                />
              </Form>
              <SumbitWrapper className='flex'>
                <ButtonInput
                  type='submit'
                  value='Send Message'
                  className='pointer animate radius8'
                  style={{ maxWidth: '220px' }}
                />
              </SumbitWrapper>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 flex flexColumn'>
              <div className='flexNullCenter flexRow' style={{ gap: '30px' }}>
                <ContactImgBox>
                  <article className='box-contacts'>
                    <div className='box-contacts-body'>
                      <PhoneIcon />
                      <div className='box-contacts-decor'></div>
                      <p className='box-contacts-link'>
                        <a href='tel:#'>+4673-647 2440</a>
                      </p>
                    </div>
                  </article>
                </ContactImgBox>
                <ContactImgBox>
                  <article className='box-contacts'>
                    <div className='box-contacts-body'>
                      <ChatIcon />
                      <div className='box-contacts-decor'></div>
                      <p className='box-contacts-link'>
                        <a href='mailto:melike@hydroyal.com'>melike@hydroyal.com</a>
                      </p>
                    </div>
                  </article>
                </ContactImgBox>
              </div>
              <div>
                <div style={{ marginTop: '50px' }}>
                  <article className='box-contacts'>
                    <div className='box-contacts-body'>
                      <HomeIcon />
                      <div className='box-contacts-decor'></div>
                      <p className='box-contacts-link'>
                        <span>Hydroyal AB</span>
                        <br />
                        Hagalundsgatan 32, 169 64 Solna, Sweden
                        <br />
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  .box-contacts {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 310px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.17);
    transition: all 0.3s ease;
  }

  .box-contacts-body {
    max-width: 250px;
  }

  .box-contacts-icon {
    font-size: 60px;
    line-height: 1;
    color: #ff5a6e;
  }

  .box-contacts-decor {
    margin: 30px auto;
    height: 2px;
    max-width: 100px;
    background: #ff5a6e;
    transition: all 0.3s ease-in-out;
  }

  .box-contacts-link {
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: 0.025em;
  }

  .box-contacts-link a,
  .box-contacts-link a:focus,
  .box-contacts-link a:active {
    color: inherit;
  }

  .box-contacts-link a:hover {
    color: #ff5a6e;
  }

  @media (min-width: 992px) {
    .box-contacts {
      box-shadow: none;
      border: 1px solid #e1e1e1;
    }
    .box-contacts-decor {
      margin-top: 17px;
      margin-bottom: 17px;
      width: 0;
    }
    .box-contacts:hover {
      border-color: transparent;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.17);
    }
    .box-contacts:hover .box-contacts-decor {
      margin-top: 30px;
      margin-bottom: 30px;
      width: 100%;
      transition: margin 0.3s ease, width 0.4s ease-in-out;
    }
  }

  .box-contacts-icon + .box-contacts-link {
    margin-top: 40px;
  }

  * + .box-contacts-link {
    margin-top: 0;
  }

  .ie-edge .box-contacts,
  .ie-10 .box-contacts,
  .ie-11 .box-contacts {
    height: 310px;
  }
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  > h1 {
    margin-bottom: 15px;
  }
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 20px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #024129;
  background-color: #024129;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #027200;
    border: 1px solid #027200;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  width: 100%;
  align-self: flex-end;
  margin: 30px 0px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
