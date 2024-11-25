import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// smoke test
it("renders without crashing", ()=>{
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />)
});

// snapshot test
it("matches snapshot", ()=>{
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
  expect(asFragment()).toMatchSnapshot();
});

// works when you click on the left arrow
it("works when you click on the left arrow", ()=>{
  const { container } = render(
    <Carousel 
      photos={TEST_IMAGES}
      title="images for testing"
      />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move left in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // move left in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});


// arrows are hidden when on the first or last image
it("hides arrows when on the first or last image", ()=>{
  const { container } = render(
    <Carousel 
      photos={TEST_IMAGES}
      title="images for testing"
      />
  );

  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  const leftArrow = container.querySelector(".bi-arrow-left-circle");

  expect(rightArrow).toBeInTheDocument();
  expect(leftArrow).toHaveStyle("visibility: hidden");

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(rightArrow).toHaveStyle("visibility: hidden");
  expect(leftArrow).toBeInTheDocument();
});