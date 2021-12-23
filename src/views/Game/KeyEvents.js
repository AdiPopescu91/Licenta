import React, {useEffect, useState} from 'react'

function KeyEvents(props) {
   const { onPositionChange,position }=props;
   console.log(position)
    const handleKeyDown=event=>{
        console.log(typeof event.keyCode)
        switch (event.keyCode) {
            case 40:
               onPositionChange({
                    ...position,
                    y:position.y+20,
                })
                break;
            case 38:
                debugger
                onPositionChange({
                    ...position,
                    y:position.y-20,
                })
                break;
            case 37:
                onPositionChange({
                    ...position,
                    x:position.x-20,
                })
                break;
            case 39:
                onPositionChange({
                    ...position,
                    x:position.x+20,
                })
                break;
            default:

        }
    }

    useEffect(()=>{
        document.addEventListener('keydown',handleKeyDown);
        return ()=>document.removeEventListener('keydown',handleKeyDown);
    },[])

    return null
}
 export default KeyEvents