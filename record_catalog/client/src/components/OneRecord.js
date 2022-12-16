import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const OneRecord = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [record, setRecord] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneRecord/${id}`)
        .then((res)=>{
            setRecord(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteRecord/${id}`)
        .then((res)=>{
            console.log('Deleted from db')
            navigate('/recordList')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className='bg-dark text-primary' style={{height:"100%"}}>
            <h1>{record.albumName} </h1>
            <img src={record.albumArt}></img>
            <h2><Link to={`/oneArtist/${record.artist}`}>{record.artist}</Link></h2>
            <p>Genre: <Link to={`/oneGenre/${record.genre}`}>{record.genre}</Link></p>
            <p>Release Year: <Link to={`/oneYear/${record.releaseYear}`}>{record.releaseYear}</Link></p>
            <p>Rating: <Link to={`/oneRating/${record.rating}`}>{record.rating}</Link> out of 5</p>
            <p>Play Count: {record.playCount} </p>
            <p>Position: {record.position} </p>
            <p>Tag: {record.tag1} </p>
            <button className='btn btn-warning'><Link to={`/edit/${record._id}`}>Edit Record</Link></button>
            <button onClick={(e)=>deleteHandler(record._id)} className='btn btn-danger'>Delete Record!</button>
        </div>
    )
}

export default OneRecord