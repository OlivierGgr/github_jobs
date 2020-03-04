import React from 'react'
import { Link } from 'react-router-dom'
import './Jobs.css'

function Jobs(props){
    const dateFormatting = () => {
        let jobDate = props.created_at.split(' ')
        return `${jobDate[2]} ${jobDate[1]} ${jobDate[5]}`
    }

    const expand = (id) => {
        // props.dataFromSearch(id)
    }

    return(
        <div className="jobItemContainer">
            <div className="jobCard" 
            >
                <div className="jobCardCompanyLogo">
                    {props.logo !== null ?
                        <img src={props.logo} alt={props.company} style={{ height: "1.6rem"}}/>
                        : <img src="http://via.placeholder.com/66x25" alt={props.company} style={{ height: "1.6rem"}}/>
                                    }
                </div>
                <div className="jobCardInfo">
                    <div className="jobCardTitle">
                    <Link 
                        style={{ textDecoration: "none", color: "inherit"}}
                        to={{ pathname: "/jobOffer/"+props.id,
                        key:props.id,
                        }}>
                        {props.title}
                    </Link>
                </div>
                <div className="jobCardBody">
                    <span>
                    {props.company}
                    </span>
                    <span>
                    {props.location} - {props.type}
                </span>
                <span>
                    {dateFormatting()}
                </span>
                    </div>
                <hr style={{margin: "8px 10%", border: "1px solid #92BCEA"}}/>
                {expand(props.id)}
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

export default Jobs;