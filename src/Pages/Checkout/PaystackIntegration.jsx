import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import Styles from './Checkout.module.css'

const PaystackIntegration = () => {
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  const paywithpaystack = (e) => {
    e.preventDefault()

    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: "pk_test_38cd197eee2e6d0d703c70aebb90f339bf4e8a0f",
      amount: amount * 100,
      email,
      firstname,
      lastname
    })
  }


  return (
      <div classNameName={Styles.paymentForm}>
          <form className={Styles.paymentForm}>
              <div className={Styles.formGroup}>
                <label for="email">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={Styles.emailAddress} required />
              </div>
              <div className={Styles.formGroup}>
                <label for="amount">Amount</label>
                <input type="tel" value={amount} onChange={(e) => setAmount(e.target.value)} className={Styles.amount} required />
              </div>
              <div className={Styles.formGroup}>
                <label for="first-name">First Name</label>
                <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} className={Styles.firstName} required />
              </div>
              <div className={Styles.formGroup}>
                <label for="last-name">Last Name</label>
                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} className={Styles.lastName} required />
              </div>
              <div className={Styles.formSubmit}>
                <button type="submit" onclick={paywithpaystack} className={Styles.formSubmitbtn}>Pay</button>
              </div>
          </form>

          <script src="https://js.paystack.co/v1/inline.js"></script>
      </div>
  )
}

export default PaystackIntegration
