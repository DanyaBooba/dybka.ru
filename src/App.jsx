import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppTheme from './providers/app-theme';
import routes from "./routes/main";
import PageNotFound from './pages/page-not-found';

export default function App() {
    return (
        <AppTheme>
            <BrowserRouter>
                <Routes>
                    {routes}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </AppTheme>
    )
}
