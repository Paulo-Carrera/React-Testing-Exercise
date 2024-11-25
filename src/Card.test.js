import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Card from "./Card";
// import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("renders without crashing", ()=>{
    render(<Card caption="testing" src="test.com" currNum={1} totalNum={1}/>);
});

// snapshot test
it("matches snapshot" , ()=>{
    const {asFragment} = render(<Card caption="testing" src="test.com" currNum={1} totalNum={1}/>);
    expect(asFragment()).toMatchSnapshot();
});