import { PayloadAction } from "@reduxjs/toolkit";
import darkModeReducer, { initialState, toggleDarkMode } from "./reducer"

describe('Dark mode reducer', () => {
    it('should return the initial state if no action provided', () => {
        expect(darkModeReducer(undefined, {} as PayloadAction)).toEqual(initialState);
    });

    it('should enable dark mode if it is disabled', () => {
        expect(darkModeReducer(false, toggleDarkMode)).toEqual(true)
    });

    it('should disabled dark mode if it is enabled', () => {
        expect(darkModeReducer(true, toggleDarkMode)).toEqual(false)
    });
});