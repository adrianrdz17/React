import { HeroList } from '../components';

export const MarvelPage = () => {
    return (
        <div className='my-4'>
            <h1>Marvel Comics</h1>
            <hr />

            <HeroList publisher='Marvel Comics' />
        </div>
    );
};
