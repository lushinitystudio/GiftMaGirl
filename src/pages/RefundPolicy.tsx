export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-hero p-8 text-foreground">
      <div className="max-w-3xl mx-auto bg-gradient-card p-8 rounded-2xl border border-secondary/30 neon-glow-secondary">
        <h1 className="text-4xl md:text-5xl font-black text-gradient-primary mb-6 text-center">
          Refund & Cancellation Policy
        </h1>
        <p className="mb-4">
          At GiftMaGirl, we strive to provide our users with a seamless and satisfying gifting experience. 
          Since our platform delivers digital rewards instantly, refunds and cancellations are handled with 
          specific limitations to ensure fairness and avoid misuse.
        </p>
        <p className="mb-4">
          <strong>Eligibility for Cancellation:</strong> A user may cancel their order only within 
          <span className="text-primary font-bold"> 30 seconds of completing the payment</span>. 
          After this window, the resources required to deliver the digital experience are already engaged 
          and cancellation requests cannot be processed.
        </p>
        <p className="mb-4">
          <strong>Refunds:</strong> If you cancel your payment within the 30-second window, the 
          transaction will be automatically reversed to your original payment method. Refund timelines may 
          vary depending on your bank or payment provider.
        </p>
        <p className="mb-4">
          <strong>Non-Refundable Situations:</strong> No refunds will be issued after the 30-second grace 
          period has passed, or if rewards have already been delivered.
        </p>
        <p className="mb-4">
          <strong>Payment Gateway:</strong> All payments are securely processed by trusted gateways like 
          Razorpay/Stripe. We do not store your payment information on our servers.
        </p>
        <p>
          If you have any concerns about a payment or refund, please contact our support team at 
          <span className="text-primary font-bold"> support@giftmagirl.com</span>.
        </p>
      </div>
    </div>
  );
}
