import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Verification from "./components/Verification";

// fonts
import "./fonts/BenzinBold.ttf";
import "./fonts/BenzinExtraBold.ttf";
import "./fonts/BenzinMedium.ttf";
import "./fonts/BenzinRegular.ttf";
import "./fonts/BenzinSemibold.ttf";

function App() {
  return (
    <div className="screen">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="verification" element={<Verification />} />
      </Routes>
    </div>
  );
}

export default App;
