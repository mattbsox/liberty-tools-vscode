export type Options = {
    [param: string]: {
        default: string,
        name: string,
        type?: string,
        options?: string[],
        constraints?: {
            // for a given option to be valid...
            [option: string]: {
                // the other param must be one of these values
                [otherParam: string]: string[],
            }
        },
    }
};

export async function getProjectOptions(): Promise<Options> {
    const starterParams = require("../resources/starter-params.json");
    return starterParams as Options;
}
