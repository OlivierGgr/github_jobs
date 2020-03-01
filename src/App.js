import React, { useState, useEffect } from 'react';
import Search from './Components/Search/Search'
import Job from './Components/Job/Job'
import './App.css';

function App() {

  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  async function fetchOffers() {
    await fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=node&location=new+york")
    .then(res => res.json())
    .then(res => {
      setOffers(res)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {fetchOffers()}, []);

  const jobsFactory = () => {
    if (!isLoading) {
      return offers !== [] ?
      offers.filter(offer => offer.company= "The Atlantic").map((item, index) => 
      { return <Job title={item.title} 
                    location={item.location} 
                    company={item.company} 
                    created_at={item.created_at}
                    logo={item.company_logo}
                    /> 
                  // }, () => setIsLoading(false))
                  })
                  : "no offers match"
    } else return "Loading ..."
  }

  console.log(offers)

  return (
    <div className="App">
      <div className="titleContainer">
        <h1>Github Jobs</h1>
      </div>

      <div className="bodyContainer" >
        <div className="searchBodyContainer" style={{marginBottom:'3%'}}>
          <Search />
        </div>
        <div className="listResultsContainer">
        {jobsFactory()}
        </div>
      </div>
    </div>
  );
}

export default App;
