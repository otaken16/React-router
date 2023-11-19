import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to={`/`}>HOME</Link>
        <br />
        <Link to={`/page1/`}>PAGE1</Link>
        <br />
        <Link to={`/page2/`}>PAGE2</Link>
        <br />
        <br />
        <Router />
      </div>
    </BrowserRouter>
  );
};
