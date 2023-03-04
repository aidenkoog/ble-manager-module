import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * store ble device name.
 * device name is saved when qr scan is executed first.
 * @param {string} name 
 * @returns {Promise}
 */
export const storeBleDeviceName = async (name: string): Promise<any> => {
    await AsyncStorage.setItem("", name)
}

/**
 * get ble device name from storage.
 * @returns {Promise}
 */
export const getBleDeviceName = async (): Promise<any> => {
    return AsyncStorage.getItem("")
}

/**
 * store ble device mac address.
 * @param {string} macAddress 
 * @returns {Promise}
 */
const storeBleDeviceMacAddress = async (macAddress: string): Promise<any> => {
    await AsyncStorage.setItem("", macAddress)
}


/**
 * get ble device mac address from storage.
 * @returns {Promise}
 */
export const getBleDeviceMacAddress = async (): Promise<any> => {
    return AsyncStorage.getItem("")
}

/**
 * store flag that checks if device registration is completed or not.
 * @param {boolean} registered 
 * @returns {Promise}
 * Ref. AsyncStorage cannot store boolean type's value.
 */
export const storeIsDeviceRegistered = async (registered: boolean): Promise<any> => {
    await AsyncStorage.setItem("", registered == null ? registered : registered.toString())
}

/**
 * get flag that checks if device registration is completed or not.
 * @returns {Promise}
 */
export const getIsDeviceRegistered = async (): Promise<any> => {
    return AsyncStorage.getItem("")
}