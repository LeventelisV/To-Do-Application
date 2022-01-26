import { useSelector, useDispatch } from "react-redux";
export default function ShowItems() {
    const dispatch = useDispatch();

    const items = useSelector((newState) => {
        return newState.items
    })

    const checkboxClicked = (event) => {
        dispatch({ type: "ShowUndoneCheckboxToggled", event: event.target.checked })
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