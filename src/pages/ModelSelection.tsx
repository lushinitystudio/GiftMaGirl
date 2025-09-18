import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shuffle, Sparkles, Heart, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface Model {
  id: string;
  name: string;
  age: number;
  nationality: string;
  image: string;
}

const modelsData: Model[] = [
  { id: "model-0", name: "Elena", age: 22, nationality: "Italian", image: "/models/elena.png" },
  { id: "model-1", name: "Sakura", age: 20, nationality: "Japanese", image: "/models/sakura.png" },
  { id: "model-2", name: "Isabella", age: 23, nationality: "Russian", image: "/models/isabella.png" },
  { id: "model-3", name: "Amélie", age: 21, nationality: "French", image: "/models/amelie.png" },
  { id: "model-4", name: "Priya", age: 24, nationality: "Indian", image: "/models/priya.png" },
  { id: "model-5", name: "Luna", age: 21, nationality: "Spanish", image: "/models/luna.png" },
  { id: "model-6", name: "Sofia", age: 23, nationality: "Russian", image: "/models/sofia.png" },
  { id: "model-7", name: "Kira", age: 20, nationality: "German", image: "/models/kira.png" },
  { id: "model-8", name: "Maya", age: 24, nationality: "Swedish", image: "/models/maya.png" },
  { id: "model-9", name: "Zara", age: 22, nationality: "Korean", image: "/models/zara.png" },
  { id: "model-10", name: "Aurora", age: 21, nationality: "Italian", image: "/models/aurora.png" },
  { id: "model-11", name: "Nina", age: 22, nationality: "Japanese", image: "/models/nina.png" },
  { id: "model-12", name: "Viktoria", age: 23, nationality: "Russian", image: "/models/viktoria.png" },
  { id: "model-13", name: "Chloe", age: 20, nationality: "French", image: "/models/chloe.png" },
  { id: "model-14", name: "Anika", age: 24, nationality: "German", image: "/models/anika.png" },
  { id: "model-15", name: "Valeria", age: 22, nationality: "Spanish", image: "/models/valeria.png" },
  

];

function getRandomModels(all: Model[], count: number) {
  const shuffled = [...all].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const ModelSelection = () => {
  const navigate = useNavigate();
  const [models, setModels] = useState<Model[]>(getRandomModels(modelsData, 5));
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

const handleShuffle = () => {
  setIsShuffling(true);
  setTimeout(() => {
    setModels(getRandomModels(modelsData, 5)); // always pick 5 fresh random ones
    setSelectedModel(null);
    setIsShuffling(false);
  }, 1000);
};


  const handleSelectModel = (model: Model) => {
    setSelectedModel(model);
    // Store selected model in localStorage for next page
    localStorage.setItem('selectedModel', JSON.stringify(model));
    setTimeout(() => {
      navigate('/gifts');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden p-4">
      {/* Background elements */}
      <div className="absolute inset-0">
        <Sparkles className="absolute top-10 left-10 w-6 h-6 text-gold animate-spin-slow opacity-50" />
        <Heart className="absolute top-20 right-20 w-8 h-8 text-secondary animate-pulse opacity-30" />
        <Sparkles className="absolute bottom-20 left-20 w-4 h-4 text-accent animate-float opacity-40" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-foreground hover:text-primary"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>
          
          <h1 
            className="text-4xl md:text-6xl font-black text-white text-center flex-1 relative"
            style={{
              textShadow: '0 0 8px #00f0ff, 0 0 16px #ff3fff, 0 0 24px #00ff9f',
              WebkitTextFillColor: 'white'
            }}
          >
            Choose Your Girl
          </h1>

          
          <div className="w-20" /> {/* Spacer */}
        </div>

        {/* Shuffle Button */}
        <div className="text-center mb-12">
          <Button
            variant="shuffle"
            size="lg"
            onClick={handleShuffle}
            disabled={isShuffling}
            className={`px-12 ${isShuffling ? 'animate-slot-spin' : ''}`}
          >
            <Shuffle className="w-6 h-6" />
            {isShuffling ? 'Shuffling...' : 'Shuffle Models'}
            <Sparkles className="w-6 h-6" />
          </Button>
        </div>

        {/* Circular Model Layout */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            {models.map((model, index) => {
              const angle = (index * 72) - 90; // 360/5 = 72 degrees per model, -90 to start at top
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={model.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${
                    isShuffling ? 'animate-slot-spin' : ''
                  } ${
                    selectedModel?.id === model.id ? 'scale-110 z-20' : 'hover:scale-105 z-10'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  onClick={() => handleSelectModel(model)}
                >
                  {/* Model Card - Circular */}
                  <div
                    className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 transition-all duration-300 overflow-hidden ${
                      selectedModel?.id === model.id
                        ? 'border-primary neon-glow-primary scale-110'
                        : 'border-border/30 hover:border-primary/50 hover:neon-glow-primary'
                    }`}
                  >
                    {/* Profile image */}
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover rounded-full"
                    />

                    {/* Hover overlay with name + age + nationality */}
                    <div className="absolute inset-0 rounded-full bg-black/70 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-bold">{model.name}</p>
                      <p className="text-xs">{model.age} • {model.nationality}</p>
                    </div>


                    {/* If selected, show heart pulse */}
                    {selectedModel?.id === model.id && (
                      <div className="absolute inset-0 rounded-full bg-primary/30 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-primary animate-pulse" />
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Selection Prompt */}
        <div className="text-center mt-16 space-y-4">
          {!selectedModel ? (
            <p className="text-xl text-muted-foreground animate-pulse">
              Click on a model to select her
            </p>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <p className="text-2xl text-primary font-bold">
                Great choice! {selectedModel.name} is waiting for your gift...
              </p>
              <p className="text-muted-foreground">
                Redirecting to gift selection...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelSelection;