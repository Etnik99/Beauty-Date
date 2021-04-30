import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <h1 class="footer-title">BeautyDate</h1>
                </div>
                <div class="container flex justify-between">
                    <div>
                        <ul class="footer-nav">
                            <li>
                                <a class="link" href="">
                                    Hairdresser
                    </a>
                            </li>
                            <li>
                                <a class="link" href="">
                                    Hair removal
                    </a>
                            </li>
                            <li>
                                <a class="link" href="">
                                    Nails
                    </a>
                            </li>
                            <li>
                                <a class="link" href="">
                                    Men
                    </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span class="footer-nav-title">Bussiness Partner</span>
                        <ul class="footer-nav">
                            <li>
                                <a class="link" href="">
                                    Register your bussiness
                    </a>
                            </li>
                            <li>
                                <a class="link" href="">
                                    Partner help center
                    </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span class="footer-nav-title">Companies</span>
                        <ul class="footer-nav">
                            <li>
                                <a class="link" href="">
                                    About us
                    </a>
                            </li>
                            <li>
                                <a class="link" href="">
                                    jobs
                    </a>
                            </li>
                            <li>
                                <a class="link" href="">
                                    cookies settings
                    </a>
                            </li>
                            <li>
                                <a class="link" href="">
                                    legal
                    </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p>copyright Plan-A, 2020</p>
                </div>
            </footer>
        )
    }
} export default Footer;