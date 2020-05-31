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
        // console.log(item)
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
    Object.keys(result).map(item => {
        return data.push({[item]: result[item]})
        
    })
    data.push(initialObject)
    return data;
}

export const addDataToBar = (filterData) => {
    let data = []
    let inititalObject = {}

    filterData.map((item) => {
      return Object.assign(inititalObject, {[item.type]: item.amount})
    })
    data.push(inititalObject)
    return data;
}

export const addDataToStackedBar = (filterData) => {
    let data = []
    let inititalObject = {}

    filterData.map((item) => {
      return Object.assign(inititalObject, item)
    })
    data.push(inititalObject)
    return data;
  }