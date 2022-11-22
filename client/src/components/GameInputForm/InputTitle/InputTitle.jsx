import ErrorMessage from "../ErrorMessage/ErrorMessage"

export default function InputTitle ({title, setTitle, validCharacters}){

    const checkInput = (input) => {
        if(validCharacters){
            setTitle({...title, valid : !validCharacters.test(input)})
        }
    }

    return (
        <div className="single-input-container">
        <label className='add-game-form-label' htmlFor="nombre">Title: </label>
            <input
                className="form-value-input"
                type="text"
                value={title.value}
                onChange={(e)=>setTitle({...title, value : e.target.value})}
                onKeyDown={(e)=>checkInput(e.target.value)}
                onBlur={(e)=>checkInput(e.target.value)}
                />
            <ErrorMessage
                className={title.valid ? "hidden" : "errorMessage"}
                message={"Title is invalid!"}
            />
        </div>
    )
}