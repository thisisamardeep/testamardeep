import {CurrencyEnum} from '../../../src/orders/enums/CurrencyEnum';
import {OrdersService} from '../../../src/orders/services/OrdersService';

describe('OrdersService', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('Returns success status without error message', () => {
    const service = new OrdersService();
    const mockCallback = jest.fn();

    service.book(CurrencyEnum.EURUSD, '10m', mockCallback);
    jest.runAllTimers();

    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback.mock.calls[0]).toMatchObject(['bookingComplete', {status: true, errorMessage: null}]);
  });

  it('Returns failure status with error message', () => {
    const service = new OrdersService();
    const mockCallback = jest.fn();

    service.book(CurrencyEnum.EURUSD, '2m', mockCallback);
    jest.runAllTimers();

    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback.mock.calls[0]).toMatchObject(['bookingComplete', {status: false, errorMessage: 'Price out of range'}]);
  });
});
