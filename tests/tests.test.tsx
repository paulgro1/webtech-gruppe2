import { describe, expect, it } from 'vitest';
import {render, screen } from '@testing-library/react';
import { useState } from 'react';
import { JSDOM } from 'jsdom';
import App from '../src/App';
import React from 'react';

describe('App', () => {
    const API_URL = "https://corporatebs-generator.sameerkumar.website/";
    it('Is Hello World h tag', () => {
        render(<App />);
        expect(screen.getByRole('heading', {
            level: 1,
        })
        ).toHaveTextContent('This is my Hello World App');
    });

    it('is hello world being rendered', () => {
        render(<App />);
        expect(screen.getByText('This is my Hello World App')).toBeInTheDocument();
    });

//     it('Component has useState hook', () => {
//         const dom = new JSDOM('<!DOCTYPE html>');
//         global.document = dom.window.document;
//         global.window = dom.window; 
//         const useStateMock = jest.spyOn(React, 'useState');
//         render(<App />);
//         expect(useStateMock).toHaveBeenCalled();
//    });


    it('Is there a p tag', () => {
        const { container } = render(<App />);
        const pelem = container.querySelector('p');
        expect(pelem).toBeInTheDocument();
    });
});