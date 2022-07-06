const Jobs = (props)=>{
    return(
        <li>
            <h2>{props.jobname}</h2>
            <h3>{props.salary}</h3>
            <p>{props.openingText}</p>
        </li>
    )
}

export default Jobs;