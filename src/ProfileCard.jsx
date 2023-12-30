import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeholderImage from './assets/img_avatar2.jpg';
import { InfoContext } from './App';

function ProfileCard({ username, id, ProfileImg, job, bio }) {
    const [imageSrc, setImageSrc] = useState(ProfileImg);
    const { info, setInfo } = useContext(InfoContext);

    const handleImageError = () => {
        setImageSrc(placeholderImage);
    };
    const styles = {
        marginTop: '1rem',
        marginBottom: '1rem',
        cursor: 'pointer',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
    };
    async function log() {
        const response = await fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
        const responseData = await response.json();
        setInfo(responseData);
    }

    return (
            <Card style={styles} className='w-100' onClick={log}>
        <div className='img-holder'>
          <img src={imageSrc} onError={handleImageError} style={{objectFit:'cover'}}/> <
        /div> <
        Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Subtitle className='text-muted'>{job}</Card.Subtitle>
        <Card.Text>{bio}</Card.Text>
         <
        /Card.Body> <
        /Card>
    );
}

export default ProfileCard;