import ErrorMessage from "../ErrrorMessage/ErrorMessage"

export default function InputTitle ({title, setTitle, validCharacters}){

    const checkInput = (input) => {
        if(validCharacters){
            setTitle({...title, valid : !validCharacters.test(input)})
        }
    }

    return (
        <>
        <label htmlFor="nombre">Título: </label>
            <input
                type="text"
                value={title.value}
                onChange={(e)=>setTitle({...title, value : e.target.value})}
                onKeyDown={(e)=>checkInput(e.target.value)}
                onBlur={(e)=>checkInput(e.target.value)}
                />
            <ErrorMessage
                className={title.valid ? "hidden" : "errorMessage"}
                message={"Es necesario ingresar un título"}
            />
        </>
    )
}