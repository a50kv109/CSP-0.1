import React, { useState } from 'react';
import { LayoutDashboard, Brain, Activity, Layers, PlayCircle, Film } from 'lucide-react';
import ArchitectureView from './components/ArchitectureView';
import PatternSpaceView from './components/PatternSpaceView';
import ComparisonView from './components/ComparisonView';
import ExperimentView from './components/ExperimentView';
import VideoGenView from './components/VideoGenView';
import { Pattern } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('experiment');
  const [globalPatterns, setGlobalPatterns] = useState<Pattern[]>([]);

  // Callback to lift state from experiment to visualize in other tabs
  const handlePatternsUpdate = (patterns: Pattern[]) => {
    setGlobalPatterns(patterns);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'arch': return <ArchitectureView />;
      case 'space': return <PatternSpaceView patterns={globalPatterns} />;
      case 'compare': return <ComparisonView />;
      case 'experiment': return <ExperimentView onPatternsUpdate={handlePatternsUpdate} />;
      case 'veo': return <VideoGenView />;
      default: return <ExperimentView onPatternsUpdate={handlePatternsUpdate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
            D7
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              DEPSIK 7.5
            </h1>
            <p className="text-[10px] text-cyan-500 font-mono tracking-widest">COGNITIVE ARCHITECTURE</p>
          </div>
        </div>
        
        <div className="text-xs text-slate-600 font-mono hidden md:block">
           REPO: a50kv109/DeepSeekAI-2025
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar Nav */}
        <nav className="w-full md:w-64 bg-slate-900/50 border-r border-slate-800 flex flex-row md:flex-col p-2 gap-1 overflow-x-auto md:overflow-visible shrink-0">
           
           <button 
             onClick={() => setActiveTab('arch')}
             className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'arch' ? 'bg-slate-800 text-cyan-400 border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
           >
             <LayoutDashboard className="w-4 h-4" />
             Architecture
           </button>

           <button 
             onClick={() => setActiveTab('space')}
             className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'space' ? 'bg-slate-800 text-green-400 border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
           >
             <Brain className="w-4 h-4" />
             Citta Space
           </button>

           <button 
             onClick={() => setActiveTab('compare')}
             className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'compare' ? 'bg-slate-800 text-purple-400 border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
           >
             <Layers className="w-4 h-4" />
             Comparison
           </button>

           <div className="h-px bg-slate-800 my-2 mx-2 hidden md:block"></div>

           <button 
             onClick={() => setActiveTab('experiment')}
             className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'experiment' ? 'bg-cyan-900/20 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
           >
             <PlayCircle className="w-4 h-4" />
             Live Lab
           </button>

           <button 
             onClick={() => setActiveTab('veo')}
             className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'veo' ? 'bg-yellow-900/20 text-yellow-400 border border-yellow-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
           >
             <Film className="w-4 h-4" />
             Veo Animation
           </button>

        </nav>

        {/* Content Area */}
        <main className="flex-1 bg-[#0b0f19] relative overflow-hidden">
            <div className="absolute inset-0 overflow-y-auto">
               {renderContent()}
            </div>
        </main>

      </div>
    </div>
  );
}

export default App;