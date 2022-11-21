export default function InputReleaseDate({releaseDate, setReleaseDate}){
    
    return (
        <>
        <label htmlFor="fecha">Fecha de estreno: </label>
            <input 
                name="fecha"
                type="date"
                value={releaseDate.value}
                max="2100-01-01"
                onKeyDown={(e)=>{e.preventDefault()}}
                onChange={(e)=>{setReleaseDate({
                    ...releaseDate,
                    value : e.target.value,
                    valid : true
                });
            }}/>
        </>
    )
}