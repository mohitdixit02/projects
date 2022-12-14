import React, { useEffect } from 'react'
import './CSS/Open.css'
import conv from './service component/time_conv'

function OpenSonglist(props) {
    const song = props.songlist;
    const trackfn = props.trackfn;
    const tracklist = props.tracklist;
    const ctrack = props.ctrack;
    function playsongtd(e) {
        if (tracklist != song) {
            if (props.type == 'music') {
                trackfn([song]);
            }
            else {
                trackfn(song);
            }
        }
        let temp = e.target.parentElement.id;
        let fn = props.actvfn;
        fn(temp);
    }

    //Color change of active song
    useEffect(() => {
        //changing layout
        setTimeout(()=>{
            try{
            let beginrow = document.getElementsByClassName('index_class');
            for (let k of beginrow) {
                k.className='songtd index_class';
            }
            let begin = document.getElementsByClassName('span_class');
            for (let i of begin) {
               i.className='span_class';
            }
            let index = document.getElementById(`${ctrack.id} index`);
            let name = document.getElementById(`${ctrack.id} name`);
            index.className='songtd index_class activenow';
            name.className='span_class activenow_class';
        }catch(error){}
        },100)
        
    }, [ctrack]);

    if (props.type == 'artist') {
        return (
            <div className="song_list">
                <table className='listtable' cellSpacing={0}>
                    <thead>
                        <tr>
                            <th style={{ 'width': '5%', 'textAlign': 'center' }}>#</th>
                            <th style={{ 'width': '65%' }}>TITLE</th>
                            <th style={{ 'width': '50%' }}>PLAYS</th>
                            <th style={{ 'width': '30%', 'textAlign': 'right', 'paddingRight': '15px' }}><i className="bi bi-clock"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan={5}><hr className='tabletopline' /></td></tr>
                        {
                            song.map((element, index) => {
                                let plays = element.plays
                                plays = plays.toLocaleString();
                                let duration=conv(element.duration);
                                return (
                                    <tr id={element.id} key={index} className='songlist_active' onClick={playsongtd}>
                                        <td style={{ 'textAlign': 'center', 'borderTopLeftRadius': '5px', 'borderBottomLeftRadius': '5px' }} className='songtd index_class' id={`${element.id} index`}>{index + 1}</td>
                                        <td id={element.id} style={{ 'display': 'flex' }} className='songtd'>
                                            <img src={`${element.song_img}`} className='songtd_img' />
                                            <div id={element.id} className='songtd_div'>
                                                <span className='span_class' id={`${element.id} name`}>{element.name}</span>
                                                {element.artist}
                                            </div>
                                        </td>
                                        <td className='songtd'>{plays}</td>
                                        <td className='songtd' style={{ 'borderBottomRightRadius': '5px', 'borderTopRightRadius': '5px' }}><div style={{ 'display': 'flex', 'columnGap': '30px', 'paddingRight': '5px' }}><i className="bi bi-heart"></i><span>{duration}</span></div></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    else if (props.type == 'music') {
        let song = props.songlist
        let plays = song.plays.toLocaleString();
        let duration=conv(song.duration);
        return (
            <div className="song_list">
                <table className='listtable' cellSpacing={0}>
                    <thead>
                        <tr>
                            <th style={{ 'width': '5%', 'textAlign': 'center' }}>#</th>
                            <th style={{ 'width': '65%' }}>TITLE</th>
                            <th style={{ 'width': '50%' }}>PLAYS</th>
                            <th style={{ 'width': '30%', 'textAlign': 'right', 'paddingRight': '15px' }}><i className="bi bi-clock"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan={5}><hr className='tabletopline' /></td></tr>
                        <tr className='songlist2_active' id={song.id} onClick={playsongtd}>
                            <td style={{ 'textAlign': 'center', 'borderTopLeftRadius': '5px', 'borderBottomLeftRadius': '5px' }} className='songtd index_class' id={`${song.id} index`}>1</td>
                            <td id={song.id} style={{ 'display': 'flex' }} className='songtd'>
                                <div id={song.id} className='songtd_div'>
                                    <span className='span_class' id={`${song.id} name`}>{song.name}</span>
                                    {song.artist}
                                </div>
                            </td>
                            <td className='songtd'>{plays}</td>
                            <td className='songtd' style={{ 'borderBottomRightRadius': '5px', 'borderTopRightRadius': '5px' }}><div style={{ 'display': 'flex', 'columnGap': '30px', 'paddingRight': '5px' }}><i className="bi bi-heart"></i><span>{duration}</span></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    else if (props.type == 'album') {
        let song = props.songlist
        return (
            <div className="song_list">
                <table className='listtable' cellSpacing={0}>
                    <thead>
                        <tr>
                            <th style={{ 'width': '5%', 'textAlign': 'center' }}>#</th>
                            <th style={{ 'width': '65%' }}>TITLE</th>
                            <th style={{ 'width': '50%' }}>PLAYS</th>
                            <th style={{ 'width': '30%', 'textAlign': 'right', 'paddingRight': '15px' }}><i className="bi bi-clock"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan={5}><hr className='tabletopline' /></td></tr>
                        {
                            song.map((element, index) => {
                                let plays = element.plays
                                plays = plays.toLocaleString();
                                let duration=conv(element.duration);
                                return (
                                    <tr key={index} id={element.id} className='songlist2_active' onClick={playsongtd}>
                                        <td style={{ 'textAlign': 'center', 'borderTopLeftRadius': '5px', 'borderBottomLeftRadius': '5px' }} id={`${element.id} index`} className='songtd index_class'>{index + 1}</td>
                                        <td id={element.id} style={{ 'display': 'flex' }} className='songtd'>
                                            <img src={`${element.song_img}`} className='songtd_img' />
                                            <div id={element.id} className='songtd_div'>
                                                <span className='span_class' id={`${element.id} name`}>{element.name}</span>
                                                {element.artist}
                                            </div>
                                        </td>
                                        <td className='songtd'>{plays}</td>
                                        <td className='songtd' style={{ 'borderBottomRightRadius': '5px', 'borderTopRightRadius': '5px' }}><div style={{ 'display': 'flex', 'columnGap': '30px', 'paddingRight': '5px' }}><i className="bi bi-heart"></i><span>{duration}</span></div></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OpenSonglist
