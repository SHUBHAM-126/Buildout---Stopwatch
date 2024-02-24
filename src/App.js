import { useEffect, useState } from 'react'

function App() {

  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {

    let intervalId;

    if (isRunning) {
      intervalId = setTimeout(() => {
        setElapsedTime((prev) => prev + 1)
      }, 1000)
    }

    return (() => clearTimeout(intervalId))

  }, [elapsedTime, isRunning])

  const formatTime = (time) => {
    const minutes = Math.floor(time/60);
    const seconds = time % 60

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{`Time: ${formatTime(elapsedTime)}`}</p>
      <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={() => {
        setIsRunning(false)
        setElapsedTime(0)
      }}>Reset</button>
    </div>
  );
}

export default App;