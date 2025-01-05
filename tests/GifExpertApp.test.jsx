import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
    /* Tarea
        1. Postear formulario vacío
        2. Escribir en el formulario y postear
        3. Escribir la misma categoría y postear
        4. Escribir una categoría diferente y postear
    */

    const newCategory = 'Elmo';

    test('debe postear el formulario vacío', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);
    });

    test('debe escribir en el formulario y postear', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory} });
        fireEvent.submit(form);

        expect(screen.getByText(newCategory).innerHTML).toContain(newCategory);
    });

    test('debe escribir la misma categoría y postear', () => {
        render(<GifExpertApp />);

        const newCategory2 = 'Elmo';

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory} });
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: newCategory2} });
        fireEvent.submit(form);

        expect(screen.getAllByText(newCategory).length).toBe(1);
    });

    test('debe escribir una categoría diferente y postear', () => {
        render(<GifExpertApp />);

        const differentCategory = 'Big Yellow Bird';

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory} });
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: differentCategory} });
        fireEvent.submit(form);

        expect(screen.getByText(differentCategory).innerHTML).toContain(differentCategory);
    });
});