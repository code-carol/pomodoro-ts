import Button from "../../components/Button";
import Footer from "../../components/Footer";
import "./Home.css";

const Home = () => {
  const handleOnStart = () => {};
  const handleOnPause = () => {};
  const handleOnReset = () => {};
  return (
    <>
      <h1>Pomodoro 🍅</h1>
      <p>25:00</p>
      <Button className="start-btn" type="button" handleOnClick={handleOnStart}>
        Start
      </Button>
      <Button className="pause-btn" type="button" handleOnClick={handleOnPause}>
        Pause
      </Button>
      <Button className="reset-btn" type="button" handleOnClick={handleOnReset}>
        Reset
      </Button>
      <Footer />
    </>
  );
};

export default Home;
