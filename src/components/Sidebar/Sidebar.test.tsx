import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";


it("Должен отрендерить картинку с логотипом", () => {
  render(<Sidebar />);
  const images = screen.getAllByAltText("day's playlist");

  // Проверяем, что как минимум одно изображение присутствует
  expect(images.length).toBeGreaterThan(0);

});