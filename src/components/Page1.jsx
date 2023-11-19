import { Link } from "react-router-dom";
export const Page1 = () => {
  return (
    <>
      <h1>Page1ページです</h1>
      <h2>詳細画面リンクです↓</h2>
      <Link to="/page1/detailA/">DetailA</Link>
      <br />
      <Link to="/page1/detailB/">DetailB</Link>
    </>
  );
};
