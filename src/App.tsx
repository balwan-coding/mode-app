import HappyTracker from "./HappyTracker";
import SadTracker from "./SadTracker";
import HappyIncrement from "./HappyIncrement";
import SadIncrement from "./SadIncrement";
import Resetbtn from "./Resetbtn";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HappyTracker />
      <SadTracker />
      <div className="flex justify-center">
        <HappyIncrement />
        <SadIncrement />
      </div>
      <Resetbtn />
    </div>
  );
}

export default App;
