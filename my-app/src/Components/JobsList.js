import React from "react";
import Jobs from "./Jobs";
const JobsList = props =>{
    console.log(props.jobs1)
    return(
         <div>
            <ul>
               {props.jobs1.map((job)=>(
                <Jobs
                key ={job.key}
                id ={job.id}
                releaseDate = {job.Name}
                openingText = {job.jobSeason}
                salary ={job.salary}
                jobname = {job.jobName}
                />
               ))} 
            </ul>
         </div>
    )
}

export default JobsList;