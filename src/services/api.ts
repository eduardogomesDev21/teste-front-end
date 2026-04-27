import localData from '../mocks/products.json'

const API_URL = '/api-econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export async function getProducts() {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Erro na API')
    }

    const data = await response.json()

    return data.products || data
  } catch (error) {
    console.warn('API falhou, usando dados locais.')
    return localData.products
  }
}