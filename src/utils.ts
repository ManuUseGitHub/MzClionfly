const toObejct = (arr: any[]) => Object.assign({}, ...arr);
const removeCharacterRepetition = (str: string) => [...new Set(str.split(''))].join("");
const startsNotHyphenized = (str: string) => /^[^\-]/.test(str);
const startsAsAShortOption = (str: string) => /^[\-][^\-]/.test(str);
const onlyDefined = (array : any[]) => array.filter((x: any) => x !== undefined);
const firstBitIndex = (x:string) => x.indexOf("1");

export {
    toObejct,
    removeCharacterRepetition,
    startsAsAShortOption,
    startsNotHyphenized,
    onlyDefined,
    firstBitIndex
}