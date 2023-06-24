import { Fragment } from "react";
import HomePage from "./pages/HomePage";
import BackToTopButton from "./Components/Backtop/backtop";

function App() {
  return (
    <Fragment>
      <HomePage />
      <BackToTopButton/>
    </Fragment>
  );
}

export default App;
