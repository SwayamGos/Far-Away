export default function Stats({ items }) {
  let numItems = items.length;
  let numPackedItems = 0;

  if (numItems === 0)
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  numPackedItems = items.reduce(
    (acc, cur) => (cur.packed ? acc + 1 : acc + 0),
    numPackedItems
  );

  // console.log(numPackedItems);

  return (
    <footer className='stats'>
      <em>
        💼 You have {numItems} items on your list, and you already packed{" "}
        {numPackedItems} ({Math.round((numPackedItems / numItems) * 100) || 0}%)
      </em>
    </footer>
  );
}
