import { useState } from "react";

import "./App.css";
import ProgressContainer from "./components/ProgressContainer/ProgressContainer";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  return (
    <>
      <header>
        <h1>Progress App</h1>
      </header>
      <main>{userLoggedIn && <ProgressContainer />}</main>
    </>
  );
}

export default App;
