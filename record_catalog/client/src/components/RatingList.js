import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const RatingList = (props) => {

        const [list, setList ] = useState([])
        useEffect(() =>{
            axios.get('http://localhost:8000/api/allReleaseYears')
            .then((res)=>{
                console.log(res);
                // filter list of release years
                const uniqueRating = []
                const unique = res.data.filter(element => {
                    const isDuplicate = uniqueRating.includes(element.rating);
                    if (!isDuplicate) {
                        uniqueRating.push(element.rating)
                        return true
                    }
                    return false
                });
                setList(unique);
                // sort list by release year in ascending order
                const sortedList = unique.sort((a,b) => a.rating - b.rating)
                setList(sortedList)
            })
    }, [])
    return (
        <div className="p-3 mb-2 bg-dark text-white" style={{height:"100%"}}>
            <h1 className="text-warning">Rating List</h1>
            <div className="d-flex flex-wrap">              
                {
                    list.map((record, index)=> {
                        return(
                            <div className="col col-6 mt-3 px-2" key={index}>
                                <Link to={`/oneRating/${record.rating}`}>{record.rating}</Link>
                            </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
export default RatingList;