import React from 'react'
import {Heading, Image, Flex} from 'rebass'
import {
    Hero, CallToAction, ScrollDownIndicator, Section, Feature
} from 'react-landing-page'
import Logo from '../chair_geek_logo.jpg'
import LibraryPic from '../petracca_photo_for_news.jpg'
import {Link} from 'react-router-dom'

//header components
import ProfilePageHeader from "/ProfilePageHeader.js";

const ChairGeekLoadingPage = () =>
    <div>
        <Hero
            color="black"
            bg="white"
            backgroundImage={LibraryPic}
        >
            <Image src={Logo} style={{"width": "20%"}}/>
            <Section
                heading='ChairGeek'
                subhead='The Future of Library Seat Detection'
                width={1}
            >

            </Section>
            <ScrollDownIndicator/>
        </Hero>

        <br/>
        <Heading textAlign="center">Key Features</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
            <Feature icon="⌛" description="Real Time Seat Detection">
                Live Detection
            </Feature>
            <Feature icon="📚" description="Catered to Snell Library">
                For Husky Nation
            </Feature>
            <Feature icon="📡" description="Constant Data Monitoring">
                End to End Data
            </Feature>
        </Flex>


        <Heading textAlign="center">Floor Breakdown</Heading>
        <br/>
        <Flex flexWrap="wrap" justifyContent="center">
            <div className="ml-4 mr-4">
        <CallToAction><Link to={`/Floor/1`}>
            Floor 1</Link></CallToAction>
            </div>
            <div className="mr-4">
                <CallToAction><Link to={`/Floor/2`}>
                    Floor 2</Link></CallToAction>
            </div>
            <div className="mr-4">
                <CallToAction><Link to={`/Floor/3`}>
                    Floor 3</Link></CallToAction>
            </div>
            <div className="mr-4">
                <CallToAction><Link to={`/Floor/4`}>
                    Floor 4</Link></CallToAction>
            </div>
        </Flex>
    <br/>

    </div>
export default ChairGeekLoadingPage
