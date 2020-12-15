export const ACTION_AMOUNT_CHANGED = "onAmountChanged";
export const ACTION_CURRENCYCHANGED = "onCurrencyPairChanged";
export const ACTION_BOOKING = "book";
export const ORDER_BOOKING_COMPLETED = "bookingComplete";

export type ORDER_ACTION =
  | typeof ACTION_AMOUNT_CHANGED
  | typeof ACTION_CURRENCYCHANGED
  | typeof ACTION_BOOKING
  | typeof ORDER_BOOKING_COMPLETED;
