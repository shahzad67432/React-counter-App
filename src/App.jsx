import { useState } from "react";
import {ContextProvider, CountProvider} from "./context/ContextProvider";
import Counter from "./pages/Counter";

function App() {

  return (
    <div>
      <CountProvider>
        <Counter/>
      </CountProvider>
    </div>
   );
}

export default App;