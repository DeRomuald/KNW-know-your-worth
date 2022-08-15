import React, { useState } from 'react';

export default function App() {
  //const { page } = this.state;
  let isClicked = Boolean;

  const [click, setClick] = useState(true);
  //[ isClicked = false ] = state;

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
    //isClicked = true;
  };

  const initialState = {
    page: 1,
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',

  }
  const prevPage = () => {
    const { page } = this.state;
    this.setState({ page: page - 1 });
  }

  const nextPage = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });

  }

  const handlePage = input => e => {
    this.setState({ [input]: e.target.value });
  }

  const Continue = e => {
    e.preventDefault();
    nextPage();
  }

  const Previous = e => {
    e.preventDefault();
    prevPage();
  }

  const [questions, setQuestions] = useState(
    [
      {
        id: 1,
        questionText: 'What is your monthly income',
        answerOptions: [
          { answerText: '' },
        ],
      },
      {
        id: 2,
        questionText: 'How much $ do you have in your checking?',
        answerOptions: [
          { answerText: '' },
        ],
      },
      {
        id: 3,
        questionText: 'How much do you currently have in your savings?',
        answerOptions: [
          { answerText: '' },
        ],
      },
      {
        id: 4,
        questionText: 'How much do you currently have in your Retirement',
        answerOptions: [
          { answerText: '1' },
        ],
      },
      {
        id: 5,
        questionText: 'What other assets do you own?',
        answerOptions: [
          { answerText: 'Stocks' },
          { answerText: 'Bonds' },
          { answerText: 'Real Estate' },
          { answerText: 'Cryptocurrency' },
        ],
      },
      {
        id: 6,
        questionText: 'What is the estimated value of your assets',
        answerOptions: [
          { answerText: '1' },
        ],
      },
      {
        id: 7,
        questionText: 'How much are your monthly expenses?',
        answerOptions: [
          { answerText: 'Stocks' },
        ],
      },
      {
        id: 8,
        questionText: 'Any other debts?',
        answerOptions: [
          { answerText: 'Stocks' },
        ],
      },
      {
        id: 9,
        questionText: 'What are you financial goals?',
        answerOptions: [
          { answerText: 'Stocks' },
        ],
      }
    ]);

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
              {questions.length ? (
                questions.map(item => (
                  <React.Fragment key={item.id}>
                    <li>
                      {item.questionText}
                    </li>
                  </React.Fragment>
                ))
              ) : (null)
              }</div>
            <input placeholder='response' />
            <br />
            <br />
            <br />
            <button onClick={Previous}>Back</button>
            <button onClick={Continue}>Next</button>
          </div><div className='answer-section'>
          </div></>
      )}
      <>
      </>
    </div>
  );
}
