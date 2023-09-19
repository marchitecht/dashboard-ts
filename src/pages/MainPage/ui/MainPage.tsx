import { Counter } from "entities/Counter";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState("");
  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      {t("main")}
      <h1>asdasd</h1>
      <Counter />
      <Input placeholder="input something" value={value} onChange={onChange} />
    </div>
  );
};

export default MainPage;
