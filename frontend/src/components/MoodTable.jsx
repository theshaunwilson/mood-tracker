function MoodTable({ moods }) {
  const moodItems = moods.map((mood) => (
    <li key={mood._id}>
      <p>{mood.emoji}</p>
      <p>{mood.note}</p>
    </li>
  ));

  return <ul>{moodItems}</ul>;
}

export default MoodTable;
