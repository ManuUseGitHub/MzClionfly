import { KeyStringVal } from "../types";
import { firstBitIndex, onlyDefined } from "../utils";
import { optionMaskConfig } from "./setup";

const NON_COMBINATORY_OPT_LETTERS = "jklmnopqrstuVwxyz".split('');
const ALPHABET_LESS_V = 'abcdefghijklmnopqrstuwxyz';

const isBitAt = (combinationLine: string, index: number) => combinationLine[index] === "1";

const getCombinationLine = (combinator: string) => ((optionMaskConfig.combinations as KeyStringVal)[combinator])

const isActivable = (combinator: string, bit: string, i: number) => {

    const combinationLine = (optionMaskConfig.combinations as KeyStringVal)[combinator];
    return bit !== " " && isBitAt(combinationLine, i + getSignificantBitGap());
}

const yieldValidCombination = (combinationLine: string, combLetter: string, bitIndex: number) => {
    return isActivable(combinationLine, combLetter, bitIndex) ?
        `-${combinationLine}${combLetter}` :
        undefined;
}

const onFoundPossibilityCB = (combinationLine: string) => {
    return (combLetter: string, bitIndex: number) => (
        yieldValidCombination(combinationLine, combLetter, bitIndex)
    )
}

const COMBINATIONS_LIST = Object.keys(optionMaskConfig.combinations);

const getSignificantBitGap = () => {
    return Math.min(...COMBINATIONS_LIST
        .map(getCombinationLine)
        .map(firstBitIndex))
}

const getCombination = () => onlyDefined(
    COMBINATIONS_LIST.flatMap(
        (combinationLine: string) =>
            NON_COMBINATORY_OPT_LETTERS
                .map(onFoundPossibilityCB(combinationLine))
    )
);

export { NON_COMBINATORY_OPT_LETTERS, ALPHABET_LESS_V, getCombination };
