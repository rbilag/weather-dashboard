import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/index.css";

const queryClient = new QueryClient();

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};

// Initialize MSW
initialize();

/**
 * adds a Storybook decorator to get the cache and dev tools showing for each story
 */
export const decorators = [
    (story) => (
        <QueryClientProvider client={queryClient}>
            {story()}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    ),
    mswDecorator,
];
