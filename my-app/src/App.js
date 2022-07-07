
import './App.css';
import JobsList from './Components/JobsList';
import react,{useState} from 'react'
import Header from './Components/UI/Header';

function App() {
  console.log("root")
  //creating the state for the API data
  const[jobsData,updateJobsData] = useState([])
  function getAPI(){
    
    //built in method to fetch URL and display data 
    fetch('https://remotive.com/api/remote-jobs?limit=5').then((response) =>{
    console.log(response)  
    return response.json()
    }).then((data) =>{
     console.log(data.jobs)
     const jobData = data.jobs.map(jobs =>{
      return{
      key:Math.floor((Math.random()*100)+1),
      jobName:jobs.category,
      id:jobs.id,
      jobSeason:jobs.job_type,
      salary:jobs.salary
  
  
    }
     })
     console.log(jobData)
      updateJobsData(jobData)
     
        
      //creating state to store the data into a state object so we can rerender the interface 
    })
  }

 
  return (
    <div className="App">
      <Header></Header>
     
     <section className = "section">
      
      <button className='button' onClick={getAPI}></button>
      <JobsList jobs1 ={jobsData}></JobsList>
     </section>
    </div>
  );
}

export default App;
