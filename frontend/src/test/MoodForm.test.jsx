import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import MoodForm from '../components/MoodForm';

describe('MoodForm component', () => {
  test('calls onSubmit with emoji and note when form is submitted', async () => {
    // Create a mock function to track calls
    const mockOnSubmit = vi.fn();
    const mockSetSelectedMood = vi.fn();

    render(
      <MoodForm
        onSubmit={mockOnSubmit}
        selectedMood={null}
        setSelectedMood={mockSetSelectedMood}
      />
    );

    // Find inputs and button
    const emojiInput = screen.getByPlaceholderText('Enter your emoji...');
    const noteInput = screen.getByPlaceholderText('Enter your note...');
    const submitButton = screen.getByRole('button', { name: /add mood/i });

    // Simulate user typing
    await userEvent.type(emojiInput, '😊');
    await userEvent.type(noteInput, 'Feeling great');

    // Simulate clicking submit
    await userEvent.click(submitButton);

    // Check that onSubmit was called with correct data
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      emoji: '😊',
      note: 'Feeling great',
    });
  });
});
