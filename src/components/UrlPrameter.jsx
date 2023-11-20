import  { useParams ,useLocation } from "react-router-dom";
export const UrlPrameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <>
      <h1>UrlPrameterページです。</h1>
      <p>パラメーターは{id}です。</p>
      <p>クエリパラメーターは{query.get("name")}</p>
    </>
  );
};
