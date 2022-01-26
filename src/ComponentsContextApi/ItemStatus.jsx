import Context from './Context';
import { useContext } from 'react';

export default function ItemStatus() {
    const { items, setItems } = useContext(Context)
    const undoneTasks = items.filter(item => !item.done)

    return (
        <div>{items.length > 0 ? `Your undone tasks are: ${undoneTasks.length}` : 'You have no more tasks'}</div>
    )
}