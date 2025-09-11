export default function ReviewCards({title,review,customerName,daysAgo}){
    return(
        <div className="review-cards">
        <h3>{title}</h3>
        <hr/>
        <p>{review}</p>
        <p><b>{customerName}</b> <span>- Verified user </span> </p>
        
        <p><img src="/images/stars-5-1.svg" alt="" />{daysAgo} days ago</p>
        
        </div>
    );
}