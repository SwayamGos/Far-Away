export default function Item({ item, delItem, checkItem }) {
  return (
    <li>
      <input
        type='checkbox'
        name=''
        id=''
        value={item.packed}
        onClick={() => checkItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => delItem(item.id)}>❌</button>
    </li>
  );
}