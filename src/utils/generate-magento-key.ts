export const GenerateMagentoKey = () => {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 32; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}