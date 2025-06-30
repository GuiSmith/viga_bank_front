import { NavLink } from 'react-router-dom';

const BarraDeNavegacaoItem = ({ to, children }) => (
    <li className='nav-item'>
        <NavLink
            to={to}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
            {children}
        </NavLink>
    </li>
);

export default BarraDeNavegacaoItem;