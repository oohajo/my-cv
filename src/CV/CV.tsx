import { Details } from '../Details/Details';
import { Header } from '../Header/Header';
import { Personal } from '../Personal/Personal';
import './cv.scss'



const CV = () => {
    return <main className='cv-main'>
        <Header />
        <Personal />
        <Details />
    </main>
}

export {CV};