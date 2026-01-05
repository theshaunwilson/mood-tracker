import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import { describe, expect, test } from 'vitest';

describe('Card component', () => {
  test('renders children content', () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('render title when provided', () => {
    render(
      <Card title="My Title">
        <p>Content</p>
      </Card>
    );

    expect(screen.getByText('My Title')).toBeInTheDocument();
  });

  test('does not render title when not provided', () => {
    render(
      <Card>
        <p>Content</p>
      </Card>
    );

    expect(screen.queryByRole('heading')).toBeNull();
  });
});
