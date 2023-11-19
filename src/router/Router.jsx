import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Page2 } from "../components/Page2";
import { Page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`page1`}>
          {Page1Routes.map(({ index, path, element }) => {
            return (
              <Route key={path} index={index} path={path} element={element} />
            );
          })}
        </Route>
        <Route path={`page2`} element={<Page2 />} />
      </Routes>
    </>
  );
};

// {/* <Route path={Page1Route[0].path} element={Page1Route[0].element} />
//           {console.log("ページ１配列"+Page1Route[0].element)} */}
