import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

const ComponentWithProps = function(props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

const Getting = function(props) {
    return <h1>Hello, {props.name}</h1>
}

root.render(<div>
    <Getting name="최보람" />
    <ComponentWithProps value="Hello" />
    <ComponentWithProps value={1} />
    <ComponentWithProps value={{ a: 1, b: "React" }} />
    <ComponentWithProps value={() => { }} />
</div>)