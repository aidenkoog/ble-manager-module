
/**
 * check if the data is valid.
 * @param {string} data 
 * @returns 
 */
export const isValid = (data: any) => {
    if (data == null || data == "" || data == "undefined") {
        return false
    }
    return true
}

/**
 * under construction..
 * @param {number} number 
 * @returns 
 */
export const getOnlyNumber = (number: number) => {
    return number.toString().replace(/[^0-9]/g, '');
}

/**
 * if text is '  ', return true
 * under construction..
 * @param {string} text 
 * @returns 
 */
export const emptyField = (text: string) => {
    if (text == undefined) {
        return text
    }
    return !text.trim()
}

/**
 * replace all strings.
 * @param {string} rawString 
 * @param {string} search 
 * @param {string} replace 
 * @returns 
 */
export const replaceAll = (rawString: string, search: string, replace: string) => {
    return rawString.split(search).join(replace)
}

/**
 * under construction..
 */
export const imageOptions = {
    mediaType: "photo",
    maxWidth: 1024,
    maxHeight: 1024,
    quality: 0.1
};

export const IntervalMode = {
    Five: "FIVE",
    Ten: "TEN",
    Fifteen: "FIFTEEN",
    Thirty: "THIRTY",
    Sixty: "SIXTY",
}