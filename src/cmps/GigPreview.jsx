import { Link } from "react-router-dom"
import { GigSlider } from "./GigSlider"
import { HoverableComponent } from "./HoverableComponent"
import { useState } from "react"
export function GigPreview({ gig, onRemoveGig, onUpdateGig }) {

    const defaultImgUrl = 'https://res.cloudinary.com/de2rdmsca/image/upload/v1696229330/no-image-symbol-missing-available-icon-gallery-vector-47533708_yv5p2x.jpg'

    const [isHovered, setHovered] = useState(false)

    return (
        
        <li className="gig-preview" key={gig._id}  onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>

            <GigSlider gig={gig} isHovered={isHovered} />
           
            <div className="flex owner-details">
                <div className="flex owner-details-1">
                    <img src={gig.owner.imgUrl} alt="progile-img" className="owner-profile-img" />
                    <span className="owner-fullname">{gig.owner.fullname}</span>
                </div>

                <div className="rating-price ">
                    <Link to={`/gig/${gig._id}`}> <h3 className="owner-gig-title">{gig.title}</h3></Link>
                </div>

                <div className="flex rate-wrapper">
                    <span className="star-svg">
                        <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path>
                        </svg>
                    </span>
                    <span className="owner-rate">{gig.owner.rate}</span>
                    <span className="owner-number-rates">(137)</span>
                </div>

            </div>


            <span className="gig-price">From ${gig.price.toLocaleString()}</span>
        </li>

    )
}