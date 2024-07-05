
import React from "react";


function TodoSearch() {

    const [searchValue, setSearchValue]=React.useState("");

    console.log(searchValue);

    return (
        <div id="todoSearchContainer">
            <input 
            placeholder="Cortar cebolla"
            value={searchValue}
            onChange={(event)=>setSearchValue(event.target.value)}></input>
        </div>
    );
}

export { TodoSearch };
