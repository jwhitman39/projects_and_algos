import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
const ChartTwo = () => {
    const {releaseYear} = useParams()
    const [releaseYearList, setReleaseYearList ] = useState([])
    const [list, setList] = useState([])
    const [countList, setCountList] = useState([])
    useEffect(() =>{
        // get all records
        axios.get('http://localhost:8000/api/allRecords')
        .then((res)=>{
            // log results
            console.log(res);
            // set list to the results
            setList(res.data);
            })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    function findOcc (arr, key) {
        let arr2 = [];
        arr.forEach((x)=>{
            // check if there is any object in arr2
            // which contains the key value
            if(arr2.some((val)=>{ return val[key] == x[key] })){
                // if yes then increase the occurence by 1
                arr2.forEach((k)=>{
                    if(k[key] === x[key]){
                        k["occurrence"]++
                    }
                })
            }else{
                // if not then create a new object, initialize
                // it with the present iteration key's value and
                // set the occurrence to 1
                let a = {}
                a[key] = x[key]
                a["occurrence"]= 1
                arr2.push(a)
                arr2.sort((a,b) => a.releaseYear - b.releaseYear)
            }
        })
        return arr2
    }
    let arr = list
    let key = "releaseYear"
    console.log(findOcc(arr, key))
        return (
            <div style={{display: "flex", justifyContent: "center", marginRight: "70px", marginTop: "50px"}}>
                <BarChart width={1600} height={600} data={findOcc(arr, key)}>
                    <Bar dataKey="occurrence" fill="cyan" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="releaseYear" />
                    <YAxis dataKey="occurrence" />
                </BarChart>
            </div>
        )
    }

export default ChartTwo;