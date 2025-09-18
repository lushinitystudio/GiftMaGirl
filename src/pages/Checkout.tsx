import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Shield, Sparkles, Gift } from "lucide-react";
import { useState, useEffect } from "react";

interface Gift {
  id: string;
  name: string;
  price: number;
  tier: 'cheap' | 'medium' | 'premium';
  icon: React.ReactNode;
  description: string;
}

interface Model {
  id: string;
  name: string;
  age: number;
  nationality: string;
  image: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [cart, setCart] = useState<Gift[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const model = localStorage.getItem('selectedModel');
    const cartData = localStorage.getItem('cart');
    
    if (model && cartData) {
      setSelectedModel(JSON.parse(model));
      setCart(JSON.parse(cartData));
    } else {
      navigate('/models');
    }
  }, [navigate]);

  const totalPrice = cart.reduce((sum, gift) => sum + gift.price, 0);
  const processingFee = Math.round(totalPrice * 0.03); // 3% processing fee
  const finalTotal = totalPrice + processingFee;

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Increment gift counter
      const currentCount = parseInt(localStorage.getItem('giftCount') || '0');
      localStorage.setItem('giftCount', String(currentCount + cart.length));
      
      // Clear cart
      localStorage.removeItem('cart');
      
      setIsProcessing(false);
      navigate('/reward');
    }, 3000);
  };

  if (!selectedModel || cart.length === 0) return null;

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden p-4">
      {/* Background elements */}
      <div className="absolute inset-0">
        <Sparkles className="absolute top-10 right-10 w-6 h-6 text-gold animate-spin-slow opacity-50" />
        <Shield className="absolute bottom-20 left-20 w-8 h-8 text-accent animate-pulse opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/gifts')}
            className="text-foreground hover:text-primary"
            disabled={isProcessing}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Gifts
          </Button>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-gradient-primary text-center mb-12">
          Complete Your Gift
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl border border-primary/30 neon-glow-primary">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Gift className="w-6 h-6" />
                Gift Summary
              </h3>
              
              {/* Selected Model */}
              <div className="flex items-center gap-4 p-4 bg-background/20 rounded-xl mb-4">
                <img
                  src={selectedModel.image}
                  alt={selectedModel.name}
                  className="w-16 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-bold text-lg text-primary">{selectedModel.name}</h4>
                  <p className="text-muted-foreground">{selectedModel.age} • {selectedModel.nationality}</p>
                </div>
              </div>

              {/* Cart Items */}
              <div className="space-y-3">
                {cart.map((gift, index) => (
                  <div key={`${gift.id}-${index}`} className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="text-foreground">{gift.name}</span>
                    <span className="text-primary font-bold">${gift.price}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="text-foreground">${totalPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Processing Fee:</span>
                  <span className="text-foreground">${processingFee}</span>
                </div>
                <div className="border-t border-border/30 pt-2">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-primary">${finalTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl border border-secondary/30 neon-glow-secondary">
              <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                <CreditCard className="w-6 h-6" />
                Payment Details
              </h3>

              {!isProcessing ? (
                <div className="space-y-6">
                  {/* Stripe Payment Form Placeholder */}
                  <div className="bg-background/20 p-6 rounded-xl">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Card Number
                        </label>
                        <div className="w-full h-12 bg-input rounded-lg border border-border flex items-center px-4">
                          <span className="text-muted-foreground">**** **** **** ****</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Expiry
                          </label>
                          <div className="w-full h-12 bg-input rounded-lg border border-border flex items-center px-4">
                            <span className="text-muted-foreground">MM/YY</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            CVC
                          </label>
                          <div className="w-full h-12 bg-input rounded-lg border border-border flex items-center px-4">
                            <span className="text-muted-foreground">***</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Secured by Stripe • SSL Encrypted</span>
                  </div>

                  {/* Payment Button */}
                  <Button
                    variant="casino"
                    size="xl"
                    onClick={handlePayment}
                    className="w-full animate-neon-pulse"
                  >
                    <CreditCard className="w-6 h-6" />
                    Pay ${finalTotal} Now
                    <Sparkles className="w-6 h-6" />
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto animate-spin-slow">
                    <Sparkles className="w-full h-full text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-primary">Processing Payment...</h4>
                    <p className="text-muted-foreground">Please wait while we process your gift</p>
                    <div className="w-full bg-background/20 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full animate-pulse" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-card p-4 rounded-xl text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Secure Payment</p>
              </div>
              <div className="bg-gradient-card p-4 rounded-xl text-center">
                <Sparkles className="w-8 h-8 text-gold mx-auto mb-2 animate-pulse" />
                <p className="text-sm text-muted-foreground">Instant Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;