import "./App.css"
import { useState } from 'react'

function FeedbackForm({ onSubmit }) {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")

    const isDisabled = Number(score) < 5 && comment.length <= 10

    const textAreaPlaceHolder = isDisabled
        ? "Please provide a comment why the experience was not superior"
        : "Optional feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ score, comment })
    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className="Field">
                        <label>Score: {score}</label>
                        <input
                            value={score}
                            onChange={(e) => {
                                setScore(e.target.value)
                            }}
                            type="range"
                            min="0"
                            max="10"
                        />
                    </div>
                    <div className="Field">
                        <label>Comments:</label>
                        <textarea
                            placeholder={textAreaPlaceHolder}
                            name="comment"
                            value={comment}
                            onChange={(e) => {
                                setComment(e.target.value)
                            }}
                        />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default FeedbackForm