import { Page1 } from "../components/Page1";
import { Page1DetailA } from "../components/Page1DetailA";
import { Page1DetailB } from "../components/Page1DetailB";

export const Page1Routes = [
  {
    index: true,
    path: "",
    element: <Page1 />
  },
  {
    index: false,
    path: "detailA",
    element: <Page1DetailA />
  },
  {
    index: false,
    path: "detailB",
    element: <Page1DetailB />
  }
];

/* <Route path="page1">
          <Route index element={<Page1 />} />
          <Route path="detailA" element={<Page1DetailA /> } />
          <Route path="detailB" element={<Page1DetailB /> } />
        </Route> */
