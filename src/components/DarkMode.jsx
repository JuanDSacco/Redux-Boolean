import { darkMode, lightMode } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import '../css/darkMode.css'

const DarkMode = () => {
    const mode = useSelector((state) => state.mode)

    const dispatch = useDispatch();

    return(
        <>
            {
                mode === true ? 
                <div className="modeContainer">
                    <div className="lightModeContainer">
                        <div className="divButton">
                        <button className="btnDark" onClick={() => dispatch(lightMode())}>Dark</button>
                        </div>
                        <div className="lightMode">
                            <h4>Bienvenidos a la página donde solo podran cambiar el modo</h4>
                            <p>Cree ésta página para afianzar conceptos de redux, iniciando la app con vite.</p>
                        </div>
                    </div>
                </div>
                :
                <div className="modeContainer">
                    <div className="darkModeContainer">
                        <div className="divButton">
                        <button onClick={() => dispatch(darkMode())}>Standar</button>
                        </div>
                        <div className="darkMode">
                            <h4>Bienvenidos a la página donde solo podran cambiar el modo</h4>
                            <p>Cree ésta página para afianzar conceptos de redux, iniciando la app con vite.</p>
                        </div>
                    </div>
                </div>
            }
        </>
        
    )
}

export default DarkMode;