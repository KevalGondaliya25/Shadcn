"use client";
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { store, persistor } from "@/redux/store";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NextThemesProvider {...themeProps}>
                    {children}
                </NextThemesProvider>
            </PersistGate>
        </Provider>
    );
}
