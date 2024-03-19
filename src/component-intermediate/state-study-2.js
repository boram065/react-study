// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const MultipleStateComponent = function(props) {
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
       color: "white"
    }
    const btnBlueStyle = {
        backgroundColor: "#79CDFD",
        borderColor: "#79CDFD"
    }

    // useState 함수를 원하는 만큼 호출하여 여러 상태값을 관리할 수 있음
    const [count, setCount] = useState(0)
    const [text, setText] = useState("a")

    return (
        <div style={divStyle}>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} style={btnRedStyle}>증가</button>
            <h1>{text}</h1>
            <button onClick={() => setText(text + "a")} style={btnBlueStyle}>a 추가</button>
        </div>
    )
}

root.render(<MultipleStateComponent />)