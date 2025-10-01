import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Flower, Heart, UtensilsCrossed, Sparkles } from "lucide-react";
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

const gifts: Gift[] = [
  // Cheap Tier (Under $25)
  {
    id: 'flowers',
    name: 'Beautiful Flowers',
    price: 15,
    tier: 'cheap',
    icon: <Flower className="w-8 h-8" />,
    description: 'A lovely bouquet to brighten her day'
  },
  {
    id: 'plush-toy',
    name: 'Cute Plush Toy',
    price: 20,
    tier: 'cheap',
    icon: <Heart className="w-8 h-8" />,
    description: 'Adorable teddy bear she can cuddle'
  },
  
  // Medium Tier ($25-$75)
  {
    id: 'chocolates',
    name: 'Premium Chocolates',
    price: 35,
    tier: 'medium',
    icon: <Sparkles className="w-8 h-8" />,
    description: 'Luxury chocolates from Belgium'
  },
  {
    id: 'perfume',
    name: 'Designer Perfume',
    price: 65,
    tier: 'medium',
    icon: <Sparkles className="w-8 h-8" />,
    description: 'Elegant fragrance that lasts all day'
  },
  {
    id: 'dinner',
    name: 'Gourmet Dinner',
    price: 45,
    tier: 'medium',
    icon: <UtensilsCrossed className="w-8 h-8" />,
    description: 'Fine dining experience at a nice restaurant'
  },
  
  // Premium Tier ($75+)
  {
    id: 'jewelry',
    name: 'Gold Jewelry',
    price: 125,
    tier: 'premium',
    icon: <Sparkles className="w-8 h-8" />,
    description: 'Beautiful gold necklace or earrings'
  },
  {
    id: 'handbag',
    name: 'Designer Handbag',
    price: 185,
    tier: 'premium',
    icon: <Heart className="w-8 h-8" />,
    description: 'Luxury designer purse from top brands'
  },
  {
    id: 'tech-gadget',
    name: 'Latest Tech Gadget',
    price: 250,
    tier: 'premium',
    icon: <Sparkles className="w-8 h-8" />,
    description: 'Premium smartphone or wireless earbuds'
  }
];

const GiftSelection = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [cart, setCart] = useState<Gift[]>([]);

  useEffect(() => {
    const model = localStorage.getItem('selectedModel');
    if (model) {
      setSelectedModel(JSON.parse(model));
    } else {
      navigate('/models');
    }
  }, [navigate]);

  const addToCart = (gift: Gift) => {
    setCart(prev => [...prev, gift]);
  };

  const getTierStyle = (tier: string) => {
    switch (tier) {
      case 'cheap':
        return 'border-accent neon-glow-accent bg-accent/10';
      case 'medium':
        return 'border-secondary neon-glow-secondary bg-secondary/10';
      case 'premium':
        return 'border-gold neon-glow-primary bg-gold/10';
      default:
        return 'border-border';
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'cheap':
        return 'text-accent';
      case 'medium':
        return 'text-secondary';
      case 'premium':
        return 'text-gold';
      default:
        return 'text-foreground';
    }
  };

  const totalPrice = cart.reduce((sum, gift) => sum + gift.price, 0);

  if (!selectedModel) return null;

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden p-4 cursor-interactive">
      {/* Background elements */}
      <div className="absolute inset-0">
        <Sparkles className="absolute top-10 right-10 w-6 h-6 text-primary animate-float opacity-50" />
        <Heart className="absolute bottom-20 left-20 w-8 h-8 text-secondary animate-pulse opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/models')}
            className="text-foreground hover:text-primary"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Models
          </Button>
          
          {cart.length > 0 && (
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Items in cart: {cart.length}</span>
              <Button
                variant="casino"
                size="lg"
                onClick={() => {
                  localStorage.setItem('cart', JSON.stringify(cart));
                  navigate('/checkout');
                }}
                className="animate-neon-pulse"
              >
                <ShoppingCart className="w-5 h-5" />
                View Cart ${totalPrice}
              </Button>
            </div>
          )}
        </div>

        {/* Selected Model Display */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-6 bg-gradient-card p-6 rounded-2xl border border-primary/30 neon-glow-primary">
            <img
              src={selectedModel.image}
              alt={selectedModel.name}
              className="w-20 h-24 object-cover rounded-xl"
            />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-primary">{selectedModel.name}</h2>
              <p className="text-muted-foreground">{selectedModel.age} • {selectedModel.nationality}</p>
              <p className="text-foreground font-medium">What gift will you send?</p>
            </div>
          </div>
        </div>

        <h1
          className="text-4xl md:text-6xl font-black text-white text-center flex-1 relative mb-8"
          style={{
            textShadow: '0 0 8px #00f0ff, 0 0 16px #ff3fff, 0 0 24px #00ff9f',
            WebkitTextFillColor: 'white'
          }}
        >
          Choose Your Gift
        </h1>

        {/* Gift Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gifts.map((gift) => (
            <div
              key={gift.id}
              className={`bg-gradient-card p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${getTierStyle(gift.tier)}`}
              onClick={() => addToCart(gift)}
            >
              <div className="text-center space-y-6">
                <div className={`${getTierColor(gift.tier)} animate-float`}>
                  {gift.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{gift.name}</h3>
                  <p className="text-muted-foreground">{gift.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className={`text-4xl font-black ${getTierColor(gift.tier)}`}>
                    ${gift.price}
                  </div>
                  
                  <Button
                    variant={gift.tier === 'premium' ? 'gold' : gift.tier === 'medium' ? 'secondary' : 'neon'}
                    size="lg"
                    className="w-full font-bold"
                  >
                    Add to Cart
                  </Button>
                </div>

                {/* Tier Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  gift.tier === 'premium' ? 'bg-gold text-gold-foreground' :
                  gift.tier === 'medium' ? 'bg-secondary text-secondary-foreground' :
                  'bg-accent text-accent-foreground'
                }`}>
                  {gift.tier} tier
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="bg-gradient-card p-6 rounded-2xl border border-primary/30 neon-glow-primary animate-fade-in mb-12">
            <h3 className="text-xl font-bold text-primary mb-4">Your Cart</h3>
            <div className="space-y-2">
              {cart.map((gift, index) => (
                <div key={`${gift.id}-${index}`} className="flex justify-between items-center">
                  <span className="text-foreground">{gift.name}</span>
                  <span className="text-primary font-bold">${gift.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border/30 mt-4 pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-foreground">Total:</span>
                <span className="text-primary">${totalPrice}</span>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Button - Moved to Bottom */}
        {cart.length > 0 && (
          <div className="text-center mb-12">
            <Button
              variant="casino"
              size="xl"
              onClick={() => {
                localStorage.setItem('cart', JSON.stringify(cart));
                navigate('/checkout');
              }}
              className="px-20 py-8 text-2xl animate-neon-pulse font-black"
            >
              <ShoppingCart className="w-8 h-8" />
              Checkout ${totalPrice}
              <Sparkles className="w-8 h-8" />
            </Button>
          </div>
        )}

        {/* Motivational Text */}
        <div className="text-center mt-12">
          <p className="text-xl text-muted-foreground animate-pulse">
            {cart.length === 0 ? 
              "Select gifts to make her day special! 💝" :
              `${selectedModel.name} will love your ${cart.length} gift${cart.length > 1 ? 's' : ''}! 🎁`
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftSelection;