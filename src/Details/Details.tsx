import './details.scss'

interface Experience {
    id: number;
    year: number;
    description: string;
  }
  
  interface CVData {
    experience: Experience[];
    education: string[];
  }
  
  const cvData: CVData = {
    experience: [
      {id: 2, year: 2024, description: "Lorem ipsum"},
      {id: 1, year: 2020, description: "Dolor sit amet"},
    ],
    education: ["Sobotka", "noc krotka", "gwiazdy sie pala"]
  }

const Details = () => {
    return <section className='cv-details'>
    <h2>Experience</h2>
    <ul>
      {cvData.experience.map(experience => (
        <li key={experience.id}>
          <strong>{experience.year}</strong> - {experience.description}
        </li>
      ))}
    </ul>
    <h2>Education</h2>
    <ul>
      {cvData.education.map( (education, index) => (
        <li key={index}> {education} </li>
      ))}
    </ul>
  </section>
}

export {Details}