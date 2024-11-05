<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href="images/favicon.ico">

    <link rel="stylesheet" href="css/style-min.css">

    <title>Mankal</title>
</head>

<body data-spy="scroll" data-target=".sideMenuNav" data-offset="400">
    <!-- Preloader -->
    <div class="preloader">
        <div class="dot-container">
            <div class="dot dot-1"></div>
            <div class="dot dot-2"></div>
            <div class="dot dot-3"></div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
                </filter>
            </defs>
        </svg>
    </div>

    <!-- Header -->
    <header>
        <div class="innerHeader">
            <div class="">
                <div class="row no-gutters">
                    <div class="col-4 col-lg-4 d-flex align-items-center">
                        <a href="javascript:void(0)" class="sidemenuBtn link" id="sidemenu_toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                    <div class="col-4 col-lg-4 d-flex justify-content-center">
                        <a class="navbar-brand link" href="./">
                            <img src="images/logo-b.png" alt="logo">
                        </a>
                    </div>
                    <div class="col-4 col-lg-4 d-flex justify-content-end align-items-center">
                        <a href="#contactSec" class="btn btnMain rounded-pill">Get a Quote</a>
                    </div>
                </div>
            </div>
        </div>

        <!--Side Nav-->
        <div class="sideMenu hidden sideMenuOpacity">
            <div class="inner-wrapper">
                <span class="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                <div class="container">
                    <div class="row w-100 sideMenu-inner-content">
                        <div class="col-12 col-lg-8 offset-lg-2 nav-icon">
                            <nav class="navbar navbar-nav">
                                <div class="side-nav-menu">
                                    <a class="nav-link home active anim-text white" href="#">Home</a>
                                    <a class="nav-link scroll anim-text white" href="#aboutSec">About</a>
                                    <a class="nav-link scroll anim-text white" href="#contactSec">Contact
                                        <span></span><span></span><span></span></a>
                                    <span class="menuLine link"><i aria-hidden="true">/</i></span>
                                </div>
                            </nav>
                        </div>
                        <div class="sideMenu-footer">
                            <div class="social-icons">
                                <span><a href="#" class="fb"><i class="fab fa-facebook-f"></i></a></span>
                                <span><a href="#" class="twit"><i class="fab fa-twitter"></i></a></span>
                                <span><a href="#" class="in"><i class="fab fa-linkedin-in"></i></a></span>
                                <span><a href="#" class="insta"><i class="fab fa-instagram"></i></a></span>
                            </div>
                            <p class="copywrite text-right">&copy; 2024 Mankal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a id="close_side_menu" href="javascript:void(0);"></a>
    </header>