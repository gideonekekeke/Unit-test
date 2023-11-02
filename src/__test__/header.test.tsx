import { expect, test } from "vitest";
import { screen, render } from "../../test-utils";
import Header from "../components/Header";

test("should render with the props pass to it", () => {
	render(<Header title='header' />);
	const divElement = screen.getByRole("heading", {name : "header"});
	expect(divElement).toBeTruthy();
});


test("test element by title", () => {
	render(<Header title='header' />);
	const headingElement = screen.getByTitle("second-heading");
	expect(headingElement).toBeTruthy();
});


test("test element with input placeholder", ()=>{
    render(<Header title = "head" />)

    const inputElement = screen.getAllByPlaceholderText("name")
    expect(inputElement).toBeTruthy()
})


test("test element with and id", ()=>{
    render(<Header title="head"/>)
    const IdElement = screen.getByTestId("header-id")
    expect(IdElement).toBeTruthy()
})


test("test the length of heading element", () => {
	render(<Header title='head' />);
	const headingElements = screen.getAllByRole("heading")
	expect(headingElements.length).toBe(2)
});