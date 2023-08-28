import { Fragment } from 'react';
import './Header.css';
// import 'boxicons';
import headerImg from "../../../assets/meals.jpg";
import CartButton from '../CartButton/CartButton';

function HeaderPage() {

    return (
        <Fragment>
            <header className="head">
                <a href="/" className="logo">Pi<span style={{ color: 'red' }}>ra</span>te Foods</a>

                {/* <box-icon className='hamburger' name='spreadsheet' ></box-icon> */}

                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="#about" className="about">About</a>
                    <a href="#education" className="education">Education</a>
                    <a href="#skills" className="skills">Skills</a>
                    <a href="#contact" className="contact">Contact</a>
                </nav>
                <CartButton />
            </header>
            <div className="main-image">
                <img src={headerImg} alt="Food's HomePage" />
            </div>
        </Fragment>
    );
};

export default HeaderPage;