export default function ItemStatus({ items }) {
  const undoneItems = items.filter((item) => !item.done);

  return <p>Your undone tasks are: {undoneItems.length}</p>;
}
