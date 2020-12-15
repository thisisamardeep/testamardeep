import {ORDER_ACTION, ORDER_BOOKING_COMPLETED} from "../store/actions";

export interface IResponse {
    status: boolean;
    errorMessage: string;
}

export class OrdersService {
    book(currencyPair: string, amount: string, onDone: (doneAction: ORDER_ACTION, success: IResponse) => void) {
        setTimeout(() => {
                const bookingResponse = {
                    status: amount === '10m',
                    errorMessage: amount === '10m' ? null : 'Price out of range'
                };
                onDone(ORDER_BOOKING_COMPLETED, bookingResponse);
            },
            500
        )
    }
}
