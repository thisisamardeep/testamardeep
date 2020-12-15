import {Reducers} from '../store/Reducers';
import {SideEffects} from '../store/SideEffects';
import {ORDER_ACTION} from "../store/actions";

export class Store<TState> {
    constructor(
        private state: TState,
        private readonly reducers: Reducers,
        private readonly sideEffects: SideEffects,
        private readonly onStateChanged: (state: TState) => void
    ) {
    }

    get currentState(): TState {
        return this.state;
    }

    dispatchAction(action: string, ...rest: any) {
        const reducer = this.reducers[action];
        if (reducer) {
            const nextState = reducer(this.state, ...rest);
            const sideEffect = this.sideEffects[action];
            if (sideEffect) {
                const onSideEffectDone = (doneAction: ORDER_ACTION, ...args: any) =>
                    this.dispatchAction(doneAction, ...args);
                onSideEffectDone.bind(this);
                sideEffect(nextState, onSideEffectDone);
            }
            this.state = nextState;
            this.onStateChanged(this.state);
        }
    }
}
