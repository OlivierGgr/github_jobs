import React from 'react'
import './Job.css'

function Job(props){
    const dateFormatting = () => {
        let jobDate = props.created_at.split(' ')
        console.log(jobDate)
        return `${jobDate[2]} ${jobDate[1]} ${jobDate[5]}`
    }

    return(
        <div className="jobItemContainer">
            {/* <div className="jobItemSmall">
                <span>
                    {props.title}
                </span>
                <span>
                    {props.location}
                </span>
                <span>
                    {props.company}
                </span>
                <span>
                    {dateFormatting()}
                </span>
            </div> */}

            <div className="jobCard">
                <div className="jobCardCompanyLogo">
                    {props.logo !== null ?
                        <img src={props.logo} alt={props.company} style={{ height: "1.6rem"}}/>
                        : <img src="http://via.placeholder.com/66x25" alt={props.company} style={{ height: "1.6rem"}}/>
                                    }
                </div>
                <div className="jobCardInfo">
                    <div className="jobCardTitle">
                    {props.title}
                </div>
                <div className="jobCardBody">
                    <span>
                    {props.company}
                    </span>
                    <span>
                    {props.location}
                </span>
                <span>
                    {dateFormatting()}
                </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

// type
// url
// created_at
// company
// company_url
// location
// title
// description
// how_to_apply
// company_logo

// id

export default Job;