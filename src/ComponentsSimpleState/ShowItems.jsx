import { useState } from "react";

export default function ShowItems({ items, setItems }) {
    const [excludedItems,setExcludedItems] = useState([])

    const checkboxClicked = (event) => {
        let doneItems = []
        let undoneItems = []
        if(event.target.checked){
            items.map((item)=>{
                if(item.done){
                    doneItems.push(item)
                }
                else{
                    undoneItems.push(item)
                }
            })
            setItems(undoneItems)
            setExcludedItems(doneItems)
            
        }
        else {
            setItems([...items,...excludedItems])
        }

    }

    return (
        <>
            <div className="mt-6">
                {/* {items && items.map((item) =>
                    <article >lala</article>

                )} */}
                <label htmlFor="show-undone">Show Undone </label>
                <input id="show-undone" data-testid="show-undone" type="checkbox" onClick={checkboxClicked} />
            </div>
        </>
    );
}