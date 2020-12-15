import * as React from "react";

export const Button: React.FC<ButtonProps> = ({
                                                  onClick,

                                              }) => {
    return (
        <React.Fragment>
            <p>
                <button onClick={(event) => {
                    onClick(event);
                }}>
                    Book
                </button>
            </p>
        </React.Fragment>
    )
};

export interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
