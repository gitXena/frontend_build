export default function WorkingProcessComponent({action, title, explanation}){
    return(
    <div className="processcomponent-section">
        <div>
            <img src={action} alt="" />
            <h2>{title}</h2>
            <p>{explanation}</p>
        </div>
        </div>
        );

}