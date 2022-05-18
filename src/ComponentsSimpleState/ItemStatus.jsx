import { useState } from "react";

export default function ItemStatus({ items}) {
    // console.log('ItemStatus')
    const undoneItems = items.filter(item => !item.done)

    return (
        <div>Your undone tasks are: {undoneItems.length}</div>
    )
}