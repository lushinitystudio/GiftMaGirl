export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-hero p-8 text-foreground">
      <div className="max-w-4xl mx-auto bg-gradient-card p-10 rounded-2xl border border-primary/30 neon-glow-primary">
        <h1 className="text-4xl md:text-5xl font-black text-gradient-primary mb-8 text-center">
          Terms & Conditions
        </h1>

        <p className="mb-6">
          Welcome to <span className="font-bold text-primary">GiftMaGirl</span>. By accessing or using our
          platform, you agree to comply with and be bound by the following Terms & Conditions. Please read
          them carefully before proceeding with any use of our services. These Terms apply to all users,
          visitors, and contributors of our website.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. General Information</h2>
        <p className="mb-4">
          GiftMaGirl is a digital gifting and entertainment platform that allows users to send virtual gifts
          and receive personalized digital content in return. All services are provided in good faith and are
          intended solely for personal enjoyment. By using the platform, you confirm that you are at least
          18 years of age and legally permitted to engage in online transactions in your country of residence.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Limitation of Liability</h2>
        <p className="mb-4">
          GiftMaGirl provides services on an “as-is” and “as-available” basis. We make no guarantees regarding
          the uninterrupted availability, performance, or accuracy of the platform. To the fullest extent
          permitted by law, GiftMaGirl and its affiliates are not liable for any direct, indirect, incidental,
          or consequential damages arising from your use of the platform.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Payments & Transactions</h2>
        <p className="mb-4">
          All payments made on GiftMaGirl are securely processed through trusted payment gateways such as 
          Stripe or Razorpay. We do not store any sensitive payment information on our servers. 
          By completing a transaction, you authorize us to debit the selected payment method for the 
          chosen gift or service.
        </p>
        <p className="mb-4">
          Refunds and cancellations are subject to our{" "}
          <a href="/refund-policy" className="text-primary underline">
            Refund Policy
          </a>.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Cancellations & Refunds</h2>
        <p className="mb-4">
          Users may cancel their orders only within 30 seconds of payment completion. Beyond this time frame,
          cancellations will not be accepted and payments will be considered final. Refunds, if applicable,
          will be processed back to the original payment method within a reasonable timeframe depending on 
          the bank or payment provider.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. User Responsibilities</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>You agree not to misuse the platform in any way that may harm other users or our systems.</li>
          <li>You agree not to attempt unauthorized access, hacking, or exploitation of the platform.</li>
          <li>You may not use GiftMaGirl for any illegal, harmful, or fraudulent activities.</li>
          <li>Any violation of these Terms may result in termination of your access without notice.</li>
        </ul>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Intellectual Property</h2>
        <p className="mb-4">
          All content, designs, branding, logos, and digital media available on GiftMaGirl are protected by
          intellectual property rights. Users are prohibited from copying, redistributing, or commercially
          exploiting any part of the service without prior written consent.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Digital Content Disclaimer</h2>
        <p className="mb-4">
          All profile images, media, and visuals shown on GiftMaGirl are AI-generated representations
          and do not depict real individuals. Any resemblance to actual persons, living or deceased, is purely coincidental. 
          These representations are intended exclusively for entertainment purposes.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">8. Privacy & Data Protection</h2>
        <p className="mb-4">
          We value your privacy. Please review our{" "}
          <a href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </a>{" "}
          to understand how we collect, use, and safeguard your personal information. By using our platform,
          you consent to the collection and use of your data in accordance with our policies.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">9. Changes to Terms</h2>
        <p className="mb-4">
          GiftMaGirl reserves the right to modify, update, or amend these Terms & Conditions at any time
          without prior notice. It is your responsibility to review this page periodically to stay informed
          of any changes. Continued use of the platform following updates constitutes acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">10. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
          arising under these Terms will be subject to the exclusive jurisdiction of the courts in Amritsar, Punjab, India.
        </p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">11. Contact Information</h2>
        <p className="mb-4">
          For questions or concerns about these Terms & Conditions, you may reach us at{" "}
          <span className="text-primary font-bold">support@giftmagirl.com</span>.
        </p>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
