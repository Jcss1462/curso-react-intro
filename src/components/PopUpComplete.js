function PopUpComplete({completedTodos,totalTodos}) {
        console.log(completedTodos);
    return (
        <div id="popup" class="popup" style={completedTodos == totalTodos ? { display: "flex" } : { display: "none" }} onClick={()=>{clousePopUp()}}>
            <div class="popup-content">
                <div className="CloseSection">
                    <span id="closePopup" class="close" onClick={()=>{clousePopUp()}}>&times;</span>
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
