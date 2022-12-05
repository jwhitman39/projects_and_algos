import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import { Pie } from "@visx/shape"
import { Group } from "@visx/group"
import { Text } from "@visx/text"

const Stat  = (props) => {
    const width = 400
    const half = width / 2
    const [active, setActive] = useState(null);
    const [list, setList ] = useState([])
    const [genreList, setGenreList] = useState([])
    console.log(active)
    useEffect(() => {
        // get all records
        axios.get('http://localhost:8000/api/allRecords')
        .then((res)=>{
            // log results
            console.log(res);
            // set list to the results
            setList(res.data);
        })}, [])
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
            setGenreList(unique);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    const test = [ 
        { symbol: "Jon", amount: 39, color: "#0033ad", inUSD: 39},
        { symbol: "Godzila", amount: 39, color: "##06B4FE", inUSD: 39},
        { symbol: "Gandalf", amount: 39, color: "#FECD06", inUSD: 39},
        { symbol: "Vader", amount: 39, color: "#A46B5D", inUSD: 39}
    ]
    return(
        <div className='bg-dark'>
            <p>Pie chart should be here</p>
            <main>
                <svg width={width} height={width}>
                    <Group top={half} left={half}>
                        <Pie 
                            data={test} 
                            pieValue={(data) => data.amount * data.inUSD}
                            outerRadius={half}
                            innerRadius={({data}) => {
                                // if there's active, and the active symbol is equal to the data symbol
                                const size = active && active.symbol == data.symbol ? 90 : 30
                                return half - size
                            }}
                            padAngle={0.01}
                            >
                                {pie =>{
                                    return(
                                        pie.arcs.map(arc =>{
                                            return(
                                                <g 
                                                key={arc.data.amount} 
                                                onMouseEnter={() => setActive(arc.data)} 
                                                onMouseLeave={() => setActive(null)} >
                                                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                                                </g>
                                            )
                                        })
                                    )
                                }}
                            </Pie>
                            {active  ? ( 
                                <>
                                <Text textAnchor='middle' fill="#2C9E38" fontSize={40} dy={-20}>
                                    {
                                        `${Math.floor(active.genre)}`
                                    }
                                </Text>
                                <Text textAnchor='middle' fill={active.color} fontSize={40} dy={20}>
                                    {
                                        `${active.amount} ${active.symbol}`
                                    }
                                </Text>
                            </>
                            ) : (
                            <>
                                <Text textAnchor='middle' fill="#2C9E38" fontSize={40} dy={-20}>
                                    {
                                        `${Math.floor(test.reduce((acc, test) => acc * test.amount * test.inUSD, 0))}`
                                    }
                                    Records
                                </Text>
                                <Text textAnchor='middle' fill="#2C9E38" fontSize={40} dy={20}>
                                    {
                                        `${test.length} Assets`
                                    }
                                </Text>
                            </>
                            )}
                    </Group>
                </svg>
            </main>
            {/* START OF THE SECOND PIE CHART */}
            <p>Pie chart should be here</p>
            <main>
                <svg width={width} height={width}>
                    <Group top={half} left={half}>
                        <Pie 
                            data={list} 
                            pieValue={(data) => {
                                
                            }}
                            outerRadius={half}
                            innerRadius={({data}) => {
                                // if there's active, and the active symbol is equal to the data symbol
                                const size = active && active.genre == data.genre ? 90 : 30
                                return half - size
                            }}
                            padAngle={0.01}
                            >
                                {pie =>{
                                    return(
                                        pie.arcs.map(arc =>{
                                            return(
                                                <g 
                                                key={arc.data} 
                                                onMouseEnter={() => setActive(arc.data)} 
                                                onMouseLeave={() => setActive(null)} >
                                                    <path d={pie.path(arc)} fill={"#D0223F"}
                                                    ></path>
                                                </g>
                                            )
                                        })
                                    )
                                }}
                            </Pie>
                            {active  ? ( 
                                <>
                                <Text textAnchor='middle' fill="#2C9E38" fontSize={40} dy={-20}>
                                    {
                                        `${Math.floor(active.genre)}`
                                    }
                                    Records
                                </Text>
                                <Text textAnchor='middle' fill={active.color} fontSize={40} dy={20}>
                                    {
                                        `${active.amount} ${active.symbol}`
                                    }
                                </Text>
                            </>
                            ) : (
                            <>
                                <Text textAnchor='middle' fill="#2C9E38" fontSize={40} dy={-20}>
                                    {
                                        `${Math.floor(list.reduce((acc, list) => acc * list.genre, 0))}`
                                    }
                                    Records
                                </Text>
                                <Text textAnchor='middle' fill="#2C9E38" fontSize={40} dy={20}>
                                    {
                                        `${list.length} Records`
                                    }
                                </Text>
                            </>
                            )}
                    </Group>
                </svg>
            </main>
        </div>
    )
}
export default Stat;
