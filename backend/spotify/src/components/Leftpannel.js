import React from 'react';
import './CSS/Leftpannel.css'
import { Link } from 'react-router-dom'

const Leftpannel = (props) => {
    setTimeout(()=>{
        let w=document.getElementsByClassName('Link')
        for(let item of w){
                item.className='Link';
            }
        if(props.state!='none'){
        let active=document.getElementById(props.state);
        active.className='Link active';
        }
    },10)
    return (
        <div className='leftpannel'>
            <input type="button" value="..." id='dot' />
            <div className='leftdx'>
                <div className='left1'>
                    <ul type='none'>
                        <Link className='Link' to='/' id='home'><li><i className="bi bi-house-door-fill"><span> Home</span></i></li></Link>
                        <Link className='Link' to='/search' id='search'><li><i className="bi bi-search" ><span> Search</span></i></li></Link>
                        <Link className='Link' to='/library' id='library'><li><i className="bi bi-collection" ><span> Your Library</span></i></li></Link>
                    </ul>
                </div>
                <div className='left2'>
                    <ul type='none' className='left2a'>
                        <li><i className="bi bi-plus"></i></li>
                        <li><i className="bi bi-heart-fill"></i></li>
                    </ul>
                    <ul type='none' className='left2b'>
                        <li>Create Playlist</li>
                        <li>Liked Songs</li>
                    </ul>
                </div>
                <br />
                <hr className='hr' />
                <ul type='none'>
                    <li></li>
                </ul>
            </div></div>
    );
}

export default Leftpannel;
