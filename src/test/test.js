import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

// 1번 문제
const mystyle = {
    color: "blue",
    fontSize: "20px"
}

const text = <h2>미녀시대 친구들에게 쓰는 편지</h2>
const pTag = <p style={mystyle}>안녕 친구들? 난 미녀시대 짱 최보람이라고 해~</p>

// 2번 문제
const name = {
    kim: "하은",
    ga: "가윤",
    seo: "서영",
    hae: "해원",
    cho: "서현",
    hyang: "혜경"
}

const friends = <p>너희들의 이름을 인라인 스타일로 작성해볼게. {name.kim} {name.ga} {name.seo} {name.hae} {name.cho} {name.hyang}</p>

// 3번 문제
let number = 1;
function isOdd(number) { return number % 2 === 1}

// 3번 문제 (어려움)
const users = [
    { name: "John", isKorean: false },
    { name: "철수", isKorean: true },
    { name: "영희", isKorean: true },
    { name: "Sally", isKorean: false }
]

const userList = (
    <ul>
      {users.map(userName => (
        <li>{userName.isKorean ? "안녕하세요" : "Welcome"} {userName.name}</li>
      ))}
    </ul>
  );

root.render(<div>
    {text}
    {pTag}
    {friends}
    { isOdd(number) && <p style={{color: "red"}}>홀수입니다.</p> }
    { isOdd(number) ? <p>홀수</p> : <p>짝수</p>}
    {userList}
</div>)