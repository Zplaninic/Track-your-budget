const dataSumArray = (array) => {
    let data = []
    array.map(item => {

        if(!data[item.type]) {
            data[item.type] = 0;
        }
        data[item.type] += Math.abs(item.amount)
    })

    return data;
}

const createDataForBar = (array) => {
    
    let data = []
    Object.keys(array).map(item => {
        let object = {type: item, amount: array[item]}
        data.push(object)
    })
    return data;
}

export const sumAllData = (array) => {
    let result = dataSumArray(array)

    return createDataForBar(result)
}

export const createDataForStackedBar = (array, name) => {
    let result = dataSumArray(array)
    let initialObject = {type: name}
    let data = []
    let finalObject;
    Object.keys(result).map(item => {
        finalObject = Object.assign(initialObject, {[item]: result[item]})
    })

    data.push(finalObject)
    return data;
}