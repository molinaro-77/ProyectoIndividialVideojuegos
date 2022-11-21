export default function InputDescription({description, setDescription}){
    
    return (
        <>
        <label htmlFor="description">Descripción: </label>
        <textarea 
            name="description" 
            rows="4" 
            cols="50"
            value={description.value}
            onChange={(e)=>{setDescription({...description, value : e.target.value});}}
            ></textarea>
        </>
    )
}