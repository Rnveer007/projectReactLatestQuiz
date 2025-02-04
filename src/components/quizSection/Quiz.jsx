import React from 'react'
import { useState } from 'react'
import { questions } from '../../question.js'
import { useNavigate } from 'react-router-dom'
// console.log(questions)

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)


  function nextQuestion() {
    // console.log('next question')
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }


  const navigate = useNavigate();
  function backToAbout() {
      navigate("/about");

  }

  return (
    <>
      <div className='bg-cyan-700 h-screen flex justify-center pt-64'>
        <div>
          <h1 className='text-yellow-300 text-4xl'> Quiz Play</h1>
          <div className=' w-[500px] border-2 h-[500px] mt-10  p-6' >
            <h1 className='font-bold text-3xl '>Q : - {questions[currentQuestionIndex].q}</h1>
            <div>
              {
                questions[currentQuestionIndex].opt.map((opt, index) => {
                  return (
                    <div key={index}>
                      <input type='radio' name="opt" id={index} value={opt} />
                      <lable htmlFor ={index} > {opt} </lable>
                    </div>
                  )
                })
              }
            </div>

            <button onClick={nextQuestion} className=' border-2 w-24 mx-3 mt-12 bg-black font-bold text-white py-1 cursor-pointer '>Next</button>
            <button onClick={backToAbout} className=' border-2 w-24 mx-3 mt-12 bg-red-800 text-white font-bold py-1 cursor-pointer '>Quit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz