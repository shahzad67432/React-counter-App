import { useContext } from "react";
import {ContextProvider} from "../context/ContextProvider";

function Button2() {
    const {count, setCount} = useContext(ContextProvider)
    return (
        <div>
            <button onClick={()=>{setCount(count - 1)}}>
                Deccrement
            </button>
            <p>
                {count}
            </p>
        </div>
     );
}

export default Button2;