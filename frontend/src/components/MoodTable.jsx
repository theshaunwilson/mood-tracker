function MoodTable({ moods }) {
  const moodItems = moods.map((mood) => (
    <li className="w-20 border-2 rounded" key={mood._id}>
      <p>{mood.emoji}</p>
      <p>{mood.note}</p>
    </li>
  ));

  return <ul>{moodItems}</ul>;
}

export default MoodTable;
