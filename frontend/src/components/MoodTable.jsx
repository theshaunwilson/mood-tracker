function MoodTable({ moods }) {
  const moodItems = moods.map((mood) => (
    <li key={mood._id} className="bg-gray-50">
      <p className="text-lg ">Mood: {mood.emoji}</p>
      <p className="text-lg ">Note: {mood.note}</p>
    </li>
  ));

  return <ul className="flex flex-col gap-2">{moodItems}</ul>;
}

export default MoodTable;
