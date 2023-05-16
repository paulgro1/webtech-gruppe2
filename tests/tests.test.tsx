import { describe, expect, it } from 'vitest';
import {render, screen } from '@testing-library/react';
import App from '../src/App';
import React from 'react';

describe('App', () => {
    it('Renders Hello World', () => {
        render(<App />);
        expect(screen.getByRole('heading', {
            level: 1,
        })
        ).toHaveTextContent('This is my Hello World App');
    });
});