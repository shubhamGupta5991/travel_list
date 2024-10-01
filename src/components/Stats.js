export default function Stats({ items }) {
    if (!items.length)
      return (
        <em className="stats">
          <p>Add Items to your list and then you are ready to go.🚀</p>
        </em>
      );
    let numItems = items.length;
    let numPacked = items.filter((item) => item.packed).length;
    const percent = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {percent === 100
            ? "You got everything! Ready to go ✈️"
            : `You have ${numItems} items in your list and you already packed ${numPacked}(${percent}%)`}
        </em>
      </footer>
    );
  }