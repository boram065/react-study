import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const StateDemoComponent = function(props) {
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
    const btnGreenStyle = {
        backgroundColor: "green",
        borderColor: "green",
        color: "white"
    }

    // 저장할 상태값과 관련된 제약이 없으므로 객체도 저장 가능
    const [state, setState] = useState({
        value1: "hello",
        value2: 1000,
        value3: "최보람"
    })

    return (
        <div style={divStyle}>

            <button style={btnRedStyle} onClick={() => {
                if(state.value1 === "hello") {
                    // 기존 객체를 복사하는 과정에서 새롭게 값을 갱신해주는 것을 확인 가능
                    setState( { ...state, value1: "bye" } )

                    // 이렇게 작성해도 상관없음(참조를 바꿨으니까)
                    // const newState = {}
                    // newState.value1 = "bye"
                    // newState.value1 = state.value1
                    // setState(newState)

                } else {
                    setState( { ...state, value1: "hello" } )
                }
            }}>{state.value1}</button>

            <br />

            <button style={btnBlueStyle} onClick={() => {
                setState( { ...state, value2: state.value2 * 2 } )
            }}>{state.value2}</button>

            <br />

            <button style={btnGreenStyle} onClick={() => {
                if(state.value3 === "최보람") {
                    setState({...state, value3: "3413"})
                } else {
                    setState({...state, value3: "최보람"})
                }
            }}>{state.value3}</button>

        </div>
    )
}

root.render(<StateDemoComponent />)