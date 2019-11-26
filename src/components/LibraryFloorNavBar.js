import React from 'react'
import Logo from '../chair_geek_logo.jpg'
import {Image, Flex} from 'rebass'
import {CallToAction, Section} from 'react-landing-page'
import {Link} from 'react-router-dom'

const LibraryFloorNavBar = () =>
            <div>
                <nav className="navbar sticky-top navbar-expand-xl navbar-dark bg-transparent">
                    <div className="col-12">
			<Link to={'/'}>
			  <Image src={Logo} style={{"width":"10%", "float":"left"}}/>
			</Link>
			<div style={{"float":"center"}}>
			    <Link exact to={'/Floor/1'}>
			      <h8 className="text-danger navbar-brand text-center" style={{"float":"center", "width":"15%"}}> 
				Floor 1
			      </h8>
			     </Link>
			    <Link to={'/Floor/2'}>
			      <h8 className="text-danger navbar-brand text-center" style={{"float":"center", "width":"15%"}}>
				Floor 2
			      </h8>
			    </Link>
			    <Link to={'/Floor/3'}>
			      <h8 className="text-danger navbar-brand text-center" style={{"float":"center", "width":"15%"}}>
				Floor 3
			      </h8>
			    </Link>
			    <Link to={'/Floor/4'}>
			      <h8 className="text-danger navbar-brand text-center" style={{"float":"center", "width":"15%"}}>
				Floor 4
			      </h8>
			    </Link>
			  <h1 className="text-danger navbar-brand text-right" style={{"float":"right"}}>
			    Snell Library<br/>@ Northeastern University		
			  </h1>
			</div>
                    </div>
                </nav>
            </div>
export default LibraryFloorNavBar
