export default `
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Form from './Form';

afterEach(cleanup);

beforeEach(() => {
  require('mutationobserver-shim');
});

describe('React-Hook-Form + setSTate', () => {
  it('Displays the updated value', async () => {
    const { getByTestId, findByTestId } = render(<Form />);
    const myinput = getByTestId(/myinput/i);
    const submitButon = await findByTestId('login-submit');

    fireEvent.change(myinput, { target: { value: 'set random input' } });
    fireEvent.click(submitButon);
    await findByTestId('my-res')
  });
});`
