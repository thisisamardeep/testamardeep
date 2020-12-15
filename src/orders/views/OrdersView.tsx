import * as React from 'react';
import {Store} from '../infrastructure/Store';
import {Reducers} from '../store/Reducers';
import {SideEffects} from '../store/SideEffects';
import {CurrencyEnum} from '../enums/CurrencyEnum';
import {Amount} from "./Amount";
import {Currency} from "./Currency";
import {Button} from "./Button";
import {ACTION_AMOUNT_CHANGED, ACTION_BOOKING, ACTION_CURRENCYCHANGED} from "../store/actions";
import {ErrorMessage} from "./ErrorMessage";
import {BookingStatus} from "./BookingStatus";


interface IOrdersViewProps {
}

export interface IOrdersViewState {
    amount: string;
    currencyPair: CurrencyEnum;
    bookingRequest: {
        status: string;
        errorMessage: string;
    };
}

export default class OrdersView extends React.Component<IOrdersViewProps, IOrdersViewState> {
    private store: Store<IOrdersViewState>;

    constructor(props: IOrdersViewProps) {
        super(props);
        const initialState: IOrdersViewState = {
            amount: '10m',
            currencyPair: CurrencyEnum.EURJPY,
            bookingRequest: {
                status: null,
                errorMessage: null
            }
        };
        this.store = new Store(
            initialState,
            Reducers,
            SideEffects,
            (nextState: IOrdersViewState) => this.setState(nextState)
        );
        // set initial state
        this.state = this.store.currentState;
    }

    onAmountChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.store.dispatchAction(ACTION_AMOUNT_CHANGED, e.target.value);
    };

    onCurrencyPairChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        this.store.dispatchAction(ACTION_CURRENCYCHANGED, e.target.value);
    };

    onBookRequested = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.store.dispatchAction(ACTION_BOOKING);
    };

    render() {
        const {amount, bookingRequest, currencyPair} = this.state;
        return (
            <div>
                <h1>OrdersList</h1>
                <Amount onAmountChanged={this.onAmountChanged} value={amount}/>
                <Currency currency={currencyPair}
                          onCurrencyPairChanged={this.onCurrencyPairChanged}/>
                <p>Order summary:</p>
                <p>Amount({amount})</p>
                <Button onClick={this.onBookRequested}/>
                <BookingStatus status={bookingRequest.status}/>
                <ErrorMessage errorMessage={bookingRequest.errorMessage}/>
            </div>
        );
    }
}
