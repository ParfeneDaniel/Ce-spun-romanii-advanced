
const AddAnswer = ({ number }) => {
  return (
    <div className="addAnswer">
      <p>Answer {number}</p>
      <div className="dataAnswer">
        <input type="text" placeholder="Write your answer" id="firstAnswerInput"/>
        <input type="text" placeholder="Points" id="secondAnswerInput"/>
      </div>
    </div>
  )
}

export default AddAnswer
