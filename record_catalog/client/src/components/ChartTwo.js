import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
const ChartTwo = () => {
    const {releaseYear} = useParams()
    const [releaseYearList, setReleaseYearList ] = useState([])
    const [list, setList] = useState([])
    const data = [
        {name: 'Geeksforgeeks', students: 400},
        {name: 'Technical scripter', students: 700},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-o-mania', students: 1000}
        ];
    useEffect(() =>{
        // get all records
        axios.get('http://localhost:8000/api/allRecords')
        .then((res)=>{
            // log results
            console.log(res);
            // set list to the results
            setList(res.data);
            const countList = list.reduce((acc, curr) => {
                const { releaseYear } = curr
                if (acc[releaseYear]) ++acc[releaseYear]
                else acc[releaseYear] = 1
                return acc
            }, {})
            const result = list.map((obj) => {
                obj["count"] = countList[obj.releaseYear]
                return obj
            })
            console.log("here's the count list" + result);
            })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
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
            const sortedList = unique.sort((a,b) => a.releaseYear - b.releaseYear)
            setReleaseYearList(sortedList)
        })
        console.log("unique release years:" +  releaseYearList + releaseYearList.length)
    }, [])
        return (
            <>
                <BarChart width={600} height={600} data={data}>
                    <Bar dataKey="students" fill="green" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            </>
        )
    }

export default ChartTwo;