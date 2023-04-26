import { darkMode, lightMode } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import '../css/darkMode.css'

const DarkMode = () => {
    const mode = useSelector((state) => state.mode)

    const dispatch = useDispatch();

    return(
        <>
            <div className="contenedor"> 
                {mode}
                <button onClick={() => dispatch(darkMode())}> Dark Mode </button>
                <button onClick={() => dispatch(lightMode())}> Light Mode </button>
            <div>
                <h1>Bienvenidos a la página donde solo podran cambiar el modo</h1>
                <p>Si usted ingresó en la página para obtener informacion o comprar algo, se encuentra en el lugar equivocado.</p>
            </div>
            </div>
        </>
    )
}

export default DarkMode;