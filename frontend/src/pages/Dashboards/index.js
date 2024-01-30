import { Link } from 'react-router-dom';

function Dashboards(){
    return(
        <div>
            <h1>Bem vindo a página Dashboards</h1>
            <br/>


            <Link to='/'>Voltar pra Home</Link>
        </div>
    );
}

export default Dashboards;