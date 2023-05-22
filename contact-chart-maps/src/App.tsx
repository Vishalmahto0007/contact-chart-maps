import React from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';
import Contact from './pages/Contact';
import ChartAndMaps from './pages/ChartAndMaps';
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const queryClient = new QueryClient()

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<Contact />} />
                    <Route path="/chart-and-maps" element={<ChartAndMaps />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
