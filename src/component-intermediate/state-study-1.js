// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Counter(props) {
    // 버튼 꾸미기
    const divStyle = {
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    const btnRedStyle = {
       backgroundColor: "red",
       borderColor: "red",
       marginBottom: "10px",
       color: "white"
    }
    const btnBlueStyle = {
        backgroundColor: "blue",
        borderColor: "blue"
    }

    const [ count, setCount ] = useState(0)

    if (count < 0) {
        setCount(0);
    }

    return (
        <div style={divStyle}>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)} style={btnRedStyle}>증가</button>
            <button onClick={() => setCount(count-1)} style={btnBlueStyle}>감소</button>
        </div>
    );
}

root.render(<Counter />)