import {render, screen} from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Greet } from "./Greet"

describe('Greet Component', ()=> {
    it('checks if the h1 element is present', () => {
        render (<Greet />);
        const h1El = screen.getByText("こんにちは");
        expect(h1El).toBeInTheDocument();

        const radioEL: HTMLElement = screen.getByRole('radio');
        expect(radioEL).toBeInTheDocument();

        const elByLabel = screen.getByLabelText('氏名');
        expect(elByLabel).toBeInTheDocument();
    })
})