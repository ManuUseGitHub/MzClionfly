import { Command } from "commander";

const programConfig = (program: Command) => {

    program
        .description("Life is beautiful")
        .option("-a, --aa   <value>", "...")
        .option("-b, --bb   <value>", "...")
        .option("-c, --cc   <value>", "...")
        .option("-d, --dd   <value>", "...")
        .option("-e, --ee   <value>", "...")
        .option("-f, --ff   <value>", "...")
        .option("-g, --gg   <value>", "...")
        .option("-h, --help", "display help for command")
        .option("-i, --ii   <value>", "...")
        .option("-j, --jj", "...")
        .option("-k, --kk", "...")
        .option("-l, --ll", "...")
        .option("-m, --mm", "...")
        .option("-n, --nn", "...")
        .option("-o, --oo", "...")
        .option("-p, --pp", "...")
        .option("-q, --qq", "...")
        .option("-r, --rr", "...")
        .option("-s, --ss", "...")
        .option("-t, --tt", "...")
        .option("-u, --uu", "...")
        .version("1.0.0", "-V, --version", "display the version")
        .option("-w, --ww", "...")
        .option("-x, --xx", "...")
        .option("-y, --yy", "...")
        .option("-z, --zz", "...")

    return program;
};

const orderKeys = programConfig(new Command()).options.map(x => (x.long?.substring(2)) as string);
const optionMaskConfig = {
    combinations: {
        //  abcdefghijklmnopqrstuVwxyz
        a: "00000000010101010101000100",
        b: "00000000011100110110101100",
        c: "00000000010101001101000010",
        d: "00000000010010010001001100",
        e: "00000000001010010001000001",
        f: "00000000001011000010001001",
        g: "00000000001010000100001001",
        i: "00000000001010001000100101"
    },
    pureUnaries: [
        "help",
        "version"
    ],
    orderKeys
}

export { programConfig, optionMaskConfig };