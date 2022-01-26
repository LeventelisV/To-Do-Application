import { useSelector } from "react-redux"


export default function ItemStatus() {
    const items = useSelector((newState) => {
        return newState.items
    })

    const undoneTasks = items.filter(item => !item.done)


    return (
        <div>{items.length > 0 ? `Your undone tasks are: ${undoneTasks.length}` : 'You have no more tasks'}</div>
    )
}