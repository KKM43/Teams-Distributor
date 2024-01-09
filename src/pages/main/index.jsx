import { useNavigate } from "react-router-dom"

export const Main = () => {
    const navigate = useNavigate();


    const gotoCoinToss = () => {
        navigate("/coin");
    }

    const gotoTeams = () => {
        navigate("/team");
    }

    return(
        <div className="container">
            <div className="card">
            <h1 className="heading">Cricket Teams</h1>
            </div>
            <div className="btn-group">
                <button className="coin-btn" onClick={gotoCoinToss} >Coin Toss</button>
                <button className="team-btn" onClick={gotoTeams} >Teams Genrator</button>
            </div>
        </div>
    )
}