import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Crown, Star, Sparkles, Heart, Gift } from "lucide-react";
import { useState, useEffect } from "react";

interface Model {
  id: string;
  name: string;
  age: number;
  nationality: string;
  image: string;
}

const SpecialReward = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [giftCount, setGiftCount] = useState(0);

  useEffect(() => {
    const model = localStorage.getItem('selectedModel');
    const count = parseInt(localStorage.getItem('giftCount') || '0');
    
    if (model && count >= 3) {
      setSelectedModel(JSON.parse(model));
      setGiftCount(count);
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!selectedModel) return null;

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden p-4">
      {/* Premium background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Star className="w-2 h-2 text-gold opacity-70 animate-pulse" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/reward')}
            className="text-foreground hover:text-primary"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>
        </div>

        {/* Premium Header */}
        <div className="text-center space-y-8 mb-12">
          <div className="flex items-center justify-center gap-4">
            <Crown className="w-16 h-16 text-gold animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-black text-gradient-primary">
              VIP Exclusive
            </h1>
            <Crown className="w-16 h-16 text-gold animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="bg-gold/10 border-2 border-gold rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-xl text-gold font-bold mb-2">🎉 CONGRATULATIONS! 🎉</p>
            <p className="text-lg text-foreground">
              You've reached VIP status with {giftCount} gifts sent!
              <br />
              Unlock this exclusive premium content from {selectedModel.name}
            </p>
          </div>
        </div>

        {/* Exclusive Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Premium Photo */}
          <div className="bg-gradient-card p-6 rounded-2xl border-2 border-gold neon-glow-primary">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-bold text-gold">Exclusive VIP Photo</h3>
              <Star className="w-5 h-5 text-gold animate-pulse" />
            </div>
            
            <div className="relative">
              <img
                src={`https://picsum.photos/400/500?random=${selectedModel.id}-vip`}
                alt="VIP Exclusive Content"
                className="w-full rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent rounded-xl" />
              <div className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-lg text-sm font-bold">
                VIP ONLY
              </div>
              <div className="absolute bottom-4 left-4 bg-background/90 text-foreground px-3 py-2 rounded-lg">
                <p className="text-sm font-medium">Personal message for you ✨</p>
              </div>
            </div>
          </div>

          {/* Personal Message */}
          <div className="bg-gradient-card p-6 rounded-2xl border-2 border-secondary neon-glow-secondary">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-bold text-secondary">Personal VIP Message</h3>
              <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <img
                  src={selectedModel.image}
                  alt={selectedModel.name}
                  className="w-16 h-20 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <div className="bg-secondary/10 p-4 rounded-2xl rounded-tl-none">
                    <p className="text-foreground mb-4">
                      "Hey gorgeous! 😘 You've been such an amazing supporter... 
                      I wanted to give you something special just for you. 
                      You're one of my favorite people and this exclusive content 
                      is my way of saying thank you for being so generous! 💕
                      
                      Keep being amazing, and I can't wait to see what other 
                      surprises you have for me! 🎁✨"
                    </p>
                    <p className="text-sm text-secondary font-bold">
                      - {selectedModel.name} 💋
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VIP Perks */}
        <div className="bg-gradient-card p-8 rounded-2xl border border-accent/30 neon-glow-accent mb-12">
          <h3 className="text-2xl font-bold text-accent text-center mb-6 flex items-center justify-center gap-2">
            <Star className="w-6 h-6" />
            VIP Member Perks
            <Star className="w-6 h-6" />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <Crown className="w-12 h-12 text-gold mx-auto mb-3 animate-pulse" />
              <h4 className="font-bold text-gold mb-2">Priority Access</h4>
              <p className="text-sm text-muted-foreground">Get first access to new models and features</p>
            </div>
            
            <div className="text-center p-4">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-3 animate-pulse" />
              <h4 className="font-bold text-secondary mb-2">Exclusive Content</h4>
              <p className="text-sm text-muted-foreground">Access VIP-only photos and messages</p>
            </div>
            
            <div className="text-center p-4">
              <Gift className="w-12 h-12 text-primary mx-auto mb-3 animate-pulse" />
              <h4 className="font-bold text-primary mb-2">Special Discounts</h4>
              <p className="text-sm text-muted-foreground">Get 15% off all future gifts</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <Button
              variant="gold"
              size="xl"
              onClick={() => navigate('/models')}
              className="px-16 animate-neon-pulse"
            >
              <Crown className="w-6 h-6" />
              Continue as VIP Member
              <Sparkles className="w-6 h-6" />
            </Button>
            
            <p className="text-muted-foreground">
              Keep gifting to unlock even more exclusive content!
            </p>
          </div>

          {/* VIP Status */}
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Crown className="w-8 h-8 text-gold" />
              <span className="text-2xl font-black text-gold">VIP STATUS</span>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-1">{giftCount}</div>
              <div className="text-sm text-gold/80">Gifts Sent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialReward;