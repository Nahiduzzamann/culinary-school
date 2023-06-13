import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='bg-gradient-to-r from-blue-900 to-purple-600'> 
          <div className='max-w-screen-xl mx-auto '>
            <RouterProvider router={router} />
          </div>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
