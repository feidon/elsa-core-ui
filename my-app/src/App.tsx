import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  ElsaStudioDashboard,
  ElsaWorkflowDefinitionsListScreen,
} from "react-library";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ElsaWorkflowDefinitionsListScreen basePath="http://localhost:5174/dashboard" />
    </>
  );
}

export default App;
