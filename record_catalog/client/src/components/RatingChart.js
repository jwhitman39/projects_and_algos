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
    const fiveRating = 5;
    const fourRating = 4;
    const threeRating = 3;
    const twoRating = 2;
    const oneRating = 1;
    const rock = "Rock"
    const rockTotal = list.filter((obj) => obj.genre === rock).length
    const rockFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === rock).length;
    const rockFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === rock).length;
    const rockThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === rock).length;
    const rockTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === rock).length;
    const rockOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === rock).length;
    console.log("here's the 5-star rating count for rock: " + rockFiveCount);
    console.log("here's the 4-star rating count for rock: " + rockFourCount);
    console.log("here's the 3-star rating count for rock: " + rockThreeCount);
    console.log("here's the 2-star rating count for rock: " + rockTwoCount);
    console.log("here's the 1-star rating count for rock: " + rockOneCount);
    const hiphop = "Hip-Hop"
    const hiphopTotal = list.filter((obj) => obj.genre === hiphop).length
    const hiphopFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === hiphop).length;
    const hiphopFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === hiphop).length;
    const hiphopThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === hiphop).length;
    const hiphopTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === hiphop).length;
    const hiphopOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === hiphop).length;
    console.log("here's the 5-star rating count for hiphop: " + hiphopFiveCount);
    console.log("here's the 4-star rating count for hiphop: " + hiphopFourCount);
    console.log("here's the 3-star rating count for hiphop: " + hiphopThreeCount);
    console.log("here's the 2-star rating count for hiphop: " + hiphopTwoCount);
    console.log("here's the 1-star rating count for hiphop: " + hiphopOneCount);
    const jazz = "Jazz"
    const jazzTotal = list.filter((obj) => obj.genre === jazz).length
    const jazzFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === jazz).length;
    const jazzFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === jazz).length;
    const jazzThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === jazz).length;
    const jazzTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === jazz).length;
    const jazzOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === jazz).length;
    console.log("here's the 5-star rating count for jazz: " + jazzFiveCount);
    console.log("here's the 4-star rating count for jazz: " + jazzFourCount);
    console.log("here's the 3-star rating count for jazz: " + jazzThreeCount);
    console.log("here's the 2-star rating count for jazz: " + jazzTwoCount);
    console.log("here's the 1-star rating count for jazz: " + jazzOneCount);
    const soundtrack = "Soundtrack"
    const soundtrackTotal = list.filter((obj) => obj.genre === soundtrack).length
    const soundtrackFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === soundtrack).length;
    const soundtrackFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === soundtrack).length;
    const soundtrackThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === soundtrack).length;
    const soundtrackTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === soundtrack).length;
    const soundtrackOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === soundtrack).length;
    console.log("here's the 5-star rating count for soundtrack: " + soundtrackFiveCount);
    console.log("here's the 4-star rating count for soundtrack: " + soundtrackFourCount);
    console.log("here's the 3-star rating count for soundtrack: " + soundtrackThreeCount);
    console.log("here's the 2-star rating count for soundtrack: " + soundtrackTwoCount);
    console.log("here's the 1-star rating count for soundtrack: " + soundtrackOneCount);
    const electronic = "Electronic"
    const electronicTotal = list.filter((obj) => obj.genre === electronic).length
    const electronicFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === electronic).length;
    const electronicFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === electronic).length;
    const electronicThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === electronic).length;
    const electronicTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === electronic).length;
    const electronicOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === electronic).length;
    console.log("here's the 5-star rating count for electronic: " + electronicFiveCount);
    console.log("here's the 4-star rating count for electronic: " + electronicFourCount);
    console.log("here's the 3-star rating count for electronic: " + electronicThreeCount);
    console.log("here's the 2-star rating count for electronic: " + electronicTwoCount);
    console.log("here's the 1-star rating count for electronic: " + electronicOneCount);
    const classical = "Classical"
    const classicalTotal = list.filter((obj) => obj.genre === classical).length
    const classicalFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === classical).length;
    const classicalFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === classical).length;
    const classicalThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === classical).length;
    const classicalTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === classical).length;
    const classicalOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === classical).length;
    console.log("here's the 5-star rating count for classical: " + classicalFiveCount);
    console.log("here's the 4-star rating count for classical: " + classicalFourCount);
    console.log("here's the 3-star rating count for classical: " + classicalThreeCount);
    console.log("here's the 2-star rating count for classical: " + classicalTwoCount);
    console.log("here's the 1-star rating count for classical: " + classicalOneCount);
    const blues = "Blues"
    const bluesTotal = list.filter((obj) => obj.genre === blues).length
    const bluesFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === blues).length;
    const bluesFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === blues).length;
    const bluesThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === blues).length;
    const bluesTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === blues).length;
    const bluesOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === blues).length;
    console.log("here's the 5-star rating count for blues: " + bluesFiveCount);
    console.log("here's the 4-star rating count for blues: " + bluesFourCount);
    console.log("here's the 3-star rating count for blues: " + bluesThreeCount);
    console.log("here's the 2-star rating count for blues: " + bluesTwoCount);
    console.log("here's the 1-star rating count for blues: " + bluesOneCount);
    const metal = "Metal"
    const metalTotal = list.filter((obj) => obj.genre === metal).length
    const metalFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === metal).length;
    const metalFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === metal).length;
    const metalThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === metal).length;
    const metalTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === metal).length;
    const metalOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === metal).length;
    console.log("here's the 5-star rating count for metal: " + metalFiveCount);
    console.log("here's the 4-star rating count for metal: " + metalFourCount);
    console.log("here's the 3-star rating count for metal: " + metalThreeCount);
    console.log("here's the 2-star rating count for metal: " + metalTwoCount);
    console.log("here's the 1-star rating count for metal: " + metalOneCount);
    const easyListening = "Easy-Listening"
    const easyListeningTotal = list.filter((obj) => obj.genre === easyListening).length
    const easyListeningFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === easyListening).length;
    const easyListeningFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === easyListening).length;
    const easyListeningThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === easyListening).length;
    const easyListeningTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === easyListening).length;
    const easyListeningOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === easyListening).length;
    console.log("here's the 5-star rating count for Easy-Listening: " + easyListeningFiveCount);
    console.log("here's the 4-star rating count for Easy-Listening: " + easyListeningFourCount);
    console.log("here's the 3-star rating count for Easy-Listening: " + easyListeningThreeCount);
    console.log("here's the 2-star rating count for Easy-Listening: " + easyListeningTwoCount);
    console.log("here's the 1-star rating count for Easy-Listening: " + easyListeningOneCount);
    const disco = "Disco"
    const discoTotal = list.filter((obj) => obj.genre === disco).length
    const discoFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === disco).length;
    const discoFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === disco).length;
    const discoThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === disco).length;
    const discoTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === disco).length;
    const discoOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === disco).length;
    console.log("here's the 5-star rating count for disco: " + discoFiveCount);
    console.log("here's the 4-star rating count for disco: " + discoFourCount);
    console.log("here's the 3-star rating count for disco: " + discoThreeCount);
    console.log("here's the 2-star rating count for disco: " + discoTwoCount);
    console.log("here's the 1-star rating count for disco: " + discoOneCount);
    const alternative = "Alternative"
    const alternativeTotal = list.filter((obj) => obj.genre === alternative).length
    const alternativeFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === alternative).length;
    const alternativeFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === alternative).length;
    const alternativeThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === alternative).length;
    const alternativeTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === alternative).length;
    const alternativeOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === alternative).length;
    console.log("here's the 5-star rating count for alternative: " + alternativeFiveCount);
    console.log("here's the 4-star rating count for alternative: " + alternativeFourCount);
    console.log("here's the 3-star rating count for alternative: " + alternativeThreeCount);
    console.log("here's the 2-star rating count for alternative: " + alternativeTwoCount);
    console.log("here's the 1-star rating count for alternative: " + alternativeOneCount);
    const rnb = "RnB"
    const rnbTotal = list.filter((obj) => obj.genre === rnb).length
    const rnbFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === rnb).length;
    const rnbFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === rnb).length;
    const rnbThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === rnb).length;
    const rnbTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === rnb).length;
    const rnbOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === rnb).length;
    console.log("here's the 5-star rating count for rnb: " + rnbFiveCount);
    console.log("here's the 4-star rating count for rnb: " + rnbFourCount);
    console.log("here's the 3-star rating count for rnb: " + rnbThreeCount);
    console.log("here's the 2-star rating count for rnb: " + rnbTwoCount);
    console.log("here's the 1-star rating count for rnb: " + rnbOneCount);
    const soul = "Soul"
    const soulTotal = list.filter((obj) => obj.genre === soul).length
    const soulFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === soul).length;
    const soulFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === soul).length;
    const soulThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === soul).length;
    const soulTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === soul).length;
    const soulOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === soul).length;
    console.log("here's the 5-star rating count for soul: " + soulFiveCount);
    console.log("here's the 4-star rating count for soul: " + soulFourCount);
    console.log("here's the 3-star rating count for soul: " + soulThreeCount);
    console.log("here's the 2-star rating count for soul: " + soulTwoCount);
    console.log("here's the 1-star rating count for soul: " + soulOneCount);
    const ambient = "Ambient"
    const ambientTotal = list.filter((obj) => obj.genre === ambient).length
    const ambientFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === ambient).length;
    const ambientFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === ambient).length;
    const ambientThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === ambient).length;
    const ambientTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === ambient).length;
    const ambientOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === ambient).length;
    console.log("here's the 5-star rating count for ambient: " + ambientFiveCount);
    console.log("here's the 4-star rating count for ambient: " + ambientFourCount);
    console.log("here's the 3-star rating count for ambient: " + ambientThreeCount);
    console.log("here's the 2-star rating count for ambient: " + ambientTwoCount);
    console.log("here's the 1-star rating count for ambient: " + ambientOneCount);
    const pop = "Pop"
    const popTotal = list.filter((obj) => obj.genre === pop).length
    const popFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === pop).length;
    const popFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === pop).length;
    const popThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === pop).length;
    const popTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === pop).length;
    const popOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === pop).length;
    console.log("here's the 5-star rating count for pop: " + popFiveCount);
    console.log("here's the 4-star rating count for pop: " + popFourCount);
    console.log("here's the 3-star rating count for pop: " + popThreeCount);
    console.log("here's the 2-star rating count for pop: " + popTwoCount);
    console.log("here's the 1-star rating count for pop: " + popOneCount);
    const country = "Country"
    const countryTotal = list.filter((obj) => obj.genre === country).length
    const countryFiveCount = list.filter((obj) => obj.rating === fiveRating && obj.genre === country).length;
    const countryFourCount = list.filter((obj) => obj.rating === fourRating && obj.genre === country).length;
    const countryThreeCount = list.filter((obj) => obj.rating === threeRating && obj.genre === country).length;
    const countryTwoCount = list.filter((obj) => obj.rating === twoRating && obj.genre === country).length;
    const countryOneCount = list.filter((obj) => obj.rating === oneRating && obj.genre === country).length;
    console.log("here's the 5-star rating count for country: " + countryFiveCount);
    console.log("here's the 4-star rating count for country: " + countryFourCount);
    console.log("here's the 3-star rating count for country: " + countryThreeCount);
    console.log("here's the 2-star rating count for country: " + countryTwoCount);
    console.log("here's the 1-star rating count for country: " + countryOneCount);
    const ratingCountList = [
        {genre : "Rock", totalCount: rockTotal, fiveCount: rockFiveCount, fourCount: rockFourCount, threeCount: rockThreeCount, twoCount: rockTwoCount, oneCount: rockOneCount},
        {genre : "Hip-Hop", totalCount: hiphopTotal, fiveCount: hiphopFiveCount, fourCount: hiphopFourCount, threeCount: hiphopThreeCount, twoCount: hiphopTwoCount, oneCount: hiphopOneCount},
        {genre : "Jazz", totalCount: jazzTotal, jazzFiveCount: jazzFiveCount, fourCount: jazzFourCount, threeCount: jazzThreeCount, twoCount: jazzTwoCount, oneCount: jazzOneCount},
        {genre : "Soundtrack", totalCount: soundtrackTotal, fiveCount: soundtrackFiveCount, fourCount: soundtrackFourCount, threeCount: soundtrackThreeCount, twoCount: soundtrackTwoCount, oneCount: soundtrackOneCount},
        {genre : "Electronic", totalCount: electronicTotal, fiveCount: electronicFiveCount, fourCount: electronicFourCount, threeCount: electronicThreeCount, twoCount: electronicTwoCount, oneCount: electronicOneCount},
        {genre : "Classical", totalCount: classicalTotal, fiveCount: classicalFiveCount, fourCount: classicalFourCount, threeCount: classicalThreeCount, twoCount: classicalTwoCount, oneCount: classicalOneCount},
        {genre : "Blues", totalCount: bluesTotal, fiveCount: bluesFiveCount, fourCount: bluesFourCount, threeCount: bluesThreeCount, twoCount: bluesTwoCount, oneCount: bluesOneCount},
        {genre : "Metal", totalCount: metalTotal, fiveCount: metalFiveCount, fourCount: metalFourCount, threeCount: metalThreeCount, twoCount: metalTwoCount, oneCount: metalOneCount},
        {genre : "Easy-Listening", totalCount: easyListeningTotal, fiveCount: easyListeningFiveCount, fourCount: easyListeningFourCount, threeCount: easyListeningThreeCount, twoCount: easyListeningTwoCount, oneCount: easyListeningOneCount},
        {genre : "Disco", totalCount: discoTotal, fiveCount: discoFiveCount, fourCount: discoFourCount, threeCount: discoThreeCount, twoCount: discoTwoCount, oneCount: discoOneCount},
        {genre : "Alternative", totalCount: alternativeTotal, fiveCount: alternativeFiveCount, fourCount: alternativeFourCount, threeCount: alternativeThreeCount, twoCount: alternativeTwoCount, oneCount: alternativeOneCount},
        {genre : "RnB", totalCount: rnbTotal, fiveCount: rnbFiveCount, fourCount: rnbFourCount, threeCount: rnbThreeCount, twoCount: rnbTwoCount, oneCount: rnbOneCount},
        {genre : "Soul", totalCount: soulTotal, fiveCount: soulFiveCount, fourCount: soulFourCount, threeCount:soulThreeCount, twoCount:soulTwoCount, oneCount: soulOneCount},
        {genre : "Ambient", totalCount: ambientTotal, fiveCount: ambientFiveCount, fourCount: ambientFourCount, threeCount: ambientThreeCount, twoCount: ambientTwoCount, oneCount: ambientOneCount},
        {genre : "Pop", totalCount: popTotal, fiveCount: popFiveCount, fourCount: popFourCount, threeCount: popThreeCount, twoCount: popTwoCount, oneCount: popOneCount},
        {genre : "Country", totalCount: countryTotal, fiveCount: countryFiveCount, fourCount: countryFourCount, threeCount: countryThreeCount, twoCount: countryTwoCount, oneCount: countryOneCount},
    ]
    const getFiveCountOfGenre = (label) => {
        if (label === 'Rock') {
            return "Rock records with 5 stars: " + rockFiveCount;
        }
        if (label === 'Hip-Hop') {
            return "Hip-Hop records with 5 stars: " + hiphopFiveCount;
        }
        if (label === 'Jazz') {
            return "Jazz records with 5 stars: " + jazzFiveCount;
        }
        if (label === 'Soundtrack') {
            return "Soundtrack records with 5 stars: " + soundtrackFiveCount;
        }
        if (label === 'Electronic') {
            return "Electronic records with 5 stars: " + electronicFiveCount;
        }
        if (label === 'Classical') {
            return "Classical records with 5 stars: " + classicalFiveCount;
        }
        if (label === 'Blues') {
            return "Blues records with 5 stars: " + bluesFiveCount;
        }
        if (label === 'Metal') {
            return "Metal records with 5 stars: " + metalFiveCount;
        }
        if (label === 'Easy-Listening') {
            return "Easy-Listening records with 5 stars: " + easyListeningFiveCount;
        }
        if (label === 'Disco') {
            return "Disco records with 5 stars: " + discoFiveCount;
        }
        if (label === 'Alternative') {
            return "Alternative records with 5 stars: " + alternativeFiveCount;
        }
        if (label === 'RnB') {
            return "RnB records with 5 stars: " + rnbFiveCount;
        }
        if (label === 'Soul') {
            return "Soul records with 5 stars: " + soulFiveCount;
        }
        if (label === 'Ambient') {
            return "Ambient records with 5 stars: " + ambientFiveCount;
        }
        if (label === 'Pop') {
            return "Pop records with 5 stars: " + popFiveCount;
        }
        if (label === 'Country') {
            return "Country records with 5 stars: " + countryFiveCount;
        }
    }
    const getFourCountOfGenre = (label) => {
        if (label === 'Rock') {
            return "Rock records with 4 stars: " + rockFourCount;
        }
        if (label === 'Hip-Hop') {
            return "Hip-Hop records with 4 stars: " + hiphopFourCount;
        }
        if (label === 'Jazz') {
            return "Jazz records with 4 stars: " + jazzFourCount;
        }
        if (label === 'Soundtrack') {
            return "Soundtrack records with 4 stars: " + soundtrackFourCount;
        }
        if (label === 'Electronic') {
            return "Electronic records with 4 stars: " + electronicFourCount;
        }
        if (label === 'Classical') {
            return "Classical records with 4 stars: " + classicalFourCount;
        }
        if (label === 'Blues') {
            return "Blues records with 4 stars: " + bluesFourCount;
        }
        if (label === 'Metal') {
            return "Metal records with 4 stars: " + metalFourCount;
        }
        if (label === 'Easy-Listening') {
            return "Easy-Listening records with 4 stars: " + easyListeningFourCount;
        }
        if (label === 'Disco') {
            return "Disco records with 4 stars: " + discoFourCount;
        }
        if (label === 'Alternative') {
            return "Alternative records with 4 stars: " + alternativeFourCount;
        }
        if (label === 'RnB') {
            return "RnB records with 4 stars: " + rnbFourCount;
        }
        if (label === 'Soul') {
            return "Soul records with 4 stars: " + soulFourCount;
        }
        if (label === 'Ambient') {
            return "Ambient records with 4 stars: " + ambientFourCount;
        }
        if (label === 'Pop') {
            return "Pop records with 4 stars: " + popFourCount;
        }
        if (label === 'Country') {
            return "Country records with 4 stars: " + countryFourCount;
        }
    }
    const getThreeCountOfGenre = (label) => {
        if (label === 'Rock') {
            return "Rock records with 3 stars: " + rockThreeCount;
        }
        if (label === 'Hip-Hop') {
            return "Hip-Hop records with 3 stars: " + hiphopThreeCount;
        }
        if (label === 'Jazz') {
            return "Jazz records with 3 stars: " + jazzThreeCount;
        }
        if (label === 'Soundtrack') {
            return "Soundtrack records with 3 stars: " + soundtrackThreeCount;
        }
        if (label === 'Electronic') {
            return "Electronic records with 3 stars: " + electronicThreeCount;
        }
        if (label === 'Classical') {
            return "Classical records with 3 stars: " + classicalThreeCount;
        }
        if (label === 'Blues') {
            return "Blues records with 3 stars: " + bluesThreeCount;
        }
        if (label === 'Metal') {
            return "Metal records with 3 stars: " + metalThreeCount;
        }
        if (label === 'Easy-Listening') {
            return "Easy-Listening records with 3 stars: " + easyListeningThreeCount;
        }
        if (label === 'Disco') {
            return "Disco records with 3 stars: " + discoThreeCount;
        }
        if (label === 'Alternative') {
            return "Alternative records with 3 stars: " + alternativeThreeCount;
        }
        if (label === 'RnB') {
            return "RnB records with 3 stars: " + rnbThreeCount;
        }
        if (label === 'Soul') {
            return "Soul records with 3 stars: " + soulThreeCount;
        }
        if (label === 'Ambient') {
            return "Ambient records with 3 stars: " + ambientThreeCount;
        }
        if (label === 'Pop') {
            return "Pop records with 3 stars: " + popThreeCount;
        }
        if (label === 'Country') {
            return "Country records with 3 stars: " + countryThreeCount;
        }
    }
    const getTwoCountOfGenre = (label) => {
        if (label === 'Rock') {
            return "Rock records with 2 stars: " + rockTwoCount;
        }
        if (label === 'Hip-Hop') {
            return "Hip-Hop records with 2 stars: " + hiphopTwoCount;
        }
        if (label === 'Jazz') {
            return "Jazz records with 2 stars: " + jazzTwoCount;
        }
        if (label === 'Soundtrack') {
            return "Soundtrack records with 2 stars: " + soundtrackTwoCount;
        }
        if (label === 'Electronic') {
            return "Electronic records with 2 stars: " + electronicTwoCount;
        }
        if (label === 'Classical') {
            return "Classical records with 2 stars: " + classicalTwoCount;
        }
        if (label === 'Blues') {
            return "Blues records with 2 stars: " + bluesTwoCount;
        }
        if (label === 'Metal') {
            return "Metal records with 2 stars: " + metalTwoCount;
        }
        if (label === 'Easy-Listening') {
            return "Easy-Listening records with 2 stars: " + easyListeningTwoCount;
        }
        if (label === 'Disco') {
            return "Disco records with 2 stars: " + discoTwoCount;
        }
        if (label === 'Alternative') {
            return "Alternative records with 2 stars: " + alternativeTwoCount;
        }
        if (label === 'RnB') {
            return "RnB records with 2 stars: " + rnbTwoCount;
        }
        if (label === 'Soul') {
            return "Soul records with 2 stars: " + soulTwoCount;
        }
        if (label === 'Ambient') {
            return "Ambient records with 2 stars: " + ambientTwoCount;
        }
        if (label === 'Pop') {
            return "Pop records with 2 stars: " + popTwoCount;
        }
        if (label === 'Country') {
            return "Country records with 2 stars: " + countryTwoCount;
        }
    }
    const getOneCountOfGenre = (label) => {
        if (label === 'Rock') {
            return "Rock records with 1 star: " + rockOneCount;
        }
        if (label === 'Hip-Hop') {
            return "Hip-Hop records with 1 star: " + hiphopOneCount;
        }
        if (label === 'Jazz') {
            return "Jazz records with 1 star: " + jazzOneCount;
        }
        if (label === 'Soundtrack') {
            return "Soundtrack records with 1 star: " + soundtrackOneCount;
        }
        if (label === 'Electronic') {
            return "Electronic records with 1 star: " + electronicOneCount;
        }
        if (label === 'Classical') {
            return "Classical records with 1 star: " + classicalOneCount;
        }
        if (label === 'Blues') {
            return "Blues records with 1 star: " + bluesOneCount;
        }
        if (label === 'Metal') {
            return "Metal records with 1 star: " + metalOneCount;
        }
        if (label === 'Easy-Listening') {
            return "Easy-Listening records with 1 star: " + easyListeningOneCount;
        }
        if (label === 'Disco') {
            return "Disco records with 1 star: " + discoOneCount;
        }
        if (label === 'Alternative') {
            return "Alternative records with 1 star: " + alternativeOneCount;
        }
        if (label === 'RnB') {
            return "RnB records with 1 star: " + rnbOneCount;
        }
        if (label === 'Soul') {
            return "Soul records with 1 star: " + soulOneCount;
        }
        if (label === 'Ambient') {
            return "Ambient records with 1 star: " + ambientOneCount;
        }
        if (label === 'Pop') {
            return "Pop records with 1 star: " + popOneCount;
        }
        if (label === 'Country') {
            return "Country records with 1 star: " + countryOneCount;
        }
    }
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
        return (
            <div className="bg-dark mx-auto" style={{padding: "5px"}}>
                { payload[0].value > 1 ?  
                    <p className="label">{`${label} : ${payload[0].value}  records`}</p>
                    : <p className="label">{`${label} : ${payload[0].value}  record`}</p>
                }
                <p className='label'>{getFiveCountOfGenre(label)}</p>
                <p className='label'>{getFourCountOfGenre(label)}</p>
                <p className='label'>{getThreeCountOfGenre(label)}</p>
                <p className='label'>{getTwoCountOfGenre(label)}</p>
                <p className='label'>{getOneCountOfGenre(label)}</p>
            </div> 
        
        );
        }}
        return (
            <div style={{display: "flex", justifyContent: "center", marginRight: "70px", marginTop: "50px"}}>
                <BarChart width={1600} height={600} data={ratingCountList}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="genre" />
                    <YAxis dataKey="totalCount" />
                    <Tooltip content={<CustomTooltip />}/>
                    <Legend />
                    <Bar dataKey="totalCount" fill="royalBlue" barSize={10}/>
                    <Bar dataKey="fiveCount" fill="gold" barSize={10}/>
                    <Bar dataKey="fourCount" fill="silver" barSize={10}/>
                    <Bar dataKey="threeCount" fill="brown" barSize={10}/>
                    <Bar dataKey="twoCount" fill="darkGreen" barSize={10}/>
                    <Bar dataKey="oneCount" fill="red" barSize={10}/>
                </BarChart>
            </div>
        )
}
export default RatingChart;