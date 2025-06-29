import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';


function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          {/* Usar Link com a prop 'to' para navegação */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/heros">Heros</Link>
        </li>
        <li>
          <Link to="/equips">Equipamentos</Link>
        </li>
        <li>
          <Link to="/runes">Runas</Link>
        </li>
        <li>
          <Link to="/artifacts">Artefatos</Link>
        </li>
        <li>
          <Link to="/events">Eventos</Link>
        </li>
        <li>
          <Link to="/aboutus">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;