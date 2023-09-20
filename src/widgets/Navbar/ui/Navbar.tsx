import cls from "./Navbar.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUserName";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classnames } from "shared/helpers/classnames/classnames";
import Applink, { ApplinkTheme } from "shared/ui/Applink/Applink";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";

interface NavbarProps {
  className?: string;
}
export default function Navbar({ className }: NavbarProps) {
  const [isAuthModal, setisAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const onCloseModal = () => {
    setisAuthModal(false);
  };
  const onShowModal = () => {
    setisAuthModal(true);
  };
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classnames(cls.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.navbar__links}
          onClick={onLogout}>
          выйти
        </Button>
      </div>
    );
  }
  return (
    <div className={classnames(cls.navbar, {}, [className])}>
      <Button className={cls.navbar__links} onClick={onShowModal}>
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
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
}
