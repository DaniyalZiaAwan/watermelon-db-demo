export const getAllProducts = async ({ database }) => {
    const allProducts = await database.get('products').query().fetch()
    return allProducts
}

export const getSingleProducts = async ({ database, product_id }) => {
    const product = await database.get('products').find(product_id)
    return product
}

export const createProduct = async ({ database, name, description, price, poster, is_popular }) => {
    const newProduct = await database.get('products').create(product => {
        product.name = name
        product.description = description
        product.price = price
        product.poster = poster
        product.is_popular = is_popular
    })

    return newProduct
}

export const updateProduct = async ({ database, product_id, name, description, price, poster, is_popular }) => {
    const product = await database.get('products').find(product_id)
    await product.update(product => {
        product.name = name
        product.description = description
        product.price = price
        product.poster = poster
        product.is_popular = is_popular
    })
}

export const deleteProduct = async ({ database, product_id }) => {
    const product = await database.get('products').find(product_id)

    await product.markAsDeleted() // syncable
    await product.destroyPermanently() // permanent
}

export const getReviews = async ({ database, product_id }) => {
    const product = await database.get('products').find(product_id)
    const reviews = await product.reviews.fetch()
    return reviews
}