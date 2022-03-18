import React, {useContext} from 'react'
import { AppContext } from "../App"

const Key = ({keyVal, bigKey, disabled}) => {
    const { onEnter, onDelete, onSelector} = useContext(AppContext);

    const selectLetter = () =>{
        if(keyVal === 'ENTER'){
            onEnter();
        }else if(keyVal === 'DELETE'){
            onDelete();
        } else{
            onSelector(keyVal);
        }
    }

  return (
    <div className='key' id={bigKey ?"big" : disabled && "disabled"} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}

export default Key