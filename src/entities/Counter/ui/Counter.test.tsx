import componentRender from "shared/lib/tests/componentRender";
import { Counter } from "./Counter";
import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe("Counter", () => {
  test("should render correctly", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

});
