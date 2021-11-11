import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestContact from '../../components/TestContact';
import "@testing-library/jest-dom";

import {
  configure, shallow
} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({
  adapter: new Adapter()
});


describe('render components', () => {

  test('render TestContact', () => {
    shallow(<TestContact />)
  });

  test('render text-input', () => {
    render(<TestContact />);

    const inputText = screen.getByTestId("text-input");
    expect(inputText).toBeInTheDocument();
    expect(inputText).toHaveAttribute("type", "text");
  });

  test('valid text input field', () => {
    render(<TestContact />);

    const inputText = screen.getByTestId("text-input");
    userEvent.type(inputText, 'rodrigo');

    expect(screen.getByTestId("text-input")).toHaveValue('rodrigo');
  });

  test('render number-input', () => {
    render(<TestContact />);

    const inputnumber = screen.getByTestId("number-input");
    expect(inputnumber).toBeInTheDocument();
    expect(inputnumber).toHaveAttribute("type", "text");
  });

  test('valid number input field', () => {
    render(<TestContact />);

    const inputnumber = screen.getByTestId("number-input");
    userEvent.type(inputnumber, "12345");

    expect(screen.getByTestId("number-input")).toHaveValue("12345");
  });
})  
