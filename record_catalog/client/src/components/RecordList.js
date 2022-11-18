import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom'

const RecordList = (props) => {
    const {record, setRecord} = props
    const [ activeRecord, setActiveRecord ] = useState(0)
    const [ albumArt, setAlbumArt ] = useState('')
    const [ albumName, setAlbumName ] = useState('')
    const [ artist, setArtist ] = useState('')
    const [ rating, setRating ] = useState('')
    const [ genre, setGenre ] = useState('')
    const [ releaseYear, setReleaseYear ] = useState('')
    const [ position, setPosition ] = useState('')
    const [ playCount, setPlayCount ] = useState('')
    const [list, setList ] = useState([])
    // const {id} = useParams()

    useEffect(() =>{
        // get all records
        axios.get('http://localhost:8000/api/allRecords')
        .then((res)=>{
            // log results
            console.log(res);
            // set list to the results
            setList(res.data);
            // sort the results by position
            const sortedList = res.data.sort((a,b) => a.position - b.position)
            // set list to sortedList
            setList(sortedList)
            // loop through list
            for( let i = 0; i < sortedList.length; i++ ){
                // check for duplicate positions
                if(sortedList[i].position === sortedList[i+1].position ){
                    // set records ahead of position to +1
                    sortedList[i+1].position += 1
                    // update records ahead to new position
                    axios.put(`http://localhost:8000/api/changePosition/${sortedList[i+1]._id}`, {
                        position: sortedList[i+1].position
                    })
                }
                // check for missing gaps
                if(sortedList[i].position - sortedList[i+1].position != -1){
                    // set records ahead of position to -1
                    sortedList[i+1].position = sortedList[i].position+1
                    // update records ahead to new position
                    axios.put(`http://localhost:8000/api/changePosition/${sortedList[i+1]._id}`, {
                        position: sortedList[i+1].position
                    })
                }
                // ensure records start at 1
                if(sortedList[0].position != 1){
                    axios.put(`http://localhost:8000/api/changePosition/${sortedList[0]._id}`, {
                        position: 1
                    })
                    axios.put(`http://localhost:8000/api/changePosition/${sortedList[i+1]._id}`, {
                        position: sortedList[i+1].position +1
                    })
                }
                // ensure records increment by 1
                if(sortedList[i].position - sortedList[i+1].position!= -1){
                    axios.put(`http://localhost:8000/api/changePosition/${sortedList[i+1]._id}`, {
                        position: sortedList[i+1].position+=1
                    })
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    const randomRecord = (e) =>{
        const len = list.length
        const newRecord = list[Math.floor(Math.random() * len)]
        console.log(newRecord)
        axios.get(`http://localhost:8000/api/oneRecord/${newRecord._id}`)
        .then((res)=>{
            setActiveRecord(res.data)
        }).catch((err)=>{
            console.log(err)
        })}
    const playRecord = (e) => {
        e.preventDefault()
        console.log(activeRecord.playCount)
        const newPlay = activeRecord.playCount+1
        console.log("the play count for", activeRecord.albumName, "is now:", newPlay)
        axios.put(`http://localhost:8000/api/playRecord/${activeRecord._id}`, {
            playCount: newPlay
        })
        .then((res)=>{
            setPlayCount(activeRecord.playCount)
            setActiveRecord(res.data)
            console.log(res)
            // debugger
            console.log("playcount should be edited...")
                // setRecord({...record, record:res.data})
            })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="p-3 mb-2 bg-dark text-white" style={{height:"300%", width:"100%"}}>
            <h1 className="text-warning">Record List</h1>
            { activeRecord ? 
                <div className="col col-4 mx-auto">
                    <img className="col-10" alt= "" src={activeRecord.albumArt}></img>
                    <p style={{fontSize:"10px"}} >#{activeRecord.position}</p>
                    <div className="my-4">
                        <Link to={`/oneRecord/${activeRecord._id}`}>{activeRecord.albumName}</Link>
                        <div>
                            <Link to={`/oneArtist/${activeRecord.artist}`}>{activeRecord.artist}</Link>
                        </div>
                    { activeRecord ? 
                        <div className="col col-4 mx-auto" >
                            <div><label className='form-label'>Play Count: {activeRecord.playCount}</label></div>
                            <button className="btn btn-success btn-lg rounded-circle" onClick={playRecord}>
                                    <i class="fa-solid fa-circle-play"></i> 
                            </button>
                        </div>
                    :null}
                    </div>
                </div>
            :null }
            <button className="btn btn-info text-white" onClick={randomRecord}>
                Pick a Random Record! <i className="fa-solid fa-record-vinyl"></i>
                <div></div>
            </button>
            <div className="d-flex flex-wrap">              
                {
                    list.map((record, index)=> {
                        return(
                            <div className="col col-6 mt-3 px-2" key={index}>
                                <img src={record.albumArt} alt="" className="col-4"></img>
                                {/* <div>
                                    <button onClick={increasePosition} >
                                        <i class="fa-solid fa-arrow-up"></i>
                                    </button>
                                </div> */}
                                    <p style={{fontSize:"10px"}} >#{record.position}</p>
                                    {/* <button onClick={decreasePosition}>
                                        <i class="fa-solid fa-arrow-down"></i>
                                    </button> */}
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