import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditForm = (props) => {
    const [ albumArt, setAlbumArt ] = useState('')
    const [ albumName, setAlbumName ] = useState('')
    const [ artist, setArtist ] = useState('')
    const [ rating, setRating ] = useState('')
    const [ genre, setGenre ] = useState('')
    const [ releaseYear, setReleaseYear ] = useState('')
    const [ playCount, setPlayCount ] = useState('')
    const [ position, setPosition ] = useState('')
    const [ errors, setErrors ] = useState({})
    const [ list, setList ] = useState([])
    const [ sortedList, setSortedList ] = useState([])
    const {record, setRecord} = props
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allRecords')
        .then((res)=>{
            console.log(res)
            setList(res.data)
            // create sorted list variable
            setSortedList(res.data.sort((a,b) => a.position - b.position))
            // set list to sortedList
            setList(sortedList)
            for( let i = 0; i < sortedList.length; i++ ){
                // check for duplicate positions
                if(sortedList[i].position === sortedList[i+1].position ){
                    // set records ahead of position to +1
                    sortedList[i+1].position += 1
                }
            }})
        .catch((err)=>{
            console.log(err)
        })
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneRecord/${id}`)
        .then((res)=>{
            setAlbumArt(res.data.albumArt)
            setAlbumName(res.data.albumName)
            setArtist(res.data.artist)
            setRating(res.data.rating)
            setGenre(res.data.genre)
            setReleaseYear(res.data.releaseYear)
            setPlayCount(res.data.playCount)
            setPosition(res.data.position)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    const updateHandler = (e) => {
        e.preventDefault()
        console.log("======", id)
        axios.put(`http://localhost:8000/api/updateRecord/${id}`, {
            albumArt,
            albumName,
            artist,
            rating,
            genre,
            releaseYear,
            playCount,
            position
        })
    .then((res)=>{
            navigate('/recordList')
            setRecord({...record, record: res.data})
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div className='bg-dark text-white' style={{height:"100vh"}}>
            <form className='col-6 mx-auto' onSubmit = {updateHandler}>
                <p>
                    <label className='form-label'>Album Art:</label>
                    <input value={albumArt} className='form-control' type="text" onChange= {(e) => setAlbumArt(e.target.value)}/>
                    { errors.albumArt ? <span className='text-danger'>{errors.albumArt.message}</span> :null }
                </p>
                <p>
                    <label className='form-label'>Album Name:</label>
                    <input value={albumName} className='form-control' type="text" onChange= {(e) => setAlbumName(e.target.value)}/>
                    { errors.albumName ? <span className='text-danger'>{errors.albumName.message}</span> :null }
                </p>
                <p>
                    <label className='form-label'>Artist:</label>
                    <input value={artist} className='form-control' type="text" onChange= {(e) => setArtist(e.target.value)}/>
                    { errors.artist ? <span className='text-danger'>{errors.artist.message}</span> :null }
                </p>
                <p>
                    <label className='form-label'>Rating:</label>
                    <select value={rating} className='form-control' type="number" onChange= {(e) => setRating(e.target.value)}>
                        <option value= ""></option>
                        <option value= "1">1</option>
                        <option value= "2">2</option>
                        <option value= "3">3</option>
                        <option value= "4">4</option>
                        <option value= "5">5</option>
                    </select>
                    { errors.rating ? <span className='text-danger'>{errors.rating.message}</span> :null }
                </p>
                <p>
                    <label className='form-label'>Genre:</label>
                    <select value={genre} className='form-control' type="text" onChange= {(e) => setGenre(e.target.value)}>
                        <option value= ""></option>
                        <option value= "Rock">Rock</option>
                        <option value= "Metal">Metal</option>
                        <option value= "Disco">Disco</option>
                        <option value= "Soundtrack">Soundtrack</option>
                        <option value= "Classical">Classical</option>
                        <option value= "Hip-Hop">Hip-Hop</option>
                        <option value= "Funk">Funk</option>
                        <option value= "Electronic">Electronic</option>
                        <option value= "Alternative">Alternative</option>
                        <option value= "Easy-Listening">Easy-Listening</option>
                        <option value= "Ambient">Ambient</option>
                        <option value= "Blues">Blues</option>
                        <option value= "RnB">RnB</option>
                        <option value= "Jazz">Jazz</option>
                        <option value= "Pop">Pop</option>
                        <option value= "Country">Country</option>
                    </select>
                    { errors.genre ? <span className='text-danger'>{errors.genre.message}</span> :null }
                </p>
                <p>
                    <label className='form-label'>Release Year:</label>
                    <input value={releaseYear} className='form-control' type="number" onChange= {(e) => setReleaseYear(e.target.value)}/>
                    { errors.releaseYear ? <span className='text-danger'>{errors.releaseYear.message}</span> :null }
                </p>
                <p>
                    <label className='form-label'>Play Count: {playCount}</label>
                    <input placeholder= "0" className='form-control' type="number" onChange= {(e) => setPlayCount(e.target.value)}/>
                    { errors.playCount ? <span className='text-danger'>{errors.playCount.message}</span> :null }
                </p>
                <p>
                    <label className='form-label'>Position: </label>
                    <select value={position} className='form-control' placeholder={list.length}  type="number" onChange={(e) => setPosition(e.target.value)}>
                        <option value="" ></option>
                        {sortedList.map((record, index)=> {
                            return(
                                <option key={index} value={record.position}>{record.position}   {record.artist}, {record.albumName}, {record.releaseYear}</option>
                            )
                        })}
                    </select>
                    { errors.position ? <span className='text-danger'>{errors.position.message}</span> :null }
                </p>
                <input type="submit" className='btn btn-success' value="Update record"></input>
            </form>
        </div>
    )
}

export default EditForm;