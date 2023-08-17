import { Link, LinkProps } from "react-router-dom";
import cls from "./Applink.module.scss";
import { classnames } from "shared/helpers/classnames/classnames";

export enum ApplinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ApplinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  theme?: ApplinkTheme;
}

export default function Applink({
  to,
  className,
  children,
  theme = ApplinkTheme.PRIMARY,
  ...otherProps
}: ApplinkProps) {

  return (
    <>
      <Link
        className={classnames(cls.Applink, { [cls[theme]]: false }, [
          className,
        //   cls[theme],
        ])}
        to={to}
        {...otherProps}>
        {children}
      </Link>
    </>
  );
}

