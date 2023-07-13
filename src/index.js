import React, { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RecoilRoot>
      {/* recoil 비동기 */}
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </StrictMode>
);

reportWebVitals();
