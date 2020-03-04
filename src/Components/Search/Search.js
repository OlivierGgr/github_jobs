import React, { useState, useEffect, useRef} from 'react';
import './Search.css';

function Search(props) {

    const [userSearch, setUserSearch] = useState('')
    const [userLocation, setUserLocation] = useState('')
    const [fullTime, setFullTime] = useState(false)

    //didMountRef KEEPS USEEFFECT FROM BEING TRIGGERED ON MOUNT
    const didMountRef = useRef(false)
    useEffect(() => {
        if(didMountRef.current) { 
        } else didMountRef.current = true
    })

    const userSearchInputs = (data) => {
        props.dataFromSearch(data)
    }

    const smallScreen = () => {
        return(
            <div className="smallSearchContainer">
            <div className="smallInputsContainer">
                <div className="smallSearchBarContainer">
                    <input id="searchByTerm" type="text" placeholder="Search jobs by term" value={userSearch} onChange={e => setUserSearch(e.target.value)}/>
                </div>
                <div className="smallLocationFulltimeContainer">
                    <div className="smallLocationContainer">
                        <input type="text" placeholder="Location" value={userLocation} onChange={e => setUserLocation(e.target.value)}/>
                    </div>
                    <div className="smallFullTimeContainer">
                        <label id="fulltimeLabel" htmlFor="fulltime" >Full time only</label>
                        <input type="checkbox" name="fulltime" value={fullTime} 
                        onClick={() => setFullTime(!fullTime)}/>
                    </div>
                </div>

            </div>

            <div className="smallButtonContainer">
                <button onClick={() => userSearchInputs([userSearch, userLocation, fullTime])}>Search</button>
            </div>
        </div>
        )
    }

    const standardScreen = () => {
        return(
            (
                <div className="searchContainer">
                    <div className="searchBarContainer">
                        <input type="text" placeholder="Search jobs by term" value={userSearch} onChange={e => setUserSearch(e.target.value)}/>
                    </div>
                    <div className="locationContainer">
                        <input type="text" placeholder="Location" value={userLocation} onChange={e => setUserLocation(e.target.value)}/>
                    </div>
                    <div className="fullTimeContainer">
                        <label id="fulltimeLabel" htmlFor="fulltime">Full time only</label>
                        <input type="checkbox" name="fulltime" value={fullTime} 
                        onClick={() => setFullTime(!fullTime)}/>
                    </div>
                    <div className="buttonContainer">
                        <button onClick={() => userSearchInputs([userSearch, userLocation, fullTime])}>Search</button>
                    </div>
                </div>
              )
        )
    }
        const [windowWidth, setWindowWidth] = useState(0);
        const [windowHeight, setWindowHeight] = useState(0);
        let resizeWindow = () => {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight);
        };
      
        useEffect(() => {
          resizeWindow();
          window.addEventListener("resize", resizeWindow);
          return () => window.removeEventListener("resize", resizeWindow);
        }, []);

    return windowWidth < 500 ?
        smallScreen()
        : standardScreen()
}

export default Search;
