export function removeKeys (obj) {
    const keys = ['created', 'edited', 'url']
    keys.forEach(key => delete obj[key])
    return obj
}
export function validationAtr (version) {
    
}