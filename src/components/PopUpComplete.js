function PopUpComplete({completedTodos,totalTodos}) {
        console.log(completedTodos);
    return (
        <div id="popup" className="popup" style={completedTodos === totalTodos ? { display: "flex" } : { display: "none" }} onClick={()=>{clousePopUp()}}>
            <div className="popup-content">
                <div className="CloseSection">
                    <span id="closePopup" className="close" onClick={()=>{clousePopUp()}}>&times;</span>
                </div>
                <h2>Terminaste todos los Todos</h2>
            </div>
        </div>

    );
}

function clousePopUp(){
  document.getElementById('popup').style.display = 'none';
}

export { PopUpComplete };
