import React, { useState } from 'react'

const Donate = () => {

  const [showDonateBtn,setShowDonateBtn] = useState(true)
  const [showForm,setShowForm] = useState(false)

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

  const HandleDonateBtn=()=>{
    setShowDonateBtn(false)
    setShowForm(true)
  }
  const HandleCancel=()=>{
    setShowDonateBtn(true)
    setShowForm(false)
  }

  return (
      <div className='flex justify-center flex-col items-center'>
        <div className='w-10/12 p-5 bg-green-color my-5 rounded flex flex-col justify-between'>
          <div className='flex flex-col md:flex-row'>
            <p className='text-3xl font-semibold text-white'>VC Memmorial Educational Scholarship<br/>
            <span className='text-lg font-normal'>Discover the VC Memorial Scholarship, offered by the Government Engineering College Wayanad, providing invaluable support for students pursuing excellence in engineering education. Seize the opportunity to advance your academic journey with this prestigious scholarship.</span></p>
            {/* <img src='/scholarship.jpg' alt='Scholarship logo' className='w-11/12 sm:hidden rounded my-2' /> */}
          </div>
          {showDonateBtn?<button onClick={HandleDonateBtn} className='bg-white text-green-color font-bold rounded p-3 mt-3 w-32'>Donate Now</button>
          :<button onClick={HandleCancel} className='bg-red-600 text-white font-bold rounded p-3 w-32 mt-3'>Cancel</button>

          }
          {showForm?
          <div className='py-2 my-2 flex flex-col gap-2 items-center'>
            <input placeholder='Enter Your Name' className='p-2 rounded outline-none font-semibold w-10/12'/>
            <input placeholder='Enter Your Class' className='p-2 rounded outline-none font-semibold w-10/12'/>
            <input placeholder='Amount' className='p-2 rounded outline-none font-semibold w-10/12'/>
            <button onClick={paymentHandler} className='bg-blue-color w-8/12 rounded text-white p-2 font-bold'>Proceed Payment</button>
           </div>:""


          }
          
        </div>

        {/* Item2  */}

        <div className='w-10/12 p-5 bg-green-color my-5 rounded flex flex-col justify-between'>
          <div className='flex flex-col'>
            <p className='text-3xl font-semibold text-white'>Pain and Paliative Care Fund Collection<br/>
            <span className='text-lg font-normal'>Pain and paliative, offered by the Government Engineering College Wayanad Mananthavady, providing invaluable support for peoples having low financial background. Seize the opportunity to advance your academic journey with this prestigious care.</span></p>
            {/* <img src='/scholarship.jpg' alt='Scholarship logo' className='w-11/12 h-52 rounded my-2' /> */}
          </div>
          <button className='bg-white font-bold rounded p-3 w-32 mt-3'>Closed!</button>
        </div>
      </div>

  )
}

export default Donate