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

root.render(<UserProfile />)