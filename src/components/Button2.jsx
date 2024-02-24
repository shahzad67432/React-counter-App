import {countAtom} from '../store/atoms/count'
import { useRecoilState } from 'recoil';

function Button2() {
    const [count, setCount] = useRecoilState(countAtom)
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