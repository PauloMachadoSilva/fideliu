// Conta Corrente API service mapping
const apiFidelio = {
    v1: {
        prd: 'ocalhost:3000/v1',
        hmg: 'localhost:3000/v1'
    }
}


export const environment = {
    api: {
        cadastro: {
            v1: apiFidelio.v1
        }
    }
}
