import "./App.css";
import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Greeting name={"Samss"} />
      <Counter />
      <UserProfile userId={3} />
    </>
  );
}

export default App;
