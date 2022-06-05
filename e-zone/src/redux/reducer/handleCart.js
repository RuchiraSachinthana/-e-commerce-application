const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADDITEM:
      // check if the product already exist
        const exist = state.find((x) => x.id === product.id);
            if(exist) {
                // Increases product quantity
                return state.map((x) => x.id === product.id ? {...x, qty: + 1} : x);

            }
      break;

    default:
      break;
  }
};

export default handleCart;
