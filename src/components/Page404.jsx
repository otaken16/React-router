import { Link } from "react-router-dom";
export const Page404 = () => {
  return(
    <>
      <h1>４０４ ページが見つかりません。</h1>
      <Link to={`/`}>トップページに戻る</Link>
    </>
  );
};
