export default function ItemStatus({ items }) {
  const undoneItems = items.filter((item) => !item.done);

  return <div>Your undone tasks are: {undoneItems.length}</div>;
}
