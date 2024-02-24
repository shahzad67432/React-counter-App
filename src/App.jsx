import { RecoilRoot } from "recoil";
import Counter from "./pages/Counter";

function App() {

  return (
    <div>
        <RecoilRoot>
          <Counter/>
        </RecoilRoot>
    </div>
   );
}

export default App;