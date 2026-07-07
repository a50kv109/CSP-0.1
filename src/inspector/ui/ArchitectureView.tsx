import React from 'react';
import { ArrowDown, RefreshCw, Zap, Database, Cpu, Brain } from 'lucide-react';

const ArchitectureView: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 -z-10"></div>

      <div className="flex flex-col items-center space-y-6 w-full max-w-2xl relative">
        
        {/* Input */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-4 bg-slate-900 border border-slate-700 rounded-lg flex flex-col items-center w-64 text-center shadow-xl">
            <span className="text-xs font-mono text-slate-400 mb-1">INPUT STREAM</span>
            <span className="text-lg font-bold text-white">Problem / Task</span>
            <span className="text-xs text-slate-500">(Group + Target)</span>
          </div>
        </div>

        <ArrowDown className="text-slate-600 animate-bounce" />

        {/* Deep Key Gen */}
        <div className="p-3 bg-slate-900/80 border border-slate-600 border-dashed rounded flex items-center justify-center w-56">
           <Cpu className="w-4 h-4 mr-2 text-cyan-400" />
           <span className="text-sm font-mono text-cyan-400">Deep Key Generator</span>
        </div>

        <ArrowDown className="text-slate-600" />

        {/* Core Systems Row */}
        <div className="flex flex-row items-stretch justify-center space-x-8 w-full">
            
            {/* Citta Layer */}
            <div className="flex-1 p-6 bg-slate-900 border-2 border-green-500/30 rounded-xl relative shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col items-center justify-center min-h-[140px]">
                <div className="absolute top-0 right-0 p-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <Database className="w-8 h-8 text-green-400 mb-2" />
                <h3 className="font-bold text-green-400">CITTA LAYER</h3>
                <p className="text-xs text-green-600/80 text-center">Pattern Memory & Karma</p>
                <div className="mt-2 flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                </div>
            </div>

            {/* Matrix Core */}
            <div className="flex-1 p-6 bg-slate-900 border-2 border-purple-500/30 rounded-xl relative shadow-[0_0_30px_rgba(168,85,247,0.1)] flex flex-col items-center justify-center min-h-[140px]">
                 <div className="absolute top-0 left-0 p-2 text-[10px] font-mono text-purple-500">
                     fallback_only
                 </div>
                 <Brain className="w-8 h-8 text-purple-400 mb-2" />
                 <h3 className="font-bold text-purple-400">MATRIX CORE</h3>
                 <p className="text-xs text-purple-600/80 text-center">Buddhi / Logic / Math</p>
                 <div className="mt-2 w-full h-1 bg-purple-900 rounded overflow-hidden">
                     <div className="h-full bg-purple-500 w-1/3 animate-[shimmer_2s_infinite]"></div>
                 </div>
            </div>

        </div>

        {/* Logic Connection */}
        <div className="absolute top-[48%] w-[60%] h-1 border-t-2 border-dashed border-slate-700 -z-10 flex justify-between items-center px-2">
            <span className="text-[10px] bg-slate-950 px-1 text-slate-500">HIT</span>
            <span className="text-[10px] bg-slate-950 px-1 text-slate-500">MISS</span>
        </div>

        <ArrowDown className="text-slate-600" />

        {/* Selector */}
        <div className="p-3 bg-slate-800 border border-slate-600 rounded w-48 text-center text-sm font-bold text-slate-300">
            Decision Selector
            <div className="text-[10px] font-normal text-slate-500">Max(Karma Weight)</div>
        </div>

        <ArrowDown className="text-green-500" />

        {/* Output */}
        <div className="relative group w-full max-w-xs">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-cyan-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative p-4 bg-slate-900 border border-green-500/50 rounded-lg flex items-center justify-between shadow-xl">
             <div className="flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="font-bold text-white">SOLUTION</span>
             </div>
             <div className="text-xs font-mono text-green-400">VALID</div>
          </div>
        </div>

        {/* Feedback Loop */}
        <div className="absolute right-0 top-1/2 transform translate-x-24 -translate-y-1/2 h-64 w-32 border-r-2 border-y-2 border-yellow-500/30 rounded-r-3xl flex items-center justify-end pr-2">
             <div className="rotate-90 text-yellow-500/80 text-xs font-bold flex items-center gap-2">
                <RefreshCw className="w-3 h-3" />
                KARMA UPDATE
             </div>
        </div>

      </div>
    </div>
  );
};

export default ArchitectureView;