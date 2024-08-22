import { render, screen } from "@testing-library/react";

import App from "../src/App";

test("Vite+ReactのWelcomeページが表示されている", () => {
	render(<App />);
	screen.debug();
	expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
