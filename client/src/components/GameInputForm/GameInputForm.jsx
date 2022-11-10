import './GameInputForm.css';

function GameInputForm(){

    return(
        <>
        <span>Componente Formulario</span>
        <div style={{"border-style": "solid", "border-color": "red"}} id='form-div'>
        <form id="form-container" action="">
            <label htmlFor="nombre">Título: </label>
            <input name="nombre" type="text" />
            <label htmlFor="fecha">Fecha de estreno: </label>
            <input name="fecha" type="text" />
            <label htmlFor="rating">Rating: </label>
            <input name="rating" type="text" />
            <label htmlFor="platforms">Plataformas: </label>
            <input name="platforms" type="text" />
            <label htmlFor="description">Descripción: </label>
            <textarea name="description" rows="4" cols="50"></textarea>
            <input type="submit" value="Agregar juego" />
        </form>
        </div>
        </>
    )
}

export default GameInputForm;