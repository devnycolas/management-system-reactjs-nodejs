import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Bem vindo a página HOME</h1>
            <br/>

            <Link to='/dashboards'>Dashboards</Link>
        </div>
    );
}

export default Home;