import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <><img src="/assets/load.svg"  height="50px" alt="Loading" /></>;
  };


  const filterProduct = (cat) => {
      const updateList = data.filter((x)=>x.category === cat);
      setFilter(updateList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button 
          className="btn btn-outline-primary me-2"
          onClick={() => setFilter(data)}
          >All</button>
          <button 
          className="btn btn-outline-primary me-2"
          onClick={() => filterProduct("women's clothing")}
          >Women's clothing</button>
          <button 
          className="btn btn-outline-primary me-2"
          onClick={() => filterProduct("men's clothing")}
          >Men's clothing</button>
          <button 
          className="btn btn-outline-primary me-2"
          onClick={() => filterProduct("jewelery")}
          >Jewelery</button>
          <button 
          className="btn btn-outline-primary me-2"
          onClick={() => filterProduct("electronics")}
          >Electronics</button>

        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.title} height="300px" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                    <p className="card-text lead fw-bold">
                      LKR. {product.price}
                    </p>
                    <a href="##" className="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">LATEST PRODUCTS</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
