import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header id="main-header">
                <div class="">
                    <h1 class="logo">BeautyDate</h1>
                    <nav>
                        <ul>
                            <div class="separator"></div>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/salons">Salons</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/login-register">Log in</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
} export default Header;