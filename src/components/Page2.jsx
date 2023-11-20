import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <>
      <h1>Page2ページです</h1>
      <h2>詳細画面リンクです↓</h2>
      <Link to="/page2/100">Url Parameter</Link>
      <br />
      <Link to="/page2/100?name=hogehoge">Query Parameter</Link>
    </>
  );
};
