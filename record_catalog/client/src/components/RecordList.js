import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom'

const RecordList = (props) => {
    const {record, setRecord} = props
    const [ activeRecord, setActiveRecord ] = useState(0)
    const [list, setList ] = useState([])
    const {id} = useParams()
    const [ playCount, setPlayCount ] = useState('')
    const randomRecord = (e) =>{
        const len = list.length
        setActiveRecord(Math.floor(Math.random() * len))
    }
    const playRecord = (e) => {
        e.preventDefault()
        setPlayCount(list[activeRecord].playCount++)
        console.log("the play count for", list[activeRecord].albumName, "is now:", list[activeRecord].playCount)
    }
    const savePlay = (e) => {
        console.log("savePlay started...")
        e.preventDefault()
        axios.put(`http://localhost:8000/api/playRecord/${list[activeRecord]._id}`, {
            playCount
        })
            .then((res)=>{
                debugger
                setRecord({...record, record: res.data})
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    const doBoth = (e) => {
        playRecord(e)
        savePlay(e)
    }
    useEffect(() =>{
        axios.get('http://localhost:8000/api/allRecords')
        .then((res)=>{
            console.log(res);
            setList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <div className="p-3 mb-2 bg-dark text-white" style={{height:"300%", width:"200vh"}}>
            <h1 className="text-warning">Record List</h1>
            { activeRecord ? 
                <div className="col col-4 mx-auto">
                    <img className="col-10" alt= "" src={list[activeRecord].albumArt}></img>
                    <div className="my-4">
                        <Link to={`/oneRecord/${list[activeRecord]._id}`}>{list[activeRecord].albumName}</Link>
                        <div>
                            <Link to={`/oneArtist/${list[activeRecord].artist}`}>{list[activeRecord].artist}</Link>
                        </div>
                    { list[activeRecord] ? 
                        <div className="col col-4 mx-auto" >
                            <label className='form-label'>Play Count: {list[activeRecord].playCount}</label>
                            <button className="btn btn-success btn-lg"  onClick={doBoth}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg>
                                    {/* <form onSubmit={savePlay}> */}
                                        <span className="glyphicon glyphicon-play"></span>
                                        {/* <input value={list[activeRecord].playCount} type="hidden" onChange={(e) => setPlayCount(e.target.value)}  onClick={playRecord} /> */}
                                            {/* <input type="submit" /> */}
                                    {/* </form> */}
                            </button>
                        </div>
                    :null}
                    </div>
                </div>
            :null }
            <button className="btn btn-info text-white" onClick={randomRecord} >Pick a Random Record!</button>
            <div className="d-flex flex-wrap">              
                {
                    list.map((record, index)=> {
                        return(
                            <div className="col col-6 mt-3 px-2" key={index}>
                                <img src={record.albumArt} alt="" className="col-4"></img>
                                {/* <p><Link to={`/oneRecord/${record._id}`}>Emergency link</Link></p> */}
                                <div className="col col-4 mt-3 mx-center">
                                    <Link to={`/oneRecord/${record._id}`}>{record.albumName}</Link>
                                    <div><Link to={`/oneArtist/${record.artist}`}>{record.artist}</Link></div>
                                    <div><Link to={`/oneGenre/${record.genre}`}>{record.genre}</Link></div>
                                    <div><Link to={`/oneYear/${record.releaseYear}`}>{record.releaseYear}</Link></div>
                                </div>
                            </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
export default RecordList;