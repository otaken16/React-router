import { useNavigate } from "react-router-dom";
export const Page1DetailB = () => {
  const navigate = useNavigate();
  const onClickBack = () => navigate(-1);
  return(
    <>
      <h1>Page1DetailBページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </>
)};
