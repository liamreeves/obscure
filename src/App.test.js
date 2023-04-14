import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the 'New Word' button", () => {
    render(<App />);
    const newWordButton = screen.getByRole("button", { name: /new word/i });
    expect(newWordButton).toBeInTheDocument();
  });

  test("renders the tooltip with the correct text", () => {
    render(<App />);
    const tooltipTrigger = screen.getByText("?");
    fireEvent.click(tooltipTrigger);
    const tooltipText = screen.getByText(
      /the dictionary of obscure sorrows is a website/i
    );
    expect(tooltipText).toBeInTheDocument();
  });

  test("renders the WordDropdown component", () => {
    render(<App />);
    const wordDropdown = screen.getByRole("combobox");
    expect(wordDropdown).toBeInTheDocument();
  });
});
