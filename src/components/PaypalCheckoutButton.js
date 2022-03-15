import {useState} from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js"
import React from "react";

const PaypalCheckoutButton = (props) => {
    const {product} = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null)

    const handleApprove = (orderId) => {
        //call backend function to fulfill order

        //if response is success
        setPaidFor(true);
        //refresh user's account or subscription status
        //if response is error

        if(paidFor){
            alert("Thank you for your purchase")
        }
        if(error){
            //display error message or redirect
            alert(error);
        }
    }
    return <PayPalButtons
            style={{
                color: "silver",
                layout: "horizontal",
                height: 48,
                shape: "pill"
            }}
            createOrder={(data,actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async(data,actions)=>{
                const order = await actions.order.capture();
                console.log("order",order)

                handleApprove(data.orderID)
            } }
            onCancel={()=> {
                //display cancel message or redirect
            }

            }
            onError={(err) => {
                setError(err);
                console.error("Paypal error",err);
            }}
            />
}

export default PaypalCheckoutButton