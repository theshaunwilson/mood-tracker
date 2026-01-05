import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import { describe, expect } from 'vitest';

describe('Card component', () => {
  test('renders children content', () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
