import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileImg from './assets/img_avatar2.jpg'

function ProfileCard({ username, id }) {
    async function getProfile() {
        const url = `https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`
        try {
            console.log('loading...')
            const response = await fetch(url);
            const data = await response.json()
            console.log(data)


        } catch (err) {
            console.log(err.message)

        }
    }
    return (
        <Card style={{marginTop:'1rem',marginBottom : '1rem',cursor:'pointer'}} onClick={getProfile}>
        <Card.Img variant="top" src={ProfileImg} />
      <Card.Body>
        <Card.Title>{`${username}`}</Card.Title>
      </Card.Body>
    </Card>
    );
}

export default ProfileCard;