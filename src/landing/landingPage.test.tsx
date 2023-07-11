import React from "react"
import { render, screen } from "@testing-library/react"
import { LandingPage } from "./landingPage"

test("renders learn react link", () => {
  render(<LandingPage />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
