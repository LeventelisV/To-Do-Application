import Context from './Context'
import { useContext } from "react"

export default function ShowItems() {
    const { items, setItems, excludeItems, setExcludeItems } = useContext(Context)


    const checkboxClicked = (event) => {
        if (event.target.checked) {
            let undoneItems = []
            let excludeItems = []
            items.map((item) => {
                if (!item.done) {
                    return undoneItems.push(item)
                }
                excludeItems.push(item)
            })
            setItems(undoneItems)
            setExcludeItems(excludeItems)
        }
        else {
            setItems(items.concat(excludeItems))
            setExcludeItems([])
        }


        // return { ...state, items: state.items.concat(state.excludeItems), excludeItems: [] }

    }

    return (
        <>
            <div className="mt-6">
                <label>Show Undone </label>
                <input type="checkbox" onClick={checkboxClicked} />
            </div>
        </>
    );

}