import cls from "./Navbar.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classnames } from "shared/helpers/classnames/classnames";
import Applink, { ApplinkTheme } from "shared/ui/Applink/Applink";

interface NavbarProps {
  className?: string;
}
export default function Navbar({ className }: NavbarProps) {
  const { toggleTheme } = useTheme();

  return (
    <div className={classnames(cls.navbar, {}, [className])}>
      <button onClick={toggleTheme}>on/off</button>
      <div className={cls.navbar__links}>
        <Applink theme={ApplinkTheme.PRIMARY} className={cls.mainLink} to="/">
          MAIN
        </Applink>
        <Applink theme={ApplinkTheme.SECONDARY} className={cls.aboutLink} to="/about">
          ABOUT
        </Applink>
      </div>
    </div>
  );
}
