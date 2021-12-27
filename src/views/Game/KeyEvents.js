import React, {useEffect, useState} from 'react'

function KeyEvents(props) {
   const { onPositionChange }=props;
    const handleKeyDown=event=>{
        onPositionChange(event.keyCode)
    }

    useEffect(()=>{
        document.addEventListener('keydown',handleKeyDown);
        return ()=> document.removeEventListener('keydown',handleKeyDown);
    },[])

    return null
}
 export default KeyEvents
