import React from "react";
import { leaderboard as data } from "./leaderboard";
import "./style.css";

function Leaderboard(){
    return(<>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>
    )
}
export default Leaderboard;