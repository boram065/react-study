import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// const PersonProfile = function(props) {
//     const { name, age, gender, profile, highlight } = props

//     return (
//         <div className='person' style={highlight ? { color: 'red' } : null}>
//             <h1>Profile</h1>
//             <img src={profile} />
//             <p>name : {name}</p>
//             <p>age : {age}</p>
//             <p>gender : {gender}</p>
//         </div>
//     )
// }

// ES6 문법에서 지원하는 디폴트 파라미터 문법을 이용해서 defaultProps 값 설정없이도 기본값 부여 가능
const PersonProfile = function({ name="Unknown", age=0, gender="Unknown", profile="https://via.placeholder.com/150", highlight=false }) {
    return (
        <div className='person' style={highlight ? { color: 'red' } : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

PersonProfile.defaultProps = {
    name: "Unknown",
    gender: "Unknown",
    age: 0,
    profile: 'https://via.placeholder.com/150'
}

root.render(
    <PersonProfile />
)