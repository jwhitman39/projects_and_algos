import React from 'react'
import { ReactDOM } from 'react';
import { Component } from 'react';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CanvasJS from '../canvasjs.react'



const Stat = () => {
    const [list, setList ] = useState([])
    const [data, setData] = useState([])
        useEffect(() =>{
            axios.get('http://localhost:8000/api/allRecords')
            .then((res)=>{
                console.log(res);
                setList(res.data);
                let mainCounter = list.length
                console.log(`Here's the count:${mainCounter}`)
                const rockCount = list.filter(function(item){
                    if (item.genre === 'Rock') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Rock count:${rockCount}`)
                const bluesCount = list.filter(function(item){
                    if (item.genre === 'Blues') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Blues count:${bluesCount}`)
                const hipHopCount = list.filter(function(item){
                    if (item.genre === 'Hip-Hop') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Hip-Hop count:${hipHopCount}`)
                const funkCount = list.filter(function(item){
                    if (item.genre === 'Funk') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Funk count:${funkCount}`)
                const soundtrackCount = list.filter(function(item){
                    if (item.genre === 'Soundtrack') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Soundtrack count:${soundtrackCount}`)
                const discoCount = list.filter(function(item){
                    if (item.genre === 'Disco') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Disco count:${discoCount}`)
                const electronicCount = list.filter(function(item){
                    if (item.genre === 'Electronic') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Electronic count:${electronicCount}`)
                const rnbCount = list.filter(function(item){
                    if (item.genre === 'RnB') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the RnB count:${rnbCount}`)
                const soulCount = list.filter(function(item){
                    if (item.genre === 'Soul') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Soul count:${soulCount}`)
                const jazzCount = list.filter(function(item){
                    if (item.genre === 'Jazz') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Jazz count:${jazzCount}`)
                const metalCount = list.filter(function(item){
                    if (item.genre === 'Metal') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Metal count:${metalCount}`)
                const classicalCount = list.filter(function(item){
                    if (item.genre === 'Classical') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Classical count:${classicalCount}`)
                const popCount = list.filter(function(item){
                    if (item.genre === 'Pop') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Pop count:${popCount}`)
                const ambientCount = list.filter(function(item){
                    if (item.genre === 'Ambient') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Ambient count:${ambientCount}`)
                const easyListeningCount = list.filter(function(item){
                    if (item.genre === 'Easy-Listening') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Easy-Listening count:${easyListeningCount}`)
                const alternativeCount = list.filter(function(item){
                    if (item.genre === 'Alternative') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Alternative count:${alternativeCount}`)
                const countryCount = list.filter(function(item){
                    if (item.genre === 'Country') {
                    return true;
                    } else {
                    return false;
                    }
                }).length;
                console.log(`Here's the Country count:${countryCount}`)
                console.log(rockCount+bluesCount+hipHopCount+funkCount+soundtrackCount+discoCount+electronicCount+rnbCount+soulCount+jazzCount+metalCount+classicalCount+popCount+ambientCount+easyListeningCount+alternativeCount+countryCount)
                // setData([{rockCount}, {bluesCount}, {hipHopCount}, {funkCount}, {soundtrackCount}, {discoCount}, {electronicCount}, {rnbCount}, {soulCount}, {jazzCount}, {metalCount}, {classicalCount}, {popCount}, {ambientCount}, {easyListeningCount}, {alternativeCount}, {countryCount}])
            })
            .catch((err)=>{
                console.log(err);
            })
        }, [])

    return (
        <div className='col col-3 mx-auto' style={{width:"50%", display: "flex", flexWrap: "wrap"}} >
                <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            theme={VictoryTheme.material}
            domainPadding={10}
        >
            <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={[data]}
            />
            <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={(y) => (`${y} out of 5`)}
            />
            <VictoryBar
            data={list}
            x="genre"
            y="rating"
            />
        </VictoryChart>
        </div>
    )
}
export default Stat;