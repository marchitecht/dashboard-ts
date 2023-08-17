import { ReactElement } from "react";

import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { classnames } from "shared/helpers/classnames/classnames";
import { Sidebar } from "widgets/Sidebar";

function App(): ReactElement {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classnames("app", { hovered: false }, [theme])}>
      <Navbar />
      <div className="app__content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
