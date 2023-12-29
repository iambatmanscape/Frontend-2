import React, { useContext, useState,useEffect } from 'react';
import { InfoContext } from './App';
import placeholderImage from './assets/img_avatar2.jpg'
import Card from 'react-bootstrap/Card'
export default function Aside() {
    const { info, setInfo } = useContext(InfoContext);
    const [avatarSrc,setAvatarSrc] = useState(null);

    async function fetchAvatar() {
      try {
        await fetch(`${info.avatar}`);
        setAvatarSrc(info.avatar)
      } catch(err) {
        console.log(err)
        setAvatarSrc(placeholderImage)
      }
    }

    useEffect(()=>{
       fetchAvatar()
    },[info])
   
    return (<aside> 
    {(info)?<div className='has-info'>
    	 <div className='img-holder'>
          <img src={avatarSrc} /> <
        /div>
        <div className='text-center'>
            <h3>{info.profile.firstName} {info.profile.lastName}</h3>
            <p className='text-muted'>{info.jobTitle}</p>
            <p>{info.Bio}</p>
            
            <p>{info.profile.email}</p>
            <p>{`Joined On: ${(info.createdAt).split('T')[0]}`}</p>
          </div>


    </div>:<div className='no-info'>
		<h3 className='text-muted'>Nothing to Show...</h3>
		<h5 className='text-muted'>Click on a card...</h5>
		</div>

    }
	</aside>)
}