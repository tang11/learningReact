
import React, { useState } from "react";

function Count() {
    const  init = 0;
    const [count, setCount] = useState(0);

    return (
        <div>
            Count: {count}
            <button onClick = {() => setCount(init)}>reset</button>
            <button onClick ={() => setCount(count+1)}>increase</button>
            <button onClick ={() => setCount(count -1)}>decrease</button>
        </div>
    )
}

export default Count