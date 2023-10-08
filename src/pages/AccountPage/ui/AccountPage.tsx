import React from "react";
import { classnames } from "shared/helpers/classnames/classnames";
import cls from "./AccountPage.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { accountReducer } from "entities/Account";

const reducers: ReducersList = {
  account: accountReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classnames(cls.ProfilePage, {}, [className])}>
        Profile page
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
