import React from 'react'
import {
    Heading, Image, Flex, Box, Absolute, NavLink
} from 'rebass'
import {
   Hero, CallToAction, ScrollDownIndicator, Section, Feature
} from 'react-landing-page'
import Logo from '../chair_geek_logo.jpg'
import LibraryPic from '../petracca_photo_for_news.jpg'
import {Link} from 'react-router-dom'
import {
	Button
} from "reactstrap";
import ChairGeekService from "../services/ChairGeekService";

const chairGeekService = ChairGeekService.getInstance();

export default class ChairGeekLoadingPage extends React.Component {
	constructor(props) {
		super(props)
		const thirdFloorState = {"floorId": -1, "capacity": 0, "currentCount": 0}
		this.state = {
			thirdFloorState: thirdFloorState
		}

		chairGeekService.findFloorDetail(3, this.setFloorState)
	}

	setFloorState = floor => {
		console.log(floor)
		this.setState({
			thirdFloorState: floor
		})
	}

	render() {
		return(
		<div>
			<Hero
				color="black"
				bg="white"
				backgroundImage={LibraryPic}
			>
				<Section
					width={1}
				>
					<Image src={Logo} style={{"width": "30%"}}/>
					<br/>
					<Flex flexWrap="wrap">
						<h2 className="text-danger"> Snell Library @ Northeastern University </h2>
					</Flex>
					<br/>
					<Flex flexWrap="wrap" justifyContent="center">
						<CallToAction bg="default">
							<Link to={'/Floor/1'}>
								<Button
									className="btn-round"
									color="danger"
									size="lg"
									outline type="button">
									<h3> Floor 1 </h3>
									<h6> XX% Full </h6>
								</Button>
							</Link>
						</CallToAction>
						<CallToAction bg="default">
							<Link to={'/Floor/2'}>
								<Button
									className="btn-round"
									color="danger"
									size="lg"
									outline type="button">
									<h3> Floor 2 </h3>
									<h6> XX% Full </h6>
								</Button>
							</Link>
						</CallToAction>
						<CallToAction bg="default">
							<Link to={'/Floor/3'}>
								<Button
									className="btn-round"
									color="danger"
									size="lg"
									outline type="button">
									<h3> Floor 3 </h3>
									<h6> {this.state.thirdFloorState.numPeople/this.state.thirdFloorState.floorCapacity * 100}% Full </h6>
								</Button>
							</Link>
						</CallToAction>
						<CallToAction bg="default">
							<Link to={'/Floor/4'}>
								<Button
									className="btn-round"
									color="danger"
									size="lg"
									outline type="button">
									<h3> Floor 4 </h3>
									<h6> XX% Full </h6>
								</Button>
							</Link>
						</CallToAction>
					</Flex>
				</Section>
				<ScrollDownIndicator/>
			</Hero>

			<br/>
			<Heading textAlign="center">What is ChairGeek?</Heading>
			<Flex flexWrap="wrap" justifyContent="center">
				<Feature icon="⌛" description="Real Time Infrared Detection">
					Live Detection
				</Feature>
				<Feature icon="📚" description="Catered to Snell Library">
					For Husky Nation
				</Feature>
				<Feature icon="📡" description="Constant Data Monitoring">
					End to End Data
				</Feature>
			</Flex>

			<br/>
		</div>
		)
	}
}

