import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ArtistList = (props) => {
    // const {record, setRecord} = props
    // const [ activeRecord, setActiveRecord ] = useState(0)
    // const randomRecord = (e) =>{
    //     const len = list.length
    //     setActiveRecord(Math.floor(Math.random() * len))
    // }
    const [list, setList ] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:8000/api/allArtists')
        .then((res)=>{
            console.log(res);
            setList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <div className="p-3 mb-2 bg-dark text-white" style={{height:"100%"}}>
            <h1 className="text-warning">Artist List</h1>
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
                            <div className="col col-6 mt-3 px-2" key={index}>
                                <Link to={`/oneArtist/${record.artist}`}>{record.artist}</Link>
                            </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
export default ArtistList;