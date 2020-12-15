import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import {Currency} from '../../../src/orders/views/Currency';
import {CurrencyEnum} from "../../../src/orders/enums/CurrencyEnum";

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


describe('Currency', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Currency currency={CurrencyEnum.EURUSD}
                              onCurrencyPairChanged={() => {
                              }}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('can render, submit and update', () => {
        act(() => {
            ReactDOM.render(<Currency currency={CurrencyEnum.EURUSD}
                                      onCurrencyPairChanged={() => {
                                      }}
            />, container);
        });
        const label = container.querySelector('label');
        expect(label.textContent).toBe('Currency:');
        const select = container.querySelector('select');
        expect(select.options.length).toBe(4);

    });
});
