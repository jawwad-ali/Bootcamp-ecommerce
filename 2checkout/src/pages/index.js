import React from "react"

export default function Home() {

  console.log("INITIAL CART => ", window.TwoCoInlineCart);

  return <div>
    Hello world!
    {/* <div>
      <button onClick={() => {
        window.open("https://secure.2checkout.com/checkout/buy?merchant=250622052328&tpl=default&prod=APX7IC110I&qty=1")
      }}>
        Buy Now
    </button>
    </div> */}

    {/* <div>
      <button onClick={() => {

        window.TwoCoInlineCart.products.removeAll()

        window.TwoCoInlineCart.products.add({
          code: "APX7IC110I",
          quantity: 2
        })
        console.log("After adding the product to cart => ", window.TwoCoInlineCart);

      }}>Add to Cart</button>
    </div> */}



    <div>
      <button
        onClick={() => {

          window.TwoCoInlineCart.setup.setMode('DYNAMIC');
          window.TwoCoInlineCart.cart.setCurrency('USD');

          window.TwoCoInlineCart.products.add({
            name: 'Keyboard',
            quantity: 1,
            price: 20,
          });
          console.log("DYNAMIC => ", window.TwoCoInlineCart);

        }}>
        Add dynamic product
      </button>
    </div>

    <div>
      <button onClick={() => {
        window.TwoCoInlineCart.cart.checkout();
      }}>
        Move to cart
      </button>
    </div>


  </div>
}
