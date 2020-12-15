import * as React from "react";
import {CurrencyEnum} from "../enums/CurrencyEnum";

export const Currency: React.FC<CurrencyProps> = ({
                                                      currency,
                                                      onCurrencyPairChanged,

                                                  }) => {


    let options = [];
    for (let currencyEnumKey in CurrencyEnum) {
        if (CurrencyEnum.hasOwnProperty(currencyEnumKey)) {
            options.push(currencyEnumKey);
        }
    }

    return (
        <React.Fragment>
            <label>Currency:</label>
            <select value={currency} onChange={(e) => onCurrencyPairChanged(e)}>
                {options.map((value, index) => {
                    return <option value={value} key={index}>{value}</option>
                })}
            </select>
            <br/>
        </React.Fragment>
    )

};

export interface CurrencyProps {
    currency: CurrencyEnum;
    onCurrencyPairChanged: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}
