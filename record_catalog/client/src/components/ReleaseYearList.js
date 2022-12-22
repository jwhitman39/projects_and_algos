import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ReleaseYearList = (props) => {
        const [list, setList ] = useState([])
        useEffect(() =>{
            axios.get('http://localhost:8000/api/allReleaseYears')
            .then((res)=>{
                console.log(res);
                // filter list of release years
                const uniqueReleaseYear = []
                const unique = res.data.filter(element => {
                    const isDuplicate = uniqueReleaseYear.includes(element.releaseYear);
                    if (!isDuplicate) {
                        uniqueReleaseYear.push(element.releaseYear)
                        return true
                    }
                    return false
                });
                setList(unique);
                // sort list by release year in ascending order
                const sortedList = unique.sort((a,b) => a.releaseYear - b.releaseYear)
                setList(sortedList)
            })
        }, [])
    return (
        <div className="p-3 mb-2 bg-dark text-white" style={{height:"100%"}}>
            <h1 className="text-warning">Release Years List</h1>
            <div className="d-flex flex-wrap">              
                {
                    list.map((record, index)=> {
                        return(
                            <div className="col col-6 mt-3 px-2" key={index}>
                                <Link to={`/oneYear/${record.releaseYear}`}>{record.releaseYear}</Link>
                            </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
export default ReleaseYearList;