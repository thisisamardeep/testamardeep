import * as React from "react";

export const BookingStatus: React.FC<BookingStatus> = ({
                                                           status,
                                                       }) => {
    return (
        <React.Fragment>
            <h2>{status}</h2>
        </React.Fragment>
    )
};

export interface BookingStatus {
    status: string;
}
