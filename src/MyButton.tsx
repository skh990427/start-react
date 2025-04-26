import { useState } from "react";

interface MyButtonProps {
    count: number; // count는 숫자 타입
    onClick: () => void; // onClick은 매개변수가 없고 반환값이 없는 함수
}

function MyButton({ count, onClick } : MyButtonProps) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleCountClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton count={count} onClick={handleCountClick}/><br/>
            <MyButton count={count} onClick={handleCountClick}/>
        </div>
    );
};
