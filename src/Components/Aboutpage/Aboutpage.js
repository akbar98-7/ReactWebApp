import React from 'react'
import './Aboutpage.css';


export const Aboutpage = () => {
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

    <h1 class="thin">About Us</h1>
    <br></br>

    <p class="center1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <br></br>

    <div class="container-features">
    <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-6">
        <img src="./Images/team3.jpg" className='img-fluid' alt="Teampics" width={400} />
        <h2>Akbar Mirza</h2>  
        <p>CEO & Founder</p>

        <input type={"submit"} className='btn btn-secondary btn-block' value="contact" name=''></input>

        
        </div>

        <div class="col-lg-4 col-md-4 col-sm-6">
        <img src="./Images/team2.jpg" className='img-fluid' alt="Teampics" width={400} />
        <h2>Ali Ahmed</h2>  
        <p>COO</p>

        <input type={"submit"} className='btn btn-secondary btn-block' value="contact" name=''></input>

        
        </div>

        <div class="col-lg-4 col-md-4 col-sm-6">
        <img src="./Images/team4.jpg" className='img-fluid' alt="Teampics" width={400} />
        <h2>Shahid Khan</h2>  
        <p>Designer</p>

        <input type={"submit"} className='btn btn-secondary btn-block' value="contact" name=''></input>

        
        </div>






        


        </div>

    </div>

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
