import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Gift, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden cursor-interactive">
      {/* Animated background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <Sparkles className="absolute top-20 left-20 w-8 h-8 text-primary animate-float" />
        <Gift className="absolute top-40 right-20 w-6 h-6 text-secondary animate-bounce" />
        <Heart className="absolute bottom-40 left-40 w-10 h-10 text-accent animate-pulse" />
        <Sparkles className="absolute bottom-20 right-40 w-6 h-6 text-purple animate-float" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo/Brand */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-gradient-primary animate-glow-pulse">
              GiftMaGirl
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="w-20 h-1 bg-gradient-primary rounded-full" />
              <Sparkles className="w-6 h-6 text-gold animate-spin-slow" />
              <div className="w-20 h-1 bg-gradient-primary rounded-full" />
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              <span className="text-gradient-secondary">Choose Your Dream Girl</span>
              <br />
              & Send a Gift
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Experience the thrill of giving with our gifting platform. 
              Select from stunning models and send amazing gifts!
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-6">
            <Button 
              variant="casino" 
              size="xl" 
              onClick={() => navigate('/models')}
              className="px-16 py-8 text-2xl animate-neon-pulse hover:animate-glow-pulse"
            >
              <Gift className="w-8 h-8" />
              Start Now
              <Sparkles className="w-8 h-8" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Join thousands of satisfied gifters • No registration required
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-gradient-card p-6 rounded-xl border border-border/50 neon-glow-primary">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-primary mb-2"></h3>
              <p className="text-muted-foreground">Models will be notified that you sent them</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl border border-border/50 neon-glow-secondary">
              <Gift className="w-12 h-12 text-secondary mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-secondary mb-2">Premium Gifts</h3>
              <p className="text-muted-foreground">From flowers to luxury items, find the perfect gift</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl border border-border/50 neon-glow-accent">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-accent mb-2">Instant Rewards</h3>
              <p className="text-muted-foreground">Once you chose, we will handle the shipment of the order on your behalf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;