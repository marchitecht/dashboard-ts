import { ReactElement, Suspense, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { classnames } from "shared/helpers/classnames/classnames";
import { Sidebar } from "widgets/Sidebar";
import { Modal } from "shared/ui/Modal/Modal";
import { Counter } from "entities/Counter";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

function App(): ReactElement {
  // useEffect(() => {
  //   if (Math.random() > 0.5) {
  //     throw new Error("error");
  //   }
  // });

  const { theme, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);


  return (
    <div className={classnames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
