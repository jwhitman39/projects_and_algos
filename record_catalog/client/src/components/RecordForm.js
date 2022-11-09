import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const RecordForm = (props) => {
    const {record, setRecord} = props;
    const [ albumArt, setAlbumArt ] = useState('')
    const [ albumName, setAlbumName ] = useState('')
    const [ artist, setArtist ] = useState('')
    const [ rating, setRating ] = useState('')
    const [ genre, setGenre ] = useState('')
    const [ releaseYear, setReleaseYear ] = useState('')
    const [ playCount, setPlayCount ] = useState('')
    const [ position, setPosition ] = useState('')
    const [ list, setList ] = useState([])
    const [ errors, setErrors ] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allRecords')
        .then((res)=>{
            console.log(res)
            setList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addRecord',
        {
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
            console.log(res); 
            navigate('/recordList')
            setRecord([...record, res.data]);
        })
        .catch(err=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div className='bg-dark text-white' style={{height:"100%"}}>
            <form className='col-6 mx-auto' onSubmit = {onSubmitHandler}>
                <div>
                    <img src = {albumArt} />
                    <div>
                    <label className='form-label'>Album Art:</label>
                    </div>
                    <input value={albumArt} className='form-control' type="text" onChange= {(e) => setAlbumArt(e.target.value)}/>
                    { errors.albumArt ? <span className='text-danger'>{errors.albumArt.message}</span> :null }
                </div>
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
                        <option value= "Soul">Soul</option>
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
                    <input value={playCount} className='form-control' type="number" onChange={(e) => setPlayCount(e.target.value)}/>
                    { errors.releaseYear ? <span className='text-danger'>{errors.releaseYear.message}</span> :null }
                </p>
                <p>
                    <label className='form-label'>Position: </label>
                    <select value={position} className='form-control' placeholder={list.length}  type="number" onChange={(e) => setPosition(e.target.value)}>
                        <option value="" ></option>
                        {list.map((record, index)=> {
                            return(
                                <option key={index} value={record.position}>{record.position}   {record.artist}, {record.albumName}, {record.releaseYear}</option>
                            )
                        })}
                    </select>
                    { errors.releaseYear ? <span className='text-danger'>{errors.releaseYear.message}</span> :null }
                </p>
                <input type="submit" className='btn btn-success' value="Add record"></input>
            </form>
        </div>
    )
}
export default RecordForm;