export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';
export const HIDE_CART = 'HIDE_CART';


export const updateProducts = (product) => {
    return {
        type: 'UPDATE_PRODUCTS',
        products: [...product]
        
    };
};

export const updateCategories = (category) => {
    return {
        type: 'UPDATE_CATEGORIES',
        categories: [...category]
    };
};

export const updateCurrentCategory = (id) => {
    return {
        type: 'UPDATE_CURRENT_CATEGORY',
        currentCategory: id
    };
};

export const addToCart = (item, quantity) => {
    return {
        type: 'ADD_TO_CART',
        product: { ...item, purchaseQuantity: quantity }
    };
};

export const addMultipleToCart = (cart) => {
    
    return {
        
        type: 'ADD_MULTIPLE_TO_CART',
        products: [...cart]
    };
};

export const removeFromCarts = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        _id: item._id
    };
};

export const updateCartQuantity = (item, value) => {
    return {
        type: 'UPDATE_CART_QUANTITY',
        _id: item,
        purchaseQuantity: parseInt(value)
    };
};

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    };
};

export const toggleCart = (state) => {
    return {
        type: 'TOGGLE_CART',
        cartOpen: state
    };
};

export const hideCart = () => {
    return {
        type: 'HIDE_CART'
    };
};