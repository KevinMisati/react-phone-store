import React from 'react'

export default function CartColumns() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercas">Products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercas">name Products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercas">Price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercas">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercas">remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercas">Total</p>
          </div>
        </div>
      </div>
    );
}
