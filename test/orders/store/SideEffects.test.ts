import {SideEffects} from '../../../src/orders/store/SideEffects';
import {IOrdersViewState} from '../../../src/orders/views/OrdersView';
import {CurrencyEnum} from '../../../src/orders/enums/CurrencyEnum';


describe('SideEffects', () => {
  const successState: IOrdersViewState = {
    amount: '10m',
    currencyPair: CurrencyEnum.EURUSD,
    bookingRequest: {
      status: null,
      errorMessage: null
    }
  };

  it('should run service callback', done => {
    const mockCallback = jest.fn();

    SideEffects.book(successState, () => {
      mockCallback();
      expect(mockCallback).toBeCalledTimes(1);
      done();
    });
  });

  it('should receive action', done => {
    SideEffects.book(failState, (action, response) => {
      expect(action).toEqual('bookingComplete');
      done();
    });
  });

  it('should receive success response', done => {
    SideEffects.book(successState, (action, response) => {
      expect(response.status).toEqual(true);
      expect(response.errorMessage).toBeNull();
      done();
    });
  });

  const failState: IOrdersViewState = {
    amount: '2m',
    currencyPair: CurrencyEnum.EURUSD,
    bookingRequest: {
      status: null,
      errorMessage: null
    }
  };

  it('should receive fail response', done => {
    SideEffects.book(failState, (action, response) => {
      expect(response.status).toBe(false);
      expect(response.errorMessage).toEqual('Price out of range');
      done();
    });
  });
});
