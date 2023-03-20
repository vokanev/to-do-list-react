import { useNavigate } from 'react-router-dom';

export const About = () => {
    let navigate = useNavigate();
    return (
        <div>
            About Page
            <button onClick={() => navigate('/')}>Go home</button>
        </div>
        );
}