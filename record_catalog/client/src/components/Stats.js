import BigPie from "./BigPie"
import RatingChart from "./RatingChart"
import ReleaseYearChart from "./ReleaseYearChart"



const Stats = () => {
    return(
        <div className="p-3 mb-2 bg-dark" style={{color: "gold", height:"100%", width:"100%", display: "flex", flexDirection: "column", padding: "80px" }}>
            <h2>Total Records by Genre</h2>
            <BigPie/>
            <h2>Total Records by Year</h2>
            <ReleaseYearChart />
            <h2>Ratings by Genre</h2>
            <RatingChart />
        </div>
    )
}
export default Stats;