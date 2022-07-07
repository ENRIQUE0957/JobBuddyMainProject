const Jobs = (props)=>{
    console.log('last component')
    return(
        <li>
            <h2>{props.jobname}</h2>
            <h3>{props.salary}</h3>
            <p>{props.openingText}</p>
        </li>
    )
}

export default Jobs;