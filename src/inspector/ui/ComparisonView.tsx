import React from 'react';
import { Box, Layers, Zap, Eye, Database, Network, ArrowRight, RefreshCcw, Lock, Activity } from 'lucide-react';

const ComparisonView: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6 p-4 overflow-y-auto">
      
      {/* Feature Comparison Cards */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center shrink-0">
        
        {/* Neural Network Card */}
        <div className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl p-6 relative overflow-hidden group hover:border-slate-500 transition">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
            <Network className="w-24 h-24" />
          </div>
          <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5" /> Neural Network
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-slate-500 text-sm">Principle</span>
              <span className="text-slate-300 font-mono text-sm">Black Box</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-slate-500 text-sm">Memory</span>
              <span className="text-slate-300 font-mono text-sm">Billions of Parameters</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-slate-500 text-sm">Learning</span>
              <span className="text-slate-300 font-mono text-sm">Data-driven (Epochs)</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-slate-500 text-sm">Speed</span>
              <span className="text-slate-300 font-mono text-sm">Static (Post-training)</span>
            </div>
            <div className="flex justify-between items-center pb-2">
               <span className="text-slate-500 text-sm">Explainability</span>
               <span className="text-red-400 font-mono text-sm font-bold">Low</span>
            </div>
          </div>
        </div>

        {/* DEPSIK Card */}
        <div className="flex-1 bg-cyan-950/10 border border-cyan-500/30 rounded-xl p-6 relative overflow-hidden group hover:border-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
            <Database className="w-24 h-24 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <Box className="w-5 h-5" /> DEPSIK (Citta)
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-cyan-900/30 pb-2">
              <span className="text-cyan-700/70 text-sm">Principle</span>
              <span className="text-cyan-100 font-mono text-sm">Logic Tracing (Transparent)</span>
            </div>
            <div className="flex justify-between items-center border-b border-cyan-900/30 pb-2">
              <span className="text-cyan-700/70 text-sm">Memory</span>
              <span className="text-green-400 font-mono text-sm font-bold">Pattern Weights (Karma)</span>
            </div>
            <div className="flex justify-between items-center border-b border-cyan-900/30 pb-2">
              <span className="text-cyan-700/70 text-sm">Learning</span>
              <span className="text-yellow-400 font-mono text-sm font-bold">Solution-driven</span>
            </div>
            <div className="flex justify-between items-center border-b border-cyan-900/30 pb-2">
              <span className="text-cyan-700/70 text-sm">Speed</span>
              <span className="text-cyan-300 font-mono text-sm font-bold flex items-center gap-1">
                  Dynamic <Zap className="w-3 h-3" />
              </span>
            </div>
            <div className="flex justify-between items-center pb-2">
               <span className="text-cyan-700/70 text-sm">Explainability</span>
               <span className="text-white font-mono text-sm font-bold flex items-center gap-1">
                   Absolute <Eye className="w-3 h-3" />
               </span>
            </div>
          </div>
        </div>
      </div>

      {/* New Process Dynamics Contrast Section */}
      <div className="bg-slate-900/30 border border-slate-700/50 rounded-xl p-6 shrink-0">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" /> 
            Process Dynamics Contrast
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8">
            {/* Neural Network Process */}
            <div className="flex-1 space-y-4">
                <div className="text-sm font-bold text-slate-400 mb-2">NEURAL NETWORK (Offline Learning)</div>
                <div className="relative p-6 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between gap-2 overflow-hidden">
                    {/* Visual representation */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <Database className="w-8 h-8 text-slate-500" />
                        <span className="text-[10px] text-slate-500 font-mono">BIG DATA</span>
                    </div>
                    
                    <div className="flex items-center text-slate-700">
                        <ArrowRight className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col items-center gap-2 z-10 p-3 border border-slate-700 rounded bg-slate-900 border-dashed relative">
                        <RefreshCcw className="w-8 h-8 text-purple-500 animate-[spin_4s_linear_infinite]" />
                        <span className="text-[10px] text-purple-400 font-mono">EPOCHS 1..N</span>
                    </div>

                    <div className="flex items-center text-slate-700">
                        <ArrowRight className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col items-center gap-2 z-10">
                        <div className="relative">
                            <Layers className="w-8 h-8 text-slate-300" />
                            <Lock className="w-4 h-4 text-red-400 absolute -bottom-1 -right-1" />
                        </div>
                        <span className="text-[10px] text-slate-300 font-mono">FROZEN MODEL</span>
                    </div>
                    
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 px-2 font-mono">
                    <span>High Upfront Compute</span>
                    <span>Static Inference</span>
                </div>
            </div>

            {/* DEPSIK Process */}
            <div className="flex-1 space-y-4">
                 <div className="text-sm font-bold text-cyan-400 mb-2">DEPSIK (Real-time Experience)</div>
                 <div className="relative p-6 bg-slate-950 rounded-lg border border-cyan-900/50 flex items-center justify-between gap-2 overflow-hidden">
                    {/* Visual representation */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <Activity className="w-8 h-8 text-cyan-500" />
                        <span className="text-[10px] text-cyan-500 font-mono">TASK STREAM</span>
                    </div>

                    <div className="flex items-center text-cyan-900">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 z-10 p-3 border border-cyan-500/30 rounded bg-cyan-950/20">
                         <div className="flex items-center gap-1">
                            <Box className="w-5 h-5 text-white" />
                            <ArrowRight className="w-3 h-3 text-cyan-500" />
                            <Zap className="w-5 h-5 text-yellow-400" />
                         </div>
                         <span className="text-[10px] text-green-400 font-mono">SOLVE & CACHE</span>
                    </div>

                    <div className="flex items-center text-cyan-900">
                        <ArrowRight className="w-5 h-5" />
                    </div>

                     <div className="flex flex-col items-center gap-2 z-10">
                        <div className="relative">
                            <Database className="w-8 h-8 text-green-400" />
                             <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-slate-950"></div>
                        </div>
                        <span className="text-[10px] text-green-400 font-mono">GROWING MEMORY</span>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/10 to-transparent pointer-events-none"></div>
                 </div>
                 <div className="flex justify-between text-xs text-cyan-600/70 px-2 font-mono">
                    <span>Low Compute Cost</span>
                    <span>Latency Collapse</span>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ComparisonView;