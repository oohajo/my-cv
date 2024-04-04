import { Details } from '../Details/Details';
import { Header } from '../Header/Header';
import { Personal } from '../Personal/Personal';
import { CVData } from '../../types.tsx';
import './cv.scss'



const CV = () => {
    const cvData: CVData = {
        personal: {
        photo: "https://placehold.co/200x200?text=DK",
        name: "Diana",
        lastName: "K.",
        position: "Doctor of Sciences in Physics",
      },
    details: {
        experience: [
          {id: 2, year: 2024, description: "Lorem ipsum"},
          {id: 1, year: 2020, description: "Dolor sit amet"},
        ],
      education: ["Sobotka", "noc krotka", "gwiazdy sie pala"]
    }
      }

    return <main className='cv-main'>
      <Header data={cvData.personal } />
        <Personal data={cvData.personal }/>
        <Details data={cvData.details }/>
    </main>
}

export {CV};