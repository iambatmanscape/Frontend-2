import React, { useState, useEffect, createContext } from 'react';
import ProfileCard from './ProfileCard';
import Navigation from './Navbar';
import Loader from './Loader';
import Container from 'react-bootstrap/Container';
import Aside from './Aside';
import Error from './Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
export const InfoContext = createContext(null)
export default function App() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState(null);

    async function getProfiles() {
        try {
            const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
            if (!response.ok) {
                throw new Error('Failed to fetch profiles');
            }
            const parsedData = await response.json();
            setProfiles(parsedData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProfiles();
    }, []);

    return ( <
        >
        <InfoContext.Provider value={{info,setInfo}}>
        <
        Aside / >
         <
        Navigation / > <
        Container > {
            loading ? (
                <Loader />
            ) : error ? (
                <div>Error: {error}</div>
            ) : profiles.length > 0 ? (
                profiles.map((profile, index) => (
                    <ProfileCard
              key={index + 1}
              id={profile.id}
              username={profile.profile.username}
              ProfileImg={profile.avatar}
              job={profile.jobTitle}
              bio={profile.Bio}
            />
                ))
            ) : (
                <Error/>
            )
        } <
        /Container>
        </InfoContext.Provider> <
        / >
    );
}