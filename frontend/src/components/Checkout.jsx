import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';

const Checkout = ({ template, onPaymentSuccess }) => {
    const initialOptions = {
        "client-id": "test", // Replace with actual client ID
        currency: "USD",
        intent: "capture",
    };

    const handleApprove = async (data, actions) => {
        const details = await actions.order.capture();
        const paymentData = {
            templateId: template.id,
            transactionId: details.id,
            amount: template.price,
        };

        try {
            await axios.post('http://localhost:5000/api/payment/purchase', paymentData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            onPaymentSuccess();
        } catch (error) {
            alert('Payment recording failed');
        }
    };

    return (
        <div className="glass-card" style={{ maxWidth: '500px', margin: 'auto' }}>
            <h3>Purchase {template.name}</h3>
            <p style={{ margin: '1rem 0' }}>Price: ${template.price}</p>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{ amount: { value: template.price.toString() } }],
                        });
                    }}
                    onApprove={handleApprove}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default Checkout;
