import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

function FirstComponent() {
    return <div>First Component</div>
}

function HellowWorld() {
    return <h1>Hello, World!</h1>
}

root.render(<div>
    <FirstComponent />
    <HellowWorld />
</div>)