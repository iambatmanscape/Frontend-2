import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard'
import Navigation from './Navbar';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import "./App.css"

export default function App() {
    const [profiles, setProfiles] = useState(null)
    const [canShow, setCanShow] = useState(false)
    async function getProfiles() {
        try {
            const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
            const parsedData = await response.json()
            setProfiles(parsedData)
            setCanShow(true)

        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getProfiles();
    }, [])
    return ( < >
        <Navigation/> <
        Container >
        <Row>
       
              {(canShow)?profiles.map((profile,index)=>  <Col  key={index+1}  md={3}><ProfileCard id={index+1} username={profile.profile.username}/></Col>):<h3>Nothing to Show here</h3>}
            
            </Row> <
        /Container> < / >
    )
}