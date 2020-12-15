import {Store} from '../../../src/orders/infrastructure/Store';

describe('Store', () => {
  let store: Store<string>;
  const stateChange = jest.fn();
  const action = jest.fn();
  const actionWithSideEffect = jest.fn();
  const sideEffect = jest.fn();

  beforeEach(() => {
    stateChange.mockReset();
    action.mockReset();
    actionWithSideEffect.mockReset();
    sideEffect.mockReset();

    store = new Store(
      'initialState',
      {action: action, actionWithSideEffect: actionWithSideEffect},
      {actionWithSideEffect: sideEffect},
      stateChange
    );
  });

  it('Returns current state', () => {
    expect(store.currentState).toBe('initialState');
  });

  it('Dispatches action', () => {
    store.dispatchAction('action');

    expect(action).toBeCalledTimes(1);
    expect(action.mock.calls[0]).toMatchObject(['initialState']);
    expect(actionWithSideEffect).toBeCalledTimes(0);
    expect(sideEffect).toBeCalledTimes(0);
  });

  it('Dispatches action with side effect', () => {
    store.dispatchAction('actionWithSideEffect');

    expect(action).toBeCalledTimes(0);
    expect(actionWithSideEffect).toBeCalledTimes(1);
    expect(actionWithSideEffect.mock.calls[0]).toMatchObject(['initialState']);
    expect(sideEffect).toBeCalledTimes(1);
  });

  it('Does not dispatch invalid action', () => {
    store.dispatchAction('invalid');

    expect(action).toBeCalledTimes(0);
    expect(actionWithSideEffect).toBeCalledTimes(0);
    expect(sideEffect).toBeCalledTimes(0);
  });
});
