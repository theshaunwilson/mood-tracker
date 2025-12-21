import { useState } from 'react';

function MoodForm() {
  const [emoji, setEmoji] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emoji, note);
  };

  return (
    <div className="bg-white rounded shadow-sm p-4 max-w-md ">
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        {/* Emoji */}
        <label htmlFor="emoji" className="text-2xl">
          Emoji
        </label>
        <input
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          id="emoji"
          type="emoji"
          placeholder="Enter your emoji..."
          className="w-100 rounded"
        />

        {/* Note */}
        <label htmlFor="note" className="text-2xl">
          Note
        </label>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          id="note"
          type="note"
          placeholder="Enter your note..."
          className="w-100 rounded"
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
