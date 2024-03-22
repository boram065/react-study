import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// Q) 사용자 정보를 저장하는 UserProfile 컴포넌트를 만들고 
// 3개의 상태(userName, userAge, emailAddress)를 추가하고 적절한 기본값을 useState로 전달하여 출력할 수 있도록 코드 작성 (A: sol_user_profile)
const UserProfile = function(props) {
    const [userName, setUserName] = useState({userName: "최보람"})
    const [userAge, setUserAge] = useState({userAge: "3413"})
    const [emailAddress, setEmailAddress] = useState({emailAddress: "w2216@e-mirim.hs.kr"})

    return(
        <div>
            <p>{userName.userName}</p>
            <p>{userAge.userAge}</p>
            <p>{emailAddress.emailAddress}</p>
        </div>
    )
}
// root.render(<UserProfile />)

// Q) 계산용 컴포넌트 만들기
// 결과로 "1 + 2 = 3"과 같은 형식의 문자열 출력 (태그는 아무거나(ex: h1, p 등등) 사용 가능)
function Calculator({num1, num2, op}) {
    var result = null;
    if (op === "+") {
        result = num1+num2;
    } else if(op === "-"){
        result = num1-num2;
    } else {
        return <div>정확한 연산자를 제공해주세요.</div>
    }

    return (
        <div>{num1} {op} {num2} = {result}</div>
    )
}

// root.render(
//     <div>
//         <Calculator num1={1} num2={2} op="+" />
//         <Calculator num1={1} num2={2} op="-" />
//     </div>
// )

// Q) SlotMachine 컴포넌트 만들기
// 세 문자열이 모두 같으면 "Congrats!" 문자열 표시, 하나라도 다를 경우 아예 표시하지 않음
// 단, 세 문자열이 모두 7일 경우에는 텍스트 색상을 빨간색으로 강조하도록 작성
function SlotMachine({s1, s2, s3}) {
    let result = false;
    let resultStyle = false;

    if(s1 === s2 && s2 === s3) {
        result = true;
    }
    if (s1 === "7") {
        resultStyle = true
    }

    return (
        <div>
            <h4>{s1} {s2} {s3}</h4>
            {result && <h3 style={resultStyle ? {color : "red"} : null}>Congrats!</h3>}
            <hr />
        </div>
    )
}

// root.render(
//     <div>
//         <SlotMachine s1="X" s2="Y" s3="Z" />
//         <SlotMachine s1="X" s2="X" s3="X" />
//         <SlotMachine s1="7" s2="7" s3="7" />
//         <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
//         <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
//     </div>
// )


// Q) 다음의 Card 컴포넌트를 활용해보고 Card 컴포넌트의 구조 이해해보기
const Card = function(props) {
    return (
        <div style={{
            width: props.width, height: props.height,
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px"
        }}>
            {props.children}
        </div>
    )
}