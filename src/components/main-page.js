import React from "react";
import Footer from "./footer/footer";
import Main from "./main/main";
import Nav from "./nav/nav";
import Post from "./post/post";
import Title from "./title/title";
import LoginPage from "./login/login-page";
import './main-page.css'
import RegistrationPage from "./registration/registration-page";
import FilmsPage from "./films/films-page";



const MainPage = ({ home, isLogin, registration}) => {



 

    let main = 'block';
    let login = 'hide';
    let reg = 'hide';
    if(home) {
        main = 'block';
        login = 'hide';
        reg = 'hide';
    }
    if (isLogin) {
        login = 'block';
        main = 'hide';
        reg = 'hide';
    }if(registration){
        main = 'hide';
        login = 'hide';
        reg = 'block';
    }
    return (
        <div className="container">
            <div className={main} >
                <Nav/>
                <Title/>
                <Post/>
                <Main/>
                <Footer/>
                <FilmsPage/>
            </div>
            <div className={login}>
                <LoginPage/>
            </div>
            <div className={reg}>
                <RegistrationPage />
            </div>
        </div>
    );
};
export default MainPage;













