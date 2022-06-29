import { Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui';

import { DcPage, HeroPage, MarvelPage, Search } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />

                    <Route path='search' element={<Search />} />

                    {/* En este caso, hero-id es un argumento enviado desde el url */}
                    <Route path='hero/:id' element={<HeroPage />} />

                    <Route path='/' element={<Navigate to='/marvel' />} />
                </Routes>
            </div>
        </>
    );
};
