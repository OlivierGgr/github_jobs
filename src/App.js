import React, { useState, useEffect } from 'react';
import { getJobsOnMount, getJobsFilter } from './API/GithubAPI'
import Search from './Components/Search/Search'
import Job from './Components/Job/Job'
import './App.css';

function App() {

  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  // async function fetchOffers() {
  //   await fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?")
  //   .then(res => res.json())
  //   .then(res => {
  //     setOffers(res)
  //     setIsLoading(false)
  //   })
  //   .catch(err => console.log(err))
  // }

  // useEffect(() => {fetchOffers()}, []);
  useEffect(() => {
    getJobsOnMount()
    .then(res => {
          setOffers(res)
          setIsLoading(false)
        })
  }, []);


  const jobsFactory = (data) => {
    if (!isLoading) {
      return data !== [] ?
      data.map((item, index) => 
      { return <Job title={item.title} 
                    location={item.location} 
                    company={item.company} 
                    created_at={item.created_at}
                    type={item.type}
                    logo={item.company_logo}
                    /> 
                  })
                  : "no offers match"
    } else return "Loading ..."
  }

  const filterJobs = (incomingData) => {
    // console.log("incomingData from App => " + incomingData)
    // console.log(incomingData[0])
    // console.log(incomingData[1])
    // console.log(incomingData[2])
    // let filteredOffers = offers
    //   .filter(offer => 
    //     offer.title.toLowerCase().includes(incomingData[0]) || offer.title.toLowerCase().includes(incomingData[0]))
    //   .filter(offerFilteredByTerm => 
    //     offerFilteredByTerm.location == incomingData[1] && incomingData[1] !== "")
    //   .filter(offerFilteredByTermAndLocation =>
    //     offerFilteredByTermAndLocation.type.toLowerCase() === "full time" && incomingData[2] === true)
    // jobsFactory(filteredOffers)
    setOffers([])
    setIsLoading(true)
    incomingData.forEach(element => element === "" ? element = false : false)
    console.log("incomingData in filterJobs function : "+incomingData)
    getJobsFilter(incomingData[0], incomingData[2], incomingData[1])
      .then(res => {
        setOffers(res)
        setIsLoading(false)
      })
  }

  return (
    <div className="App">
      <div className="titleContainer">
        <h1>Github Jobs</h1>
      </div>

      <div className="bodyContainer" >
        <div className="searchBodyContainer" style={{marginBottom:'8%'}}>
          <Search dataFromSearch={data => filterJobs(data)}/>
        </div>
        <div className="listResultsContainer">
          <div className="jobContainerTopBlueBar"></div>
          {jobsFactory(offers)}
        </div>
      </div>
    </div>
  );
}

export default App;
