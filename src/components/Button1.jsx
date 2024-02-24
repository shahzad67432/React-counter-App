import { useContext } from "react";
import {ContextProvider} from "../context/ContextProvider";

function Button1() {
    const {count, setCount} = useContext(ContextProvider)
    return (
        <div>
            <button onClick={()=>{setCount(count + 1)}}>
                Increment
            </button>
            <p>
                {count}
            </p>
        </div>
     );
}

export default Button1;