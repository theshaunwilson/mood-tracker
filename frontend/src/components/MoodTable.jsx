import PropTypes from 'prop-types';

function MoodTable({ moods, onDelete, onUpdate }) {
  const moodItems = moods.map((mood) => (
    <li key={mood._id} className="bg-gray-50">
      <p className="text-lg">Mood: {mood.emoji}</p>
      <p className="text-lg">Note: {mood.note}</p>
      <button
        onClick={() => onUpdate(mood)}
        className="mr-2 font-bold py-2 px-4 rounded bg-green-400 text-white hover:bg-green-500 transition"
      >
        Update
      </button>
      <button
        onClick={() => onDelete(mood._id)}
        className="mr-2 font-bold py-2 px-4 rounded bg-red-400 text-white hover:bg-red-500 transition"
      >
        Delete
      </button>
    </li>
  ));

  return <ul className="f gap-2">{moodItems}</ul>;
}

MoodTable.PropTypes = {
  moods: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MoodTable;
