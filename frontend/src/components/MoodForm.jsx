import { useState, useEffect } from 'react';
import API from '../services/api';
import Error from './Error';

function MoodForm({ onSubmit, selectedMood, setSelectedMood, setMoods }) {
  const [emoji, setEmoji] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedMood) {
      setEmoji(selectedMood.emoji);
      setNote(selectedMood.note);
    }
  }, [selectedMood]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ emoji, note });
    setEmoji('');
    setNote('');
  };

  const cancelSubmit = (e) => {};

  return (
    <div className="bg-white rounded shadow-sm p-4 max-w-md">
      {/* Error */}
      {error && <Error message={error} />}
      {/* Conditional Add or Error title */}
      {selectedMood ? (
        <h2 className="text-2xl font-bold mt-2 mb-2 text-gray-800">
          Edit Mood
        </h2>
      ) : (
        <h2 className="text-2xl font-bold mt-2 mb-2 text-gray-800">Add Mood</h2>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        {/* Emoji */}
        <label htmlFor="emoji" className="text-lg">
          Emoji
        </label>
        <input
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          id="emoji"
          type="text"
          placeholder="Enter your emoji..."
          className="bg-gray-50 rounded"
        />

        {/* Note */}
        <label htmlFor="note" className="text-lg">
          Note
        </label>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          id="note"
          type="text"
          placeholder="Enter your note..."
          className="bg-gray-50 rounded"
        />
        {/* Conditional Add or Update Mood */}
        {selectedMood ? (
          <button
            type="submit"
            className="px-4 py-2 rounded bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
          >
            Edit Mood
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Add Mood
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 rounded bg-yellow-500 text-white text-sm font-medium hover:bg-yellow-600 transition"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default MoodForm;
