import {Reducers} from '../../../src/orders/store/Reducers';
import {IOrdersViewState} from '../../../src/orders/views/OrdersView';
import {CurrencyEnum} from '../../../src/orders/enums/CurrencyEnum';


describe('Reducers', () => {
  const initialState: IOrdersViewState = {
    amount: '1m',
    currencyPair: CurrencyEnum.EURUSD,
    bookingRequest: {
      status: null,
      errorMessage: null
    }
  };

  it('should set amount', () => {
    const result = Reducers.onAmountChanged(initialState, '10').amount;
    expect(result).toEqual('10');
  });

  it('should set currencyPair', () => {
    const result = Reducers.onCurrencyPairChanged(initialState, CurrencyEnum.EURUSD).currencyPair;
    expect(result).toEqual(CurrencyEnum.EURUSD);
  });

  it('should request booking', () => {
    const result = Reducers.book(initialState).bookingRequest;

    expect(result.status).toEqual('Booking In Progress');
    expect(result.errorMessage).toEqual(null);
  });

  it('should complete booking successfully', () => {
    const result = Reducers
      .bookingComplete(initialState, {status: true, errorMessage: null})
      .bookingRequest;

    expect(result.status).toEqual('Booking Successful');
    expect(result.errorMessage).toBeNull();
  });

  it('should complete booking unsuccessfully', () => {
    const result = Reducers
      .bookingComplete(initialState, {status: false, errorMessage: 'Price out of range'})
      .bookingRequest;

    expect(result.status).toEqual('Booking Failed');
    expect(result.errorMessage).toEqual('Price out of range');
  });
});

