import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function RazorPay(){
    const [status,setStatus]= useState('')
    const fam =100
    const options = {
        // key: 'rzp_test_1DP5mmOlF5G5ag',
        key: 'rzp_test_qPOfPOdzrtddEv',
        amount: fam * 100, //  = INR 1
        name: 'IPS College of Tech & Mgmt',
        // description: 'some description',
        prefill: {
          name: "Vishal Jain",
          contact: "9174537339",
          email: "vishaljain2504@gmail.com"
        },
    
        image: '/images/Logo/logo.png',
        handler: function (response) {
          // AddPurchaseDetails(response.razorpay_payment_id)
          // setStatus(true)
          alert(response.razorpay_payment_id)
        },
        notes: {
          address: 'some address'
        },
        theme: {
          color: '#212121',
          hide_topbar: false
        },
        //onClose:
    
      };
    
    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        setStatus(true)
    
      };
    
    
    
    const OnlineMethod = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        setTimeout(() => {
          openPayModal()
        }, 1500)
      }
    return(
        <div>
            <Button onClick={OnlineMethod}>Click me</Button>
        </div>
    )
}