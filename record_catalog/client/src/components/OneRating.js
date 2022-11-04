import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const OneYear = () => {
    const {rating} = useParams()
    // const navigate = useNavigate()

    const [ record, setRecord ] = useState({})
    const [ list, setList ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneRating/${rating}`)
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
            <h1>All {rating} out of 5 Records </h1>
            {list.map((record, index)=>{
                list.sort()
                return (
                    <div key={index}>
                        <img src={record.albumArt} alt="" className="col-4"></img>
                        <div className="col col-4 mt-3 mx-center">
                            <Link to={`/oneRecord/${record._id}`}>{record.albumName}</Link>
                            <div><Link to={`/oneArtist/${record.artist}`}>{record.artist}</Link></div>
                            <div><Link to={`/oneGenre/${record.genre}`}>{record.genre}</Link></div>
                            <p>{record.rating} out of 5</p>
                        </div>
                    </div>
            )
        })}
        </div>
    )
}

export default OneYear;