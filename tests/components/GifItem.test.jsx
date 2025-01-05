import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";

describe('Prueba en <GifItem />', () => {
    const titulo = 'Hola Mundo';
    const direccion = 'https://example.com/image.jpg';

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem title={titulo} url={direccion}/>);
                
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={titulo} url={direccion}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(direccion);
        // expect(screen.getByRole('img').alt).toBe(titulo);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(direccion);
        expect(alt).toBe(titulo);
    });

    test('debe mostrar el título en el componente', () => {
        render(<GifItem title={titulo} url={direccion}/>);

        expect(screen.getByText(titulo)).toBeTruthy();
    });
});