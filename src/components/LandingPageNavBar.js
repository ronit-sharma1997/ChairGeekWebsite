import React from 'react'
import {Image} from 'rebass'
import Logo from '../chair_geek_logo.jpg'
import {UncontrolledTooltip} from "reactstrap";

const LandingPageNavBar = () =>
            <div>
                <nav className="navbar bg-primary sticky-top row-1"  style={{marginTop: "0"}}>
                    {/*<div className="col-1">*/}
                    {/*<a href="#" className="wbdv-field wbdv-hamburger float-left">*/}
                    {/*    <i className="fa fa-bars fa-2x"></i>*/}
                    {/*</a>*/}
                    {/*</div>*/}

                    <div className="col-1">
                        <h1 className="text-left">
			  <Image src={Logo}/>
                        </h1>
                    </div>
                </nav>
            </div>
export default LandingPageNavBar


const LibraryFloorNavBar = () =>
            <div>
                <nav className="navbar sticky-top navbar-expand-xl navbar-dark bg-primary">
                    {/*<div className="col-1">*/}
                    {/*<a href="#" className="wbdv-field wbdv-hamburger float-left">*/}
                    {/*    <i className="fa fa-bars fa-2x"></i>*/}
                    {/*</a>*/}
                    {/*</div>*/}

                    <div className="col-12">
                        <h1 className="text-center navbar-brand">
                            Chair Geek
                        </h1>
                    </div>
                </nav>
            </div>
