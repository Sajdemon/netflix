import "./AllDelete.css"

const AllDelete =(props)=>{
    return <>
        <button onClick={props.delete} className="delete-button">vymazat vše</button>
    </>

}

export default AllDelete