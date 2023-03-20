import {Link} from 'react-router-dom';

export const Navbar = () => {
return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/todo'>Todo</Link>
    </nav>
)
}