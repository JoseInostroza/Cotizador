const axios = require('axios')

const getUfValue = async ()=>{
    const response = await axios.get('https://mindicador.cl/api/uf')
    const ufValue = response.data.ultimos[0].valor
    console.log(ufValue);
    
    return ufValue
}

module.exports = { getUfValue }