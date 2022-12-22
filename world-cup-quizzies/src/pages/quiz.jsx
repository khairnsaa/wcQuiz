import { useContext, useEffect } from 'react';
import { QuestionContext } from '../context/QuestionContext';
import { Link } from 'react-router-dom';
const Quiz = () => {
    const {
        randomQuestion, getRandomQuestion, 
        checkAnswer, totalQuestion, guest, 
        records, recordList, 
    } = useContext(QuestionContext)

    useEffect(() => {
        getRandomQuestion()
    }, [])

    const storeRecordsData = () => {
        console.log(recordList)
        recordList.push(records)
        const parsed = JSON.stringify(recordList)
        localStorage.setItem('recordList', parsed)
    }
    return (
        <div className="quiz-wrapper">
            <section className="quiz" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${randomQuestion.image})`}}>
                <header>
                    <div className="quiz-number">{totalQuestion}/12</div>
                </header>
                <section className="question-ans">
                    <h1 className="question">{randomQuestion.question}</h1>
                    <div className="ans">
                        <button className="btn ans-one" onClick={checkAnswer}>{randomQuestion.option_one}</button>
                        <button className="btn ans-two" onClick={checkAnswer}>{randomQuestion.option_two}</button>
                    </div>
                </section>
            </section>

            <section className="finished" >
                <section className="finished-content">
                    <h1 className="thanks">Thank You For Playing</h1>
                    <div className="guests">
                        <div className="guest-card correct-ans">
                            <p>Total correct answer</p>
                            <h2>{guest.correctGuest}</h2>
                        </div>
                        <div className="guest-card wrong-ans">
                            <p>Total wrong answer</p>
                            <h2>{guest.falseGuest}</h2>
                        </div>
                    </div>
                </section>
            </section>
            
            <Link to='/' className='go-back' onClick={storeRecordsData}>
                Back to Home
            </Link>

            <footer>
                &copy; Khairunnisaas.2022
            </footer>
        </div>
    );
}
 
export default Quiz;