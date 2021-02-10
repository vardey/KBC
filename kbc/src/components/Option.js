import React from 'react'

const Option = ({name, value, pauseTimer, resetTimer, getNextQusetion}) => {
    
    const lockOption =() =>{
        pauseTimer()

        //check asnwer logic
        const delayInMilliseconds = 1500
        
        setTimeout(()=>{
            getNextQusetion()
            resetTimer()
        },delayInMilliseconds)
        
    }
    
    return (
        <button onClick={lockOption}>
            {name} {" "} {value}
        </button >
    )
}

export default Option
