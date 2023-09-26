import axios from "axios";
import { createContext, useState } from "react";

export const QuestionContext = createContext()

export const QuestionContextProvider = ({ children }) => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 20)+1)
    const [numberList, setNumberList] = useState([])
    const [ recordLocal, setRecordLocal] = useState([])
    const [records, setRecords] = useState({
        playedAt: '',
        totalCorrect: 0,
        totalWrong: 0
    })
    const [recordList, setRecordList] = useState([])
    const [guest, setGuest] = useState({
        correctGuest: 0,
        falseGuest: 0
    })
    const [totalQuestion, setTotalQuestion] = useState(1)

    const [randomQuestion, setRandomQuestion] = useState({
        manual_id: 0,
        question: "",
        option_one: "",
        option_two: "",
        answer: "",
        image: ""
    })

    const generateNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 20)+1)
        if(!numberList.includes(randomNumber)) return
        generateNumber()
    }

    const getRandomQuestion = async () => {
        generateNumber()
        resetClass()
        const questions = await axios.get(`https://world-cup-quizzies.fly.dev/api/collections/questions/records?perPage=20`)
        const dataQuestions = await questions.data.items
        dataQuestions.map( async (question) => {
            if(randomNumber == Number(question.manual_id)) {   
                getSelectedQuestion(question.id)
            }
        })
    }

    const getSelectedQuestion = async (id) => {
        const selectedQuestion =  await axios.get(`https://world-cup-quizzies.fly.dev/api/collections/questions/records/${id}`)
        const data = selectedQuestion.data
        setRandomQuestion({
            manual_id: data.manual_id,
            question: data.question,
            option_one: data.option_one,
            option_two: data.option_two,
            answer: data.answer,
            image: data.image
        })
    }

    const checkAnswer = (e) => {
        if(e.target.textContent == randomQuestion.answer){
            e.target.className += " correct"
            guest.correctGuest += 1
        } else {
            e.target.className += " false"
            if(e.target.nextSibling == null) e.target.previousSibling.className += " correct"
            else e.target.nextSibling.className += " correct"
            guest.falseGuest += 1
        }
        toNextQuestion()
    }

    const finishGame = () => {
        if(totalQuestion == 12){
            document.querySelector('.finished').style.display = 'flex'
            document.querySelector('.go-back').style.display = 'block'
            document.querySelector('.quiz').style.display = 'none'

            setRecords({
                playedAt: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
                totalCorrect: guest.correctGuest,
                totalWrong: guest.falseGuest
            })
        } else setTotalQuestion(totalQuestion + 1)
    }

    
    const getRecordList = () => {
        const serializedData = localStorage.getItem('recordList');
        let data = JSON.parse(serializedData);
        setRecordLocal(data)
    }

    const toNextQuestion = () => {
        setTimeout(() => {
            getRandomQuestion()
            finishGame()
        }, 1000)
    }
    

    const resetClass = () => {
        document.querySelector('.ans-one').classList.remove("false")
        document.querySelector('.ans-one').classList.remove("correct")
        document.querySelector('.ans-two').classList.remove("false")
        document.querySelector('.ans-two').classList.remove("correct")
    }

    return (
        <QuestionContext.Provider 
            value={{
                randomQuestion, getRandomQuestion, 
                checkAnswer, totalQuestion, 
                guest, records, recordList, 
                setTotalQuestion, setGuest, 
                getRecordList, recordLocal,
                setRecordList
            }}
        >
            {children}
        </QuestionContext.Provider>
    )
}
