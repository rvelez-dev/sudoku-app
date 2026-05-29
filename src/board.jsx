function Board(){
    return(
        <div className= "board">
            {/*mapping 81 cells*/}
            {Array(81).fill(null).map((_, index) => (
                <div className={`cell ${index % 3 ===0 ?'thick-left' : ''}`}  key={index}></div>
            ))}
        </div>
    )
}
export default Board