import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const OneArtist = () => {
    const {artist} = useParams()
    // const navigate = useNavigate()

    const [ record, setRecord ] = useState({})
    const [ list, setList ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneArtist/${artist}`)
        .then((res)=>{
            console.log(res)
            setList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    return (
        <div className='bg-dark text-primary' style={{height:"100%"}}>
            <h1>{record.artist} </h1>
            {list.map((record, index)=>{
                return (
                    <div key={index}>
                        <img src={record.albumArt} alt="" className="col-4"></img>
                        <div className="col col-4 mt-3 mx-center">
                            <Link to={`/oneRecord/${record._id}`}>{record.albumName}</Link>
                            <p>{record.genre}</p>
                            <p>{record.releaseYear}</p>
                        </div>
                    </div>
            )
        })}
        </div>
    )
}

export default OneArtist