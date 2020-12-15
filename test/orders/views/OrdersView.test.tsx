import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import OrdersView from '../../../src/orders/views/OrdersView';

let container: any;

beforeEach(() => {
  // @ts-ignore
  window._virtualConsole.emit = jest.fn();
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe('OrdersView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<OrdersView />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can render, submit and update', () => {
    act(() => {
      ReactDOM.render(<OrdersView />, container);
    });

    const title = container.querySelector('h1');
    const amountLabel = container.querySelector('label:nth-of-type(1)');
    const requestTitle = container.querySelector('h2');

    expect(title.textContent).toBe('OrdersList');
    expect(amountLabel.textContent).toBe('Amount:');
    expect(requestTitle.textContent).toBe('');

    const button = container.querySelector('button');

    // Test second render and componentDidUpdate
    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(requestTitle.textContent).toBe('Booking In Progress');
  });
});
