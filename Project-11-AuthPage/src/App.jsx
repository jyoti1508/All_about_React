import { useState } from "react";
import AuthPage from "./AuthPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthPage></AuthPage>
    </>
  );
}

export default App;
