export default function InputReleaseDate({releaseDate, setReleaseDate}){
    
    return (
        <div className="single-input-container">
        <label className='add-game-form-label' htmlFor="fecha">RELEASE DATE:</label>
            <input
                className="form-value-date-input"
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
        </div>
    )
}