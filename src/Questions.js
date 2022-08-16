import React, { useState } from 'react';
//import { useNavigate } from "react-router-dom";

export default function Welcome() {
  //let isClicked = Boolean;

  const [click, setClick] = useState(true);
  const [currentQuestion, setQuestion] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  const prevPage = () => {
    setQuestion(currentQuestion - 1)
  }

  //const navigate = useNavigate();
  //const goHome = event => navigate('/home', { replace: true });

  const nextPage = () => {
    setQuestion(currentQuestion + 1)
    if (questions[currentQuestion].id === 9) {
      //goHome();
    }
  }

  const Continue = e => {
    e.preventDefault();
    nextPage();
  }

  const Previous = e => {
    e.preventDefault();
    prevPage();
  }

  /* const HomeButton = e => {
    let history = useHistory();

    e.whenClicked() {
      history.push("/home");
    };
  } */

  const questions =
    [
      {
        id: 1,
        questionText: 'What is your monthly income',
        answer: <input type="text" color='red' />
      },
      {
        id: 2,
        questionText: 'How much $ do you have in your checking?',
        answer: <input type="text" />
      },
      {
        id: 3,
        questionText: 'How much do you currently have in your savings?',
        answer: <input type="text" />
      },
      {
        id: 4,
        questionText: 'How much do you currently have in your Retirement',
        answer: <input type="text" />
      },
      {
        id: 5,
        questionText: 'What other assets do you own?',
        answer: <input type="text" />
      },
      {
        id: 6,
        questionText: 'What is the estimated value of your assets',
        answer: <input type="text" />
      },
      {
        id: 7,
        questionText: 'How much are your monthly expenses?',
        answer: <input type="text" />
      },
      {
        id: 8,
        questionText: 'Any other debts?',
        answer: <input type="text" />
      },
      {
        id: 9,
        questionText: 'What are you financial goals?',
        answer: <input type="text" />
      }
    ];

  return (
    <div className='app'>
      {click ? (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Thank you for signing up! Lets Dig In!</span>
            </div>
            <br />
            <br />
            <button onClick={(e) => { handleClick(e) }}>Let's get started</button>
          </div><div className='answer-section'>
          </div>
        </>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span> Thank you for signing up! <br /> <br /></span>
              <span> Lets Dig In!</span>
            </div>
            <div className='question-text'>
              <div>
                {questions[currentQuestion].questionText}
                <br />
                <br />
                {questions[currentQuestion].answer}
                {console.log(questions[currentQuestion].id)}
              </div>
            </div>
            <br />
            <button onClick={Previous}>Back</button>
            <button onClick={Continue}>Next</button>
          </div>
        </>
      )}
      <>
      </>
    </div>
  );
}
