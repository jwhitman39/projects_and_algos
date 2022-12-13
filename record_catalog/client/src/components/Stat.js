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
    const [rockList, setRockList ] = useState([])
    const [metalList, setMetalList ] = useState([])
    const [discoList, setDiscoList ] = useState([])
    const [soundtrackList, setSoundtrackList ] = useState([])
    const [classicalList, setClassicalList ] = useState([])
    const [hiphopList, setHiphopList ] = useState([])
    const [funkList, setFunkList ] = useState([])
    const [electronicList, setElectronicList ] = useState([])
    const [easyListeningList, setEasyListeningList ] = useState([])
    const [ambientList, setAmbientList ] = useState([])
    const [alternativeList, setAlternativeList ] = useState([])
    const [bluesList, setBluesList ] = useState([])
    const [rnbList, setRnbList ] = useState([])
    const [jazzList, setJazzList ] = useState([])
    const [soulList, setSoulList ] = useState([])
    const [popList, setPopList ] = useState([])
    const [countryList, setCountryList ] = useState([])
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
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Rock")
        .then((res)=>{
            setRockList(res.data)
            console.log("rock count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Metal")
        .then((res)=>{
            setMetalList(res.data)
            console.log("metal count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Disco")
        .then((res)=>{
            setDiscoList(res.data)
            console.log("disco count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Soundtrack")
        .then((res)=>{
            setSoundtrackList(res.data)
            console.log("soundtrack count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Classical")
        .then((res)=>{
            setClassicalList(res.data)
            console.log("classical count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Hip-Hop")
        .then((res)=>{
            setHiphopList(res.data)
            console.log("hip hop count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Funk")
        .then((res)=>{
            setFunkList(res.data)
            console.log("funk count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Electronic")
        .then((res)=>{
            setElectronicList(res.data)
            console.log("electronic count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Easy-Listening")
        .then((res)=>{
            setEasyListeningList(res.data)
            console.log("easy listening count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Ambient")
        .then((res)=>{
            setAmbientList(res.data)
            console.log("ambient count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Alternative")
        .then((res)=>{
            setAlternativeList(res.data)
            console.log("alternative count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Blues")
        .then((res)=>{
            setBluesList(res.data)
            console.log("blues count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/RnB")
        .then((res)=>{
            setRnbList(res.data)
            console.log("rnb count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Jazz")
        .then((res)=>{
            setJazzList(res.data)
            console.log("jazz count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Soul")
        .then((res)=>{
            setSoulList(res.data)
            console.log("soul count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Pop")
        .then((res)=>{
            setPopList(res.data)
            console.log("pop count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/oneGenre/Country")
        .then((res)=>{
            setCountryList(res.data)
            console.log("country count:" + res.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    const test = [ 
        { symbol: "Jon", amount: 9, color: "#0033ad", inUSD: 39},
        { symbol: "Godzila", amount: 339, color: "##06B4FE", inUSD: 39},
        { symbol: "Gandalf", amount: 19, color: "#FECD06", inUSD: 39},
        { symbol: "Vader", amount: 39, color: "#A46B5D", inUSD: 39}
    ]
    const genres = [
        { title: "Rock", count: rockList.length, color:"#FECD06"},
        { title: "Metal", count: metalList.length, color:"#FECD06"},
        { title: "Disco", count: discoList.length, color:"#FECD06"},
        { title: "Soundtrack", count: soundtrackList.length, color:"#FECD06"},
        { title: "Classical", count: classicalList.length, color:"#FECD06"},
        { title: "Funk", count: funkList.length, color:"#FECD06"},
        { title: "Electronic", count: electronicList.length, color:"#FECD06"},
        { title: "Alternative", count: alternativeList.length, color:"#FECD06"},
        { title: "Easy-Listening", count: easyListeningList.length, color:"#FECD06"},
        { title: "Ambient", count: ambientList.length, color:"#FECD06"},
        { title: "Blues", count: bluesList.length, color:"#FECD06"},
        { title: "RnB", count: rnbList.length, color:"#FECD06"},
        { title: "Soul", count: soulList.length, color:"#FECD06"},
        { title: "Hip-Hop", count: hiphopList.length, color:"#FECD06"},
        { title: "Jazz", count: jazzList.length, color:"#FECD06"},
        { title: "Pop", count: popList.length, color:"#FECD06"},
        { title: "Country", count: countryList.length, color:"#FECD06"}
    ]
    return(
        <div className='bg-dark'>
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
                                        `${Math.floor(genres.reduce((acc, genre) => acc * genres.amount, 0))}`
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
                            data={genres} 
                            pieValue={(data) => 
                                data.count * data.length
                            }
                            outerRadius={half}
                            innerRadius={({data}) => {
                                // if there's active, and the active symbol is equal to the data symbol
                                const size = active && active.title == data.title ? 90 : 30
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
                                                    <path d={pie.path(arc)} fill={arc.data.color}
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
                                        `${Math.floor(active.title)}`
                                    }
                                    Records
                                </Text>
                                <Text textAnchor='middle' fill={active.color} fontSize={40} dy={20}>
                                    {
                                        `${active.title} ${active.genre}`
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
