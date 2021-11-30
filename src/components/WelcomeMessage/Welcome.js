import "./Welcome.css";

const WelcomeMessage = (props) => {
  return (
    <div className="app">
      <h1>Welcome {props.name}</h1>
    </div>
  );
};

export default WelcomeMessage;
