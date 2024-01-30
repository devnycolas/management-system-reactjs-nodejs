import { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import LogoImg from '../../assets/imgs/logoipsum.svg';

class Header extends Component{
    state = { clicked: false};
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }

    render() {
        return(
            <>
                <header>
                    <nav>
                        <Link to='/'>
                            <img className='logoButton' src={LogoImg} />
                        </Link>

                        <div>
                            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                                <li>
                                    <a id='homeButton' href='/'>Home</a>
                                </li>
                                <li>
                                    <a className='dashButton' href='/dashboards'>Meus Dashboards</a>
                                </li>
                            </ul>
                        </div>

                        <div id='mobile' onClick={this.handleClick}>
                            <i
                                id='bar'
                                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                            ></i>

                        </div>
                    </nav>
                </header>
            </>
        );
    }
}

export default Header;