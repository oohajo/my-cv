import './personal.scss'

type Props = {
  data: CVPersonal;
}

const Personal = ({data: {photo, name, lastName, position}}: Props) => {
    return  <aside className='cv-personal'>
    <h2>Personal data</h2>
    {/* <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile photo `} />
    <p>{cvData.name} {cvData.lastName}</p>
    <small>{cvData.position}</small> */}
    <img className='cv-photo' src={photo} alt={`${name} ${lastName} profile photo `} />
    <p>{name} {lastName}</p>
    <small>{position}</small>
  </aside>
}

export {Personal}