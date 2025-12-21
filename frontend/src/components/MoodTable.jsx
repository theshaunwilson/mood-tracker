function MoodTable({ moods }) {
  const moodItems = moods.map((mood) => (
    <li
      key={mood._id}
      className="bg-gray-50 flex flex-col items-center text-center"
    >
      <p className="text-2xl mb-1">Mood: {mood.emoji}</p>
      <p className="text-sm text-gray-700">Note: {mood.note}</p>
    </li>
  ));

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {moodItems}
    </ul>
  );
}

export default MoodTable;
