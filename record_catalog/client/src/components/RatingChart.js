import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, RadialBarChart, RadialBar, CustomToolTip, Legend } from 'recharts';
const RatingChart = () => {
    const [list, setList] = useState([])
    const [amountList, setAmountList] = useState([])
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
    function findOcc (arr, key, key2) {
        let arr2 = [];
        arr.forEach((x)=>{
            // check if there is any object in arr2
            // which contains the key value
            if(arr2.some((val)=>{ return val[key] == x[key] })){
                // if yes then increase the occurence by 1
                arr2.forEach((k)=>{
                    if(k[key] === x[key]){
                        k["amount"]++
                    }
                })
            }else{
                // if not then create a new object, initialize
                // it with the present iteration key's value and
                // set the amount to 1
                let a = {}
                a[key] = x[key]
                a["amount"]= 1
                arr2.push(a)
                arr2.sort((a,b) => a.genre - b.genre)
            }
        })
        return arr2
    }
    let arr = list
    let key = "genre"
    let key2 = "rating"
    console.log(findOcc(arr, key, key2))
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
        return (
            <div className="bg-dark mx-auto" style={{padding: "5px"}}>
                { payload[0].value > 1 ?  
            <p className="label">{`${label} : ${payload[0].value}  records`}</p>
        : <p className="label">{`${label} : ${payload[0].value}  record`}</p>
        }
        {/* {findOcc(arr, key).map((record, index)=>{
            return(
                <div style={{display: "flex"}} key={index}>
                    <img src={record.albumArt}></img> 
                </div>
            )
        })} */}
            </div>
        );
        }}
        return (
            <div style={{display: "flex", justifyContent: "center", marginRight: "70px", marginTop: "50px"}}>
                <BarChart width={1600} height={600} data={list}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="genre" />
                    <YAxis dataKey="rating" />
                    <Tooltip content={<CustomTooltip />}/>
                    <Bar dataKey="rating" fill="royalBlue" barSize={15}/>
                    <Bar dataKey="rating" fill="royalBlue" barSize={15}/>
                </BarChart>
            </div>
        )
}
export default RatingChart;