import React, { useState } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

import Router2 from "Components/Router2";
// import Header from "Components/Header";

const App = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing(!showing);

  if (showing) {
    return (
      <>
        <Router2 />
        <GlobalStyles />
      </>
    );
  } else {
    return (
      <>
        <Router />
        <GlobalStyles />

        {/* showing변수에 값 넣어서 다음 페이지로 가는 지 테스트하기 위한 버튼 */}
        <div className="app">
          <button onClick={toggleShowing}>toggle</button>
        </div>
      </>
    );
  }
};
export default App;
