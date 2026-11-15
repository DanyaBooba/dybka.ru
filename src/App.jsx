import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppTheme from './providers/app-theme';
import routes from "./routes/main";
import PageIndex from './pages/page-index';

export default function App() {
    return (
        <AppTheme>
            <BrowserRouter>
                <Routes>
                    {routes}
                    <Route path="*" element={<PageIndex />} />
                </Routes>
            </BrowserRouter>
        </AppTheme>
    )
}
