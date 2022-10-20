import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const RecordList = (props) => {
    // const {record, setRecord} = props
    const [ activeRecord, setActiveRecord ] = useState(0)
    const randomRecord = (e) =>{
        const len = list.length
        setActiveRecord(Math.floor(Math.random() * len))
    }
    const [list, setList ] = useState([])
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
        <div className="p-3 mb-2 bg-dark text-white" style={{height:"100%"}}>
            <h1 className="text-warning">Record List</h1>
            { activeRecord ? 
                <div className="col col-4 mx-auto">
                    <img className="col-10" alt= "" src={list[activeRecord].albumArt}></img>
                    <div className="my-4">
                        <Link to={`/oneRecord/${list[activeRecord]._id}`}>{list[activeRecord].albumName}</Link>
                        <div>{list[activeRecord].artist}</div>
                    </div>
                </div>
            :null }
            <button className="btn btn-info" onClick={randomRecord} >Pick a Random Record!</button>
            <div className="d-flex flex-wrap">              
                {
                    list.map((record, index)=> {
                        return(
                            <div className="col col-6 mt-3 px-2" key={index}>
                                <img src={record.albumArt} alt="" className="col-4"></img>
                                <div className="col col-4 mt-3 mx-center">
                                    <Link to={`/oneRecord/${record._id}`}>{record.albumName}</Link>
                                    <p>{record.artist} </p>
                                    <p>{record.genre}</p>
                                    <p>{record.releaseYear}</p>
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