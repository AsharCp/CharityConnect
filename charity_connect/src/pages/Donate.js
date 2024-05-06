import React from 'react'

const Donate = () => {

  const amount=8000;
  const currency="INR";
  const receiptId="abcd";

  const paymentHandler= async (e)=>{
    const response = await fetch('http://127.0.0.1:5000/order',{
      method:"POST",
      body:JSON.stringify({
        amount:amount,
        currency:currency,
        receipt:receiptId,
      }),
      headers:{
        "Content-Type":"application/json",
      },
    });
    const order = await response.json();
    console.log(order);
    
    var options = {
      "key": "rzp_test_OIb6xYsPEzwsuw", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      "name": "Covid Care Fund", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": async function (response){
          const body = {
            ...response,
          };
          const validateRes = await fetch("http://127.0.0.1:5000/order/validate",{
            method: "POST",
            body: JSON.stringify(body),
            headers:{
              "Content-Type":"application/json",
            },
          });
          const jsonRes = await validateRes.json();
          console.log(jsonRes)
          
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          "name": "Ashar", //your customer's name
          "email": "niyas@example.com", 
          "contact": "9000090675"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
  });
  rzp1.open();
    e.preventDefault();

    console.log(response)

  };

  return (
      <div>
        <button onClick={paymentHandler} className='bg-black text-white p-3'>Proceed Payment</button>
      </div>

  )
}

export default Donate