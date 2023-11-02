import { expect, test } from "vitest";
import {render, screen}  from '../../test-utils'
import App from "../App";

test("hello world", () => {
	render(<App  />)
	const elementText = screen.getByPlaceholderText("React");
	expect(elementText).toBeTruthy()
});
