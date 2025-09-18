import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, Gift, Star, RotateCcw, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface Model {
  id: string;
  name: string;
  age: number;
  nationality: string;
  image: string;
}

const thankYouMessages = [
  "Thank you so much, you made my day! 🥰",
  "You're so sweet! This means everything to me 💕",
  "I'm so grateful for your kindness! ✨",
  "You just brightened my whole week! 🌟",
  "This is the sweetest thing ever! 💖",
  "You're absolutely amazing! Thank you! 🎁",
  "I can't stop smiling! You're the best! 😊",
  "This made me so happy! Thank you darling! 💝"
];

const Reward = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [thankYouMessage, setThankYouMessage] = useState("");
  const [giftCount, setGiftCount] = useState(0);
  const [showSpecialReward, setShowSpecialReward] = useState(false);
  const [countdown, setCountdown] = useState(180); // 3 minutes in seconds
  const [showMessage, setShowMessage] = useState(false);
  const [showOnlineStatus, setShowOnlineStatus] = useState(false);
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    const model = localStorage.getItem('selectedModel');
    const count = parseInt(localStorage.getItem('giftCount') || '0');
    
    if (model) {
      setSelectedModel(JSON.parse(model));
      setGiftCount(count);
      
      // Check if eligible for special reward (3+ gifts)
      if (count >= 3) {
        setShowSpecialReward(true);
      }
      
      // Random thank you message
      const randomMessage = thankYouMessages[Math.floor(Math.random() * thankYouMessages.length)];
      setThankYouMessage(randomMessage);
      
      // Start countdown timer
      startRewardSequence();
    } else {
      navigate('/');
    }
  }, [navigate]);

  const startRewardSequence = () => {
    // Random time between 30 seconds and 3 minutes
    const randomTime = Math.floor(Math.random() * 150) + 30; // 30-180 seconds
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowMessage(true);
          setShowOnlineStatus(true);
          
          // Hide online status after 6 seconds
          setTimeout(() => {
            setShowOnlineStatus(false);
            setShowReward(true);
          }, 6000);
          
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Show message at random time
    setTimeout(() => {
      clearInterval(timer);
      setShowMessage(true);
      setShowOnlineStatus(true);
      
      // Hide online status after 6 seconds
      setTimeout(() => {
        setShowOnlineStatus(false);
        setShowReward(true);
      }, 6000);
    }, randomTime * 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!selectedModel) return null;

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden p-4 cursor-interactive">
      {/* Celebration particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="w-4 h-4 text-secondary opacity-60" />
            ) : i % 3 === 1 ? (
              <Sparkles className="w-3 h-3 text-primary opacity-50" />
            ) : (
              <Star className="w-3 h-3 text-gold opacity-40" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Success Header */}
        <div className="space-y-8 mb-12">
          <div className="flex items-center justify-center gap-4">
            <Gift className="w-16 h-16 text-primary animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-black text-gradient-primary">
              Gift Delivered!
            </h1>
            <Sparkles className="w-16 h-16 text-secondary animate-spin-slow" />
          </div>
        </div>

        {/* Countdown Timer or Message */}
        {!showMessage ? (
          <div className="mb-12">
            <div className="bg-gradient-card p-8 rounded-2xl border border-primary/30 neon-glow-primary max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-primary animate-pulse" />
                <h3 className="text-2xl font-bold text-primary">Processing Your Gift...</h3>
              </div>
              <p className="text-lg text-foreground mb-6">
                Expected time to receive reward:
              </p>
              <div className="text-6xl font-black text-gradient-primary animate-pulse">
                {formatTime(countdown)}
              </div>
              <p className="text-sm text-muted-foreground mt-4 animate-pulse">
                She's notified! She'll soo send something special for you...
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-12">
            <div className="bg-gradient-card p-8 rounded-2xl border border-primary/30 neon-glow-primary max-w-2xl mx-auto animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <img
                    src={selectedModel.image}
                    alt={selectedModel.name}
                    className="w-24 h-32 object-cover rounded-xl"
                  />
                  {showOnlineStatus && (
                    <div className="absolute -top-2 -right-2 animate-fade-in">
                      <div className="flex items-center gap-1 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
                        <div className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse"></div>
                        Online
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 text-left">
                  <div className="bg-primary/10 p-4 rounded-2xl rounded-tl-none">
                    <p className="text-lg text-foreground mb-2">{thankYouMessage}</p>
                    <p className="text-sm text-primary font-bold">- {selectedModel.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Special Selfie */}
        {showReward && (
          <div className="mb-12 animate-fade-in">
            <div className="bg-gradient-card p-6 rounded-2xl border border-secondary/30 neon-glow-secondary max-w-md mx-auto">
              <h3 className="text-xl font-bold text-secondary mb-4">Special Thank You Photo</h3>
              <div className="relative">
                <img
                  src={`https://picsum.photos/300/400?random=${selectedModel.id}`}
                  alt={`${selectedModel.name} with gift`}
                  className="w-full rounded-xl"
                />
                <div className="absolute top-2 right-2 bg-gold/90 text-gold-foreground px-2 py-1 rounded-lg text-xs font-bold">
                  EXCLUSIVE
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gift Counter & Special Reward */}
        {showReward && (
          <>
            <div className="space-y-6 mb-12">
              <div className="bg-gradient-card p-6 rounded-2xl border border-accent/30 neon-glow-accent max-w-md mx-auto">
                <h3 className="text-lg font-bold text-accent mb-2">Your Gift Count</h3>
                <div className="text-4xl font-black text-gradient-primary">{giftCount}</div>
                {giftCount < 3 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Send {3 - giftCount} more gifts to unlock special rewards!
                  </p>
                )}
              </div>

              {showSpecialReward && (
                <div className="animate-fade-in">
                  <div className="bg-gradient-card p-8 rounded-2xl border-2 border-gold neon-glow-primary max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Star className="w-8 h-8 text-gold animate-pulse" />
                      <h3 className="text-2xl font-black text-gold">SPECIAL REWARD UNLOCKED!</h3>
                      <Star className="w-8 h-8 text-gold animate-pulse" />
                    </div>
                    <p className="text-lg text-foreground mb-6">
                      Congratulations! You've sent 3+ gifts and unlocked exclusive content!
                    </p>
                    <Button
                      variant="gold"
                      size="lg"
                      onClick={() => navigate('/special-reward')}
                      className="animate-neon-pulse"
                    >
                      <Star className="w-5 h-5" />
                      View Special Reward
                      <Sparkles className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                variant="casino"
                size="xl"
                onClick={() => navigate('/models')}
                className="px-16 animate-neon-pulse"
              >
                <RotateCcw className="w-6 h-6" />
                Gift Again
                <Gift className="w-6 h-6" />
              </Button>
              
              <p className="text-muted-foreground">
                Ready to make another girl's day? Choose a new model!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
              <div className="bg-gradient-card p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">{giftCount}</div>
                <div className="text-sm text-muted-foreground">Gifts Sent</div>
              </div>
              <div className="bg-gradient-card p-4 rounded-xl">
                <div className="text-2xl font-bold text-secondary">{giftCount > 0 ? '100%' : '0%'}</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="bg-gradient-card p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent">{Math.max(0, 3 - giftCount)}</div>
                <div className="text-sm text-muted-foreground">To Next Reward</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reward;