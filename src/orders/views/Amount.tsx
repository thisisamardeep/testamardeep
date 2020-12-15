import * as React from "react";

export const Amount: React.FC<AmountProps> = ({
                                                  value,
                                                  onAmountChanged,

                                              }) => {

    return (
        <React.Fragment>
            <p>
                <label>Amount:</label>
                <input
                    type="text"
                    value={value}
                    onChange={(event) => {
                        onAmountChanged(event);
                    }}
                />
            </p>
        </React.Fragment>
    )
};

export interface AmountProps {
    value: string;
    onAmountChanged: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
