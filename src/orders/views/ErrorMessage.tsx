import * as React from "react";

export const ErrorMessage: React.FC<ErrorProps> = ({
                                                       errorMessage,
                                                   }) => {


    return (
        <React.Fragment>
            <div>{errorMessage}</div>
        </React.Fragment>
    )

};

export interface ErrorProps {
    errorMessage: string;
}
