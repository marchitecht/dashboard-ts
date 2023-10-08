import cls from "./Navbar.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUserName";
import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classnames } from "shared/helpers/classnames/classnames";
import Applink, { ApplinkTheme } from "shared/ui/Applink/Applink";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";

interface NavbarProps {
  className?: string;
}
const Navbar = memo(({ className }: NavbarProps) => {
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
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
});
export default Navbar;
