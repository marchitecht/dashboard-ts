import cls from "./Navbar.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { useState } from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import Applink, { ApplinkTheme } from "shared/ui/Applink/Applink";
import Button from "shared/ui/Button/Button";
import Modal from "shared/ui/Modal/Modal";

interface NavbarProps {
  className?: string;
}
export default function Navbar({ className }: NavbarProps) {
  const [isAuthModal, setisAuthModal] = useState(false);
  const onToggleModal = () => {
    setisAuthModal((prev) => !prev);
  };
  return (
    <div className={classnames(cls.navbar, {}, [className])}>
      <Button className={cls.navbar__links} onClick={onToggleModal}>
        войти
        {/* <Applink theme={ApplinkTheme.PRIMARY} className={cls.mainLink} to="/">
          MAIN
        </Applink>
        <Applink
          theme={ApplinkTheme.SECONDARY}
          className={cls.aboutLink}
          to="/about">
          ABOUT
        </Applink> */}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        helpers
      </Modal>
    </div>
  );
}
