import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {render, screen} from "@testing-library/react";
import Header from "./Header";




it("Header Loading Status", () => {
    render(<Header />);
    const headerContent = screen.getByText(/Emoji Search/i);
    expect(headerContent).toBeInTheDocument();
});

it("Input Rendering Status", () => {
    render(<App />);
    const input = screen.getByText("Search");
    expect(input).toBeInTheDocument("Search");
});

it("Emoji List Rendering Status", () => {
    render(<App />);
    const emojis = screen.getAllByTestId("row");
    expect(emojis.length).toEqual(20);
});

it("Emoji Copy Status", () => {
    render(<App />);
    const event = screen.getAllByTestId("row");
    expect(event[0]).toHaveAttribute("data-clipboard-text");
});



