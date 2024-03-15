import { useState } from "react";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import "./Home.css";

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleOnStart = () => {};
  const handleOnPause = () => {};
  const handleOnReset = () => {};
  return (
    <>
      <div className="container">
        <div className="center-container">
          <h1 className="title">Pomodoro 🍅</h1>

          <div className="timer">
            <div className="progress-bar">
              <div className="inner-bar">
                <h2>25:00</h2>
              </div>
            </div>
          </div>

          <div className="buttons">
            {isStarted ? (
              <>
                <Button
                  className="btn"
                  id="pause-btn"
                  type="button"
                  handleOnClick={handleOnPause}
                >
                  Pause
                </Button>
                <Button
                  className="btn"
                  id="reset-btn"
                  type="button"
                  handleOnClick={handleOnReset}
                >
                  Reset
                </Button>
              </>
            ) : (
              <Button
                className="btn"
                id="start-btn"
                type="button"
                handleOnClick={handleOnStart}
              >
                Start
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
