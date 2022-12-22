import wcLogo from '../assets/wcWhite.png'
import '../App.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { QuestionContext } from '../context/QuestionContext'

function Front() {
    const {setTotalQuestion, setGuest, setRecordList} = useContext(QuestionContext)

    const startQuiz = () => {
        setTotalQuestion(1)
        setGuest({
            correctGuest: 0,
            falseGuest: 0
        })
        console.log(localStorage.getItem('recordList') !== null)
        if(localStorage.getItem('recordList') !== null) {
            const serializedData = localStorage.getItem('recordList');
            let data = JSON.parse(serializedData);
            setRecordList(data)
        }
    }

    return (
        <div className="App">
            <div className="logo-wrapper">
                <img src={wcLogo} className="logo react" alt="React logo" />
            </div>
            <h1 className='quizzies'>Quizzies</h1>
            <Link to='/quizes'>
                <button className='btn front-btn start-btn' onClick={startQuiz}>Start Quiz</button>
            </Link>
            <Link to='/record'>
                <button className='btn front-btn record-btn'>Records</button>
            </Link>
            <footer>
                &copy; Khairunnisaas.2022
            </footer>
        </div>
    )
}

export default Front
