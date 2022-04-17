import React from 'react'
import './Homepage.css';




export const Homepage = () => {
    return (

        <div>

            <nav className='navbar navbar-expand-md'>
                <a className='navbar-brand' href='#'><h3>BR Architects</h3></a>
                <button className='navbar-toggler navbar-dark' type='button' data-toggle="collapse" data-target="#main-navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div class="collapse navbar-collapse" id="main-navigation">
                    <ul class="navbar-nav">
                        <li class="nav-item">

                            <a class="nav-link" href="Homepage"><h4>Home</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Aboutpage"><h4>About</h4></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className='page-header header container-fluid'>
                <div className='overlay'></div>
                <div className="description">
                    <h1>BR Architects</h1>
                </div>

            </header>

            <br></br>

            <footer className='page-footer'>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12'>

                    <h6 className='text-uppercase font-weight-bold'>Additional Inforation</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis.</p>

                </div>

                <div className='col-lg-4 col-md-4 col-sm-12'>

                    <h6 className='text-uppercase font-weight-bold'>Contact</h6>
                    <p>1640 Riverside Drive, Hill Valley, California
                    <br/>info@mywebsite.com
                    <br/>+ 01 234 567 88
                    <br/>+ 01 234 567 89</p>

                </div>

                
                </div>   
            </div>

            <div className='footer-copyright text-center'>© 2022 Copyright: MyWebsite.com</div>
            </footer>

           

        </div>


















    );
};