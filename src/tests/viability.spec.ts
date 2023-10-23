import { Command } from "commander";
import { Checker, getActivatedOptions } from "../index";

import { programConfig, optionMaskConfig } from "./setup";
import { ALPHABET_LESS_V, getCombination } from "./setupMappings";
const program: Command = programConfig(new Command());

const expectViable = (args: string): jest.JestMatchers<number> => {
    process.argv[2] = args;
    process.argv[3] = "test"
    const activated = getActivatedOptions(program.options);
    const check: Checker = new Checker(optionMaskConfig);

    return expect(check.isViableOptions(activated));
}

afterEach(() => {
    process.argv = [];
});

describe('Options rejection', () => {
    it.each(getCombination())('[A]ccepts combination %p', (x: string | undefined) => {
        expectViable(x!).toBeTruthy();
    })

    it.each([optionMaskConfig.pureUnaries])('[A]ccepts unary %p', (x: string) => {
        expectViable(x).toBeTruthy();

    })
    it.each(["-a", "-b", "-c", "-d", "-e", "-f", "-g", "-i"])('[R]ejects Unary %p', (x: string) => {
        expectViable(x).toBeFalsy();
    })
});

it.each(["-ajbj", "-albl", "-arbr"])('[R]ejects cross-purpose overlap combination %p', (x: string) => {
    expectViable(x).toBeFalsy();
})

describe('Options rejection combined with version', () => {
    it.each([
        ...ALPHABET_LESS_V.split('').map(x => (`-V${x}`))])('[R]ejects [A]nything with [V]ersion %p', (x: string) => {
            expectViable(x).toBeFalsy();
        })
});