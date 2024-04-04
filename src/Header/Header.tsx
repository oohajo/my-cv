import './header.scss'
import { CVPersonal } from '../../types'}

 
type Props = {
  data: CVPersonal;
}

const Header = ({data: {name, lastName}}: Props) => {
    return <header className='cv-header'>
      {/* <h1>CV {data.name} {data.lastName}</h1> */}
      <h1>CV {name} {lastName}</h1>
  </header>
}

export {Header};