export default function ErrorMessage(props){
    return (
        <>
        <div className={props.className}>
            {props.message}
        <div>⚠</div>
        </div>
        </>
    )
}