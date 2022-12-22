import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { QuestionContext } from "../context/QuestionContext";

const Record = () => {
    const {getRecordList, recordLocal} = useContext(QuestionContext)


    useEffect(() => {
        getRecordList()
    }, [])

    return (
        <div className="record-wrapper">
            <Link to='/'><button className="btn go-home">Go Back</button></Link>
            <h1>Your Playing Records</h1>
            <main className="record-table">
                <section className="record-header">
                    <div className="played-at">Played At</div>
                    <div className="total-correct">Total Correct Answer</div>
                    <div className="total-wrong">Total Wrong Answer</div>
                </section>
                <section className="record-content">
                    {
                        recordLocal== null? <p style={{marginTop: '1rem'}}>You haven't played the quiz yet!</p> :
                        recordLocal.map(record => (
                            <div className="record-content-wrapper" key={record.playedAt}>
                                <div className="played-at-content">{record.playedAt}</div>
                                <div className="total-correct-content">{record.totalCorrect}</div>
                                <div className="total-wrong-content">{record.totalWrong}</div>
                            </div>
                        ))
                    }
                </section>
            </main>
            <footer>
                &copy; Khairunnisaas.2022
            </footer>
        </div>
    );
}
 
export default Record;