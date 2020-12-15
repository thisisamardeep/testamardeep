import {IOrdersViewState} from '../views/OrdersView';
import {IResponse} from '../services/OrdersService';
import {CurrencyEnum} from '../enums/CurrencyEnum';

export class Reducers {
    static onAmountChanged(state: IOrdersViewState, amount: string): IOrdersViewState {
        console.log(`Amount changed from ${state.amount} to ${amount}`);
        return {
            ...state,
            amount
        };
    }

    static onCurrencyPairChanged(state: IOrdersViewState, currencyPair: CurrencyEnum): IOrdersViewState {
        console.log(`currencyPair changed from ${state.currencyPair} to ${currencyPair}`);
        return {
            ...state,
            currencyPair
        };
    }

    static book(state: IOrdersViewState): IOrdersViewState {
        console.log(`booking`);
        return {
            ...state,
            bookingRequest: {
                status: 'Booking In Progress',
                errorMessage: null
            }
        };
    }

    static bookingComplete(state: IOrdersViewState, bookingResponse: IResponse): IOrdersViewState {
        console.log(`booking completed`);
        return {
            ...state,
            bookingRequest: {
                status: bookingResponse.status ? 'Booking Successful' : 'Booking Failed',
                errorMessage: bookingResponse.errorMessage
            }
        };
    }
};
