import { ActivationOptionType } from "./optionActivations";

interface Combinable {
    /**
     * 
     * @param activations 
     * @returns 
     */
    isViableOptions: (activations: ActivationOptionType) => number;
}

type KeyStringVal = {[k:string] : string};

type MaskConfig = {
    combinations: KeyStringVal;
    pureUnaries: string[];
    orderKeys: string[];
}

export { Combinable, MaskConfig, KeyStringVal }