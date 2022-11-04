import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const GenreList = (props) => {
    // const {record, setRecord} = props
    // const [ activeRecord, setActiveRecord ] = useState(0)
    // const randomRecord = (e) =>{
    //     const len = list.length
    //     setActiveRecord(Math.floor(Math.random() * len))
    // }
    const [list, setList ] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:8000/api/allGenres')
        .then((res)=>{
            console.log(res);
            // filter list of genres
            const uniqueGenres = []
            const unique = res.data.filter(element => {
                const isDuplicate = uniqueGenres.includes(element.genre);
                if (!isDuplicate) {
                uniqueGenres.push(element.genre);
                return true;
                }
                return false;
            });
            setList(unique);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <div className="p-3 mb-2 bg-dark text-white" style={{height:"100vh"}}>
            <h1 className="text-warning">Genre List</h1>
            {/* { activeRecord ? 
                <div className="col col-4 mx-auto">
                    <img className="col-10" alt= "" src={list[activeRecord].albumArt}></img>
                    <div className="my-4">
                        <Link to={`/oneRecord/${list[activeRecord]._id}`}>{list[activeRecord].albumName}</Link>
                        <div>
                            <Link to={`/oneArtist/${list[activeRecord].artist}`}>{list[activeRecord].artist}</Link>
                        </div>
                    </div>
                </div>
            :null } */}
            {/* <button className="btn btn-info" onClick={randomRecord} >Pick a Random Record!</button> */}
            <div className="d-flex flex-wrap">              
                {
                    list.map((record, index)=> {
                        return(
                            <div className="col col-8 mt-3 px-2" key={index}>
                                <Link to={`/oneGenre/${record.genre}`}>{record.genre}</Link>
                            </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
export default GenreList;