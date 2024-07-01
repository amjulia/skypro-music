import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SignIn } from "./SignIn";


describe("Компонент навигации", () => {
    it("Должен отрендерить картинку с логотипом", () => {
      render(<SignIn />);
      const image = screen.getByAltText("logo");
      expect(image).toBeInTheDocument();
    });
    
  });