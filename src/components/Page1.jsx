import { Link, useNavigate } from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(10).keys()];
  console.log(arr);
  const navigate = useNavigate();
  const onClickDetailA = () => navigate('/page1/detailA/');
  return (
    <>
      <h1>Page1ページです</h1>
      <h2>詳細画面リンクです↓</h2>
      <Link to={{
            pathname: '/page1/detailA/',
            state: arr //なぜか渡せない、、、
          }}
        state={arr}
        >DetailA</Link>
      <br />
      <Link to="/page1/detailB/">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </>
  );
};
