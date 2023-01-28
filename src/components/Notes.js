
export function Notes(props){
    const {title, text} = props;

    return(
        <div>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}