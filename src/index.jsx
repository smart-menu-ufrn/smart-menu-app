import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { RouterProvider } from 'react-router-dom';

import router from './router'
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ChakraProvider
            theme={theme}
            toastOptions={
                { defaultOptions: { position: 'bottom-right', variant: 'top-accent' } }
            }
        >
            <RouterProvider router={router}/>
        </ChakraProvider>
    </React.StrictMode>
);
