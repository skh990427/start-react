import { useState } from "react";

function MyButton() {
    const [count, setCount] = useState(0);

    function handleCountClick() {
        setCount(count + 1);
    }

    // function handleClick() {
    //     alert('You clicked me');
    // }

    return (
        <button onClick={handleCountClick}>
            Click {count} times
        </button>
    )
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/><br/>
            <MyButton/>
        </div>
    );
};
