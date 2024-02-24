import {countAtom} from '../store/atoms/count'
import { useRecoilState } from 'recoil';
function Button1() {
    const [count, setCount] = useRecoilState(countAtom)
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