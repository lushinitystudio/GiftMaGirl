import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Shield, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

const ConsentGate = () => {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [confirmedAge, setConfirmedAge] = useState(false);

  const canContinue = acceptedTerms && confirmedAge;

  const handleContinue = () => {
    if (canContinue) {
      localStorage.setItem('consentGiven', 'true');
      navigate('/landing');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center cursor-interactive">
      {/* Floating elements */}
      <div className="absolute inset-0">
        <Shield className="absolute top-20 left-20 w-8 h-8 text-primary animate-float opacity-50" />
        <Heart className="absolute top-40 right-20 w-6 h-6 text-secondary animate-bounce opacity-30" />
        <Sparkles className="absolute bottom-40 left-40 w-10 h-10 text-accent animate-pulse opacity-40" />
        <Shield className="absolute bottom-20 right-40 w-6 h-6 text-purple animate-float opacity-30" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto p-8">
        <div className="bg-gradient-card p-12 rounded-3xl border-2 border-primary/30 neon-glow-primary text-center space-y-8">
          {/* Logo */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-gradient-primary animate-glow-pulse">
              GiftMaGirl
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-1 bg-gradient-primary rounded-full" />
              <Sparkles className="w-5 h-5 text-gold animate-spin-slow" />
              <div className="w-16 h-1 bg-gradient-primary rounded-full" />
            </div>
          </div>

          {/* Consent Message */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Welcome!</h2>
            <p className="text-lg text-muted-foreground">
              Before entering our platform, please confirm the following:
            </p>
          </div>

          {/* Checkboxes */}
          <div className="space-y-6 text-left">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-accent/10 border border-accent/30">
              <Checkbox
                id="terms"
                checked={acceptedTerms}
                onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                className="mt-1"
              />
              <label 
                htmlFor="terms" 
                className="text-foreground cursor-pointer leading-relaxed"
              >
                I accept the{" "}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-primary animate-glow-pulse"
                >
                  Terms & Conditions
                </a>
                    {" "}
                  and understand this is an entertainment platform.
              </label>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-secondary/10 border border-secondary/30">
              <Checkbox
                id="age"
                checked={confirmedAge}
                onCheckedChange={(checked) => setConfirmedAge(checked === true)}
                className="mt-1"
              />
              <label 
                htmlFor="age" 
                className="text-foreground cursor-pointer leading-relaxed"
              >
                I confirm I am 18+ years old and legally allowed to access this content
              </label>
            </div>
          </div>

          {/* Continue Button */}
          <Button
            variant={canContinue ? "casino" : "ghost"}
            size="xl"
            onClick={handleContinue}
            disabled={!canContinue}
            className="px-16 py-6 text-xl animate-neon-pulse"
          >
            <Shield className="w-6 h-6" />
            Enter Site
            <Sparkles className="w-6 h-6" />
          </Button>

          {!canContinue && (
            <p className="text-sm text-muted-foreground animate-pulse">
              Please check both boxes to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsentGate;