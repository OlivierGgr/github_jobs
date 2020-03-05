import React, { useState, useEffect } from 'react';
import { getJobsOnMount, getJobsFilter } from './API/GithubAPI'
import Search from './Components/Search/Search'
import Jobs from './Components/Jobs/Jobs'
import JobItem from './Components/JobItem/JobItem'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  const [page, setPage] = useState(1)
  const [offers, setOffers] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const [selectedOffer, setSelectedOffer] = useState()
  const [loadMore, setLoadMore] = useState(false)

  useEffect(() => {
    getJobsOnMount(page)
    .then(res => {
          setOffers(res)
          setIsLoading(false)
    })
  }, []);

  const loadMorePositions = () => {
    setPage(page +1)
    getJobsOnMount(page +1)
      .then(res => {
        Array.prototype.push.apply(offers, res)
      })
    setLoadMore(true)
  }

  console.log(offers)


  const jobsFactory = (data) => {
    if (!isLoading) {
      return data !== [] ?
      data.map((item, index) => 
      { return <Jobs title={item.title} 
                    location={item.location} 
                    company={item.company} 
                    created_at={item.created_at}
                    type={item.type}
                    logo={item.company_logo}
                    id={item.id}
                    key={index}
                    /> 
                  })
                  : 
                  <h2>
                    no positions available
                  </h2>
    } else return (
      <div className="loadingMessageContainer">
        Loading ...
      </div>
    )
  }

  const filterJobs = (incomingData) => {
    setOffers([])
    setIsLoading(true)
    incomingData.forEach(element => element === "" ? element = false : false)
    getJobsFilter(incomingData[0], incomingData[2], incomingData[1])
      .then(res => {
        setOffers(res)
        setIsLoading(false)
      })
  }

  return (
    <div className="App">
      {console.log("re-rendered")}
      <div className="titleContainer">
        <h1>Github Jobs</h1>
      </div>

      <div className="bodyContainer" >
        <div className="searchBodyContainer" style={{marginBottom:'5%'}}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => (
              <div>
                <Search dataFromSearch={data => filterJobs(data)}/>
                <div className="listResultsContainer">
                    <div className="jobContainerTopBlueBar"></div>
                    {jobsFactory(offers)}
                </div>
                <button id="seeMoreBtn" onClick={() => loadMorePositions()}>See more</button>
              </div>
            )}>
            </Route>
            <Route path="/jobOffer/:id" render={() => (
              <div className="listResultsContainer">
                <div className="jobContainerTopBlueBar"></div>
                <JobItem />
              </div>
            )}/>
          </Switch>
        </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
