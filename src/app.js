import React, {Component} from "react";
import './app.css';
import MainPage from "./components/main-page";
import title from "./components/title/title";


export default class App extends Component {



    state = {
        isLogin: false,
        registration: false,
        home: false



    };

    Registration = ({ registration }) => {
        
        this.setState({
            registration: !registration
        })
    }

    SighUp = ({ isLogin }) => {
        this.setState({
            isLogin: !isLogin
        })
    }

    Home = ({ home }) => {
        this.setState({
            home: !home
        })
    }

    render() {

     const { isLogin, registration, home } = this.state;
        return (
            <div>
                <div className="container" to='link'>
                    <header className="blog-header py-3">
                        <ul className="row flex-nowrap justify-content-between align-items-center">
                            <a className="btn btn-sm btn-outline-secondary button" href="/#"
                               onClick={ this.Registration }>Subscribe</a>

                                <a className="blog-header-logo text-dark"
                                   href="/"
                                   onClick={this.Home}
                                >Home</a>

                            <li className="col-4 d-flex justify-content-end align-items-center">
                                <a className="text-muted" href="/#" aria-label="Search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                         stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2"
                                         className="mx-3" role="img" viewBox="0 0 24 24" focusable="false">
                                        <title>Search</title>
                                        <circle cx="10.5" cy="10.5" r="7.5"/>
                                        <path d="M21 21l-5.2-5.2"/>
                                    </svg>
                                </a>
                                <a className="btn btn-sm btn-outline-secondary button" href="/#"
                                   onClick={ this.SighUp }>Log In</a>
                            </li>
                        </ul>
                    </header>
                </div>
                <MainPage home={ home } isLogin={ isLogin } registration={ registration }/>
            </div>
        );
    }
};




