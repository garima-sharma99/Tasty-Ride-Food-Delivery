import React, { useEffect, useState } from 'react'

function Timer({ initialSeconds }) {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    
    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <>
            <div>
                <p>Countdown: {formatTime(seconds)}</p>
            </div>

        </>
    )
}

export default Timer