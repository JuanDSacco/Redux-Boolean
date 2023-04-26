import { darkMode, lightMode } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import '../css/darkMode.css'

const DarkMode = () => {
    const mode = useSelector((state) => state.mode)

    const dispatch = useDispatch();
    console.log(mode);
    return(
        <>
            {
                mode === true ? 
                <div className="lightMode">
                    <button onClick={() => dispatch(lightMode())}>LightMode</button>
                    <div className="lightMode">
                        <h4>Bienvenidos a la página donde solo podran cambiar el modo</h4>
                        <p>Si usted ingresó en la página para obtener informacion o comprar algo, se encuentra en el lugar equivocado.</p>
                    </div>
                </div>
                :
                <div className="darkMode">
                    <button onClick={() => dispatch(darkMode())}>DarkMode</button>
                    <div className="darkMode">
                        <h4>Bienvenidos a la página donde solo podran cambiar el modo</h4>
                        <p>Si usted ingresó en la página para obtener informacion o comprar algo, se encuentra en el lugar equivocado.</p>
                    </div>
                </div>
            }
        </>
        
    )
}

export default DarkMode;