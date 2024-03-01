import { UserProvider } from "./User";
import { CartProvider } from "./Cart";
import React from "react";
import Props from "./types";

export const AppProvider = React.memo(({ children }: Props) => {
    return (
        <UserProvider>
            <CartProvider>{children}</CartProvider>
        </UserProvider>
    );
});
