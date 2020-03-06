import React, { useState, useEffect} from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';
import { getJobById } from '../../API/GithubAPI'
import './JobItem.css'

function JobItem(props) {
    const [jobDetails, setJobDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)
    // TAKE ID FROM URL
    const { id } = useParams()

    // USE ID TO LOAD JOB POSITION
    useEffect(() =>  {
        getJobById(id)
            .then(res => {
                setJobDetails(res)
                setIsLoading(false)
            })
    }, []);

    // FORMAT DATE FOR HUMAN EYES
    const dateFormatting = () => {
        let jobDate = jobDetails.created_at.split(' ')
        return `${jobDate[2]} ${jobDate[1]} ${jobDate[5]}`
    }

    return (isLoading ? 
        <div className="jobItemContainer">
            <h2>Loading</h2>
        </div>
    :
        <div className="jobItemContainer">
            <div className="jobItemContainerTop">
                    <div className="jobItemContainerTopReturn">
                        <Link to="/"><button className="jobItemContainerTopReturnBtn">Return</button></Link>
                    </div>
                    <div className="jobItemContainerTopTitle">
                        {jobDetails.title}
                    </div>

            </div>
            <div className="jobItemContainerDate info">
                {dateFormatting()}
            </div>
            <div className="jobItemContainerCompany">
                <div className="jobItemContainerCompanyLogo"><img src={jobDetails.company_logo} alt={jobDetails.company}/></div>
                <div className="jobItemContainerCompanyName">{jobDetails.company}</div>
            </div>
            <div className="jobItemContainerInfo info">
                <div className="jobItemContainerInfoLocation">{jobDetails.location}</div>
                <div className="jobItemContainerInfoType">{jobDetails.type}</div>
            </div>
            <div className="jobItemContainerDescription">
            {parse(jobDetails.description)}
            </div>
            <hr id="jobItemHrToApply"/>
            <div className="jobItemContainerApply">
                <p id="howToApply">
                    How to apply
                </p>
                {parse(jobDetails.how_to_apply)}
            </div>
        </div>
    )
}

export default JobItem;