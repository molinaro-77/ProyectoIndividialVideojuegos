export default function InputDescription({description, setDescription}){
    
    return (
        <div className="single-input-container">
        <label 
            className='add-game-form-label'
            htmlFor="description">Descripción: </label>
        <textarea
            className="form-value-input"
            name="description" 
            rows="4" 
            cols="50"
            value={description.value}
            onChange={(e)=>{setDescription({...description, value : e.target.value});}}
            ></textarea>
        </div>
    )
}