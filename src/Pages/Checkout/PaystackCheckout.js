import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import './PaystackCheckout.css'

const PaystackCheckout = () => {
  const publicKey = "pk_test_38cd197eee2e6d0d703c70aebb90f339bf4e8a0f"
  const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: ({ reference }) => {
      alert(`Thanks for doing business with us! Come back soon!!" Transaction reference: ${reference}`); 
      resetForm();
},
    onClose: () => alert("Wait! don't go!!!! :("),
  }

  return (
    <div className="paystack-checkout">
        <div className="container">
            <div className="item">
                <div className="overlay-effect"></div>
                <img
                    className="item-image"
                    src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt="product"
                />
                <div className="item-details">
                    <p className="item-details__title">Coconut Oil</p>
                    <p className="item-details__amount">NGN {amount / 100}</p>
                </div>
            </div>

            <div className="checkout">
                <div className="checkout-form">
                  {/* <form> */}
                    <div className="checkout-field">
                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="checkout-field">
                        <label>Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="checkout-field">
                        <label>Phone</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <PaystackButton className="paystack-button" {...componentProps} />
                  {/* </form> */}
                </div>
            </div>
        </div>
</div>

  )
}

export default PaystackCheckout