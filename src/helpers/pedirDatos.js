import MOCK_DATA from './../data/MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        },1500)
    })
}

export const pedirDatosPorCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA.filter((prod) => prod.category === category))
        }, 1500);
    })
}

export const pedirDatosPorId = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA.find((prod) => prod.id === id))
        }, 1500);
    })
}