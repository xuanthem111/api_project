export default class Utils {
    /* 
        @param source: 
        @param keyDiff: 
        @param queryFn:
        
        @return: 
    */
    static groupList = (source = [], keyDiff = "", queryFn) => {
        let listKeyRun = [];

        // perItem: {key: []}
        let dataPerKey = {

        }
        source.forEach(item => {
            const findKey = listKeyRun.findIndex(key => key == item[keyDiff])
            if (findKey >= 0) {
                // found
                dataPerKey[item[keyDiff]] = [...dataPerKey[item[keyDiff]], item];
            } else {
                // not found
                listKeyRun.push(item[keyDiff]);
                dataPerKey[item[keyDiff]] = [item];
            }
        })

        return [listKeyRun, dataPerKey]
    }


}