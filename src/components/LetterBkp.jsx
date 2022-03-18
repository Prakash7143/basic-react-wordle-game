import React, {useContext} from 'react'
import { AppContext } from "../App"

const Letter = ({letterPos, attemptVal}) => {
    const { board, correct, currAttempt } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const cword = correct[letterPos] === letter;
    const almost  = !cword && letter !== "" && correct.includes(letter)
    const letterState = currAttempt.attempt > attemptVal && (cword ? "correct" : almost ? "almost" : "error" );

  return (
    <div className="letter" id={letterState}>
        {letter}
    </div>
  )
}

export default Letter