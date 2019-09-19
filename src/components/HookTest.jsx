import React, { useState } from 'react'

export default function HookTest() {
    // useState(initState) 
    const [count, setCount] = useState(0);

    // 多个状态
    const [age] = useState(20);
    const [fruit, setFruit] = useState('banana');
    const [fruits, setFruits] = useState(['apple', 'bananas']);

    return (
        <div>
            <p>点击了{count}次</p>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <br />

            <p>年龄{age}</p>
            <p>水果{fruit}</p>
            <ul>
                {fruits.map(f =>(<li key={f}>{f}</li>))}
            </ul>

        </div>
    )
}
