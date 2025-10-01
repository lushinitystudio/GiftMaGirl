import { useEffect } from 'react';
// @ts-ignore
declare const paypal: any;

const PayButton = ({ amount }: { amount: string }) => {
  useEffect(() => {
    if (window.paypal?.Buttons) {
      window.paypal.Buttons({
        createOrder: (_: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
            application_context: {
              shipping_preference: "NO_SHIPPING"
            }
          });
        },
        onApprove: async (_: any, actions: any) => {
          const order = await actions.order.capture();
          await fetch("/api/send-reward", {
            method: "POST",
            body: JSON.stringify({ orderId: order.id }),
            headers: { "Content-Type": "application/json" },
          });
        },
      }).render("#paypal-button-container");
    }
  }, [amount]);

  return <div id="paypal-button-container"></div>;
};

export default PayButton;