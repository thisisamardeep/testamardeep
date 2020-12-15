import {OrdersService} from "../services/OrdersService";
import {IOrdersViewState} from '../views/OrdersView';
import {ORDER_ACTION} from "./actions";

const ordersService = new OrdersService();

export class SideEffects {
    static book(state: IOrdersViewState, onDone: (doneAction: ORDER_ACTION, ...args: any) => void) {
        ordersService.book(state.currencyPair, state.amount, onDone);
        console.log(`booking`);
    }
};
