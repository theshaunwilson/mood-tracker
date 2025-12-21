import { useState } from 'react';
import API from '../services/api';
import Error from '../components/Error';

function MoodForm({ onMoodAdded }) {
  const [emoji, setEmoji] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mood = {
        emoji,
        note,
      };

      await API.post('/mood', mood);
      onMoodAdded();
      setEmoji('');
      setNote('');
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded shadow-sm p-4 max-w-md">
      {error && <Error message={error} />}
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
        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          Add Mood
        </button>
      </form>
    </div>
  );
}

export default MoodForm;
