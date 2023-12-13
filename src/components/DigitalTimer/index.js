// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    timer: 1500,
    intialText: 'play icon',
    finalStage: 'pause icon',
    playIcon: 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png',
    resetIcon: 'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png',
    buttonValue: 25,

    isTrue: false,
    pauseIcon: 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png',
  }

  startButton = () => {
    const {isTrue, timer} = this.state
    if (isTrue === false) {
      this.timerId = setInterval(this.ining, 1000)
      this.setState({isTrue: true})
    } else {
      clearInterval(this.timerId)
      this.setState({isTrue: false})
    }
  }

  ining = () => {
    const {timer} = this.state
    if (timer === 0) {
      this.setState({isTrue: false})
    } else {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
      }))
    }
  }

  onIncrement = () => {
    const {timer, isTrue} = this.state

    if (isTrue === false) {
      this.setState(prevState => {
        const value = {
          timer: prevState.timer + 60,
          buttonValue: prevState.buttonValue + 1,
        }
        return value
      })
    } else {
      this.setState(prevState => {
        const value = {
          timer: prevState.timer,
          buttonValue: prevState.buttonValue,
        }
        return value
      })
    }
  }

  onDecrement = () => {
    const {timer, isTrue} = this.state
    if (isTrue === false) {
      this.setState(prevState => {
        const value = {
          timer: prevState.timer - 60,
          buttonValue: prevState.buttonValue - 1,
        }
        return value
      })
    } else {
      this.setState(prevState => {
        const value = {
          timer: prevState.timer,
          buttonValue: prevState.buttonValue,
        }
        return value
      })
    }
  }

  onResetting = () => {
    clearInterval(this.timerId)
    this.setState({
      timer: 1500,
      buttonValue: 25,
      isTrue: false,
    })
  }

  render() {
    const {
      timer,
      finalStage,
      playIcon,
      resetIcon,
      buttonValue,
      intialText,
      isTrue,
      pauseIcon,
    } = this.state
    console.log(isTrue)
    const minutes = Math.floor((timer * 60) / 3600)
    const seconds = Math.floor(timer % 60)
    const value = minutes >= 10 ? `${minutes}` : `0${minutes}`
    const value1 = seconds >= 10 ? `${seconds}` : `0${seconds}`
    console.log(value1)
    return (
      <div className="background">
        <h1>Digital Timer</h1>
        <div className="second-one">
          <div className="background-image">
            <div className="card">
              <h1 className="heading">{`${value}:${value1}`}</h1>
              <p>{isTrue ? 'Running' : 'Paused'}</p>
            </div>
          </div>

          <div className="seperate">
            <button className="button" onClick={this.startButton} type="button">
              <img
                src={
                  isTrue
                    ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                }
                alt={isTrue ? 'pause icon' : 'play icon'}
              />
            </button>
            <button className="paragraph">{isTrue ? 'Pause' : 'Start'}</button>
          </div>
          <div className="seperate">
            <button className="button" onClick={this.onResetting}>
              <img src={resetIcon} className="size-playIcon" alt="reset icon" />
            </button>
            <p className="paragraph">Reset</p>
          </div>
          <div>
            <p className="paragraph2">Set Timer limit</p>
            <div className="plusAndMinusButtons">
              <button className="button1" onClick={this.onDecrement}>
                -
              </button>
              <p>{buttonValue}</p>
              <button className="button1" onClick={this.onIncrement}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
