import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Like from "../Like";

describe("Like component", () => {
  it("should display 'Likes: 0' by default", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });

  it("should increment likes count when Like button is clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });

  it("should decrement likes count when Dislike button is clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
  });
});
