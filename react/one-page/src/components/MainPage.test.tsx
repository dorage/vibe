import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MainPage from "./MainPage";

describe("MainPage", () => {
  it("must have h1", async () => {
    render(<MainPage />);

    const item = await screen.findByText("React Capactior Boilerplate");
    expect(item.tagName).toEqual("H1");
  });
});
