import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Productos } from '../components/Productos';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Productos />} />
                </Routes>
            </div>

        </>
    )
}
