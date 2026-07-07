import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RefreshCw, Activity, Clock, Zap } from 'lucide-react';
import { DepsikEngine } from '../services/depsikEngine';
import { Task, SimulationResult, Pattern } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface ExperimentViewProps {
  onPatternsUpdate: (patterns: Pattern[]) => void;
}

const ExperimentView: React.FC<ExperimentViewProps> = ({ onPatternsUpdate }) => {
  const [engine] = useState(() => new DepsikEngine());
  const [logs, setLogs] = useState<SimulationResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState('Fm-3m');
  const [selectedTarget, setSelectedTarget] = useState<'high_symmetry' | 'stable'>('high_symmetry');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Statistics
  const hits = logs.filter(l => l.source === 'HIT').length;
  const misses = logs.filter(l => l.source === 'MISS').length;
  const total = logs.length;
  const hitRate = total > 0 ? ((hits / total) * 100).toFixed(1) : '0.0';
  
  const avgMissLatency = misses > 0 ? logs.filter(l => l.source === 'MISS').reduce((a,b) => a + b.latency, 0) / misses : 0;
  const avgHitLatency = hits > 0 ? logs.filter(l => l.source === 'HIT').reduce((a,b) => a + b.latency, 0) / hits : 0;
  
  const latencyCollapse = avgHitLatency > 0 ? (avgMissLatency / avgHitLatency).toFixed(1) : '1.0';

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(async () => {
        const currentTask: Task = { group: selectedGroup, target: selectedTarget };
        const result = await engine.processTask(currentTask, iteration + 1);
        
        setLogs(prev => [...prev, result]);
        setIteration(prev => prev + 1);
        onPatternsUpdate(engine.getPatterns());
        
        // Auto scroll
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }

        // Stop after 50 for demo purposes or keep going? 
        if (iteration > 60) {
            setIsRunning(false);
        }

      }, 200); // Speed of simulation tick
    }
    return () => clearInterval(interval);
  }, [isRunning, iteration, selectedGroup, selectedTarget, engine, onPatternsUpdate]);

  const handleReset = () => {
    setIsRunning(false);
    setLogs([]);
    setIteration(0);
    engine.reset();
    onPatternsUpdate([]);
  };

  const chartData = logs.map(l => ({
    iter: l.iteration,
    latency: l.latency,
    weight: l.patternWeight || 0.5,
    source: l.source
  }));

  return (
    <div className="h-full flex flex-col gap-4 p-4">
      
      {/* Controls & Stats Header */}
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Control Panel */}
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 w-full md:w-1/3 flex flex-col gap-3">
           <div className="flex justify-between items-center mb-2">
               <h3 className="font-bold text-white flex items-center gap-2"><Activity className="w-4 h-4 text-cyan-400" /> Control</h3>
               <span className={`text-xs px-2 py-1 rounded ${isRunning ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-slate-400'}`}>
                   {isRunning ? 'RUNNING' : 'IDLE'}
               </span>
           </div>

           <div className="grid grid-cols-2 gap-2">
               <select 
                className="bg-slate-800 border border-slate-600 text-sm text-white p-2 rounded"
                value={selectedGroup} onChange={e => setSelectedGroup(e.target.value)}
                disabled={isRunning}
               >
                   <option value="Fm-3m">Fm-3m</option>
                   <option value="Im-3m">Im-3m</option>
                   <option value="P4">P4</option>
               </select>
               <select 
                className="bg-slate-800 border border-slate-600 text-sm text-white p-2 rounded"
                value={selectedTarget} onChange={e => setSelectedTarget(e.target.value as any)}
                disabled={isRunning}
               >
                   <option value="high_symmetry">High Sym</option>
                   <option value="stable">Stable</option>
               </select>
           </div>

           <div className="flex gap-2 mt-2">
               {!isRunning ? (
                   <button onClick={() => setIsRunning(true)} className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 rounded flex items-center justify-center gap-2">
                       <Play className="w-4 h-4" /> Run
                   </button>
               ) : (
                   <button onClick={() => setIsRunning(false)} className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 rounded flex items-center justify-center gap-2">
                       <Pause className="w-4 h-4" /> Pause
                   </button>
               )}
               <button onClick={handleReset} className="px-3 bg-slate-700 hover:bg-slate-600 text-white rounded">
                   <RefreshCw className="w-4 h-4" />
               </button>
           </div>
        </div>

        {/* Live Stats */}
        <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center border-r border-slate-800">
                <span className="text-slate-500 text-xs uppercase tracking-wider">Hit Rate</span>
                <span className="text-2xl font-bold text-green-400">{hitRate}%</span>
                <span className="text-xs text-slate-600">{hits} / {total}</span>
            </div>
            <div className="flex flex-col items-center justify-center border-r border-slate-800">
                <span className="text-slate-500 text-xs uppercase tracking-wider">Collapse</span>
                <span className="text-2xl font-bold text-cyan-400">x{latencyCollapse}</span>
                <span className="text-xs text-slate-600 flex items-center gap-1">
                     <Clock className="w-3 h-3" /> Latency
                </span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="text-slate-500 text-xs uppercase tracking-wider">Karma</span>
                <span className="text-2xl font-bold text-purple-400">
                    {logs.length > 0 ? (logs[logs.length-1].patternWeight || 0).toFixed(2) : '-'}
                </span>
                <span className="text-xs text-slate-600">Current Weight</span>
            </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0">
          
          {/* Chart */}
          <div className="flex-[2] bg-slate-900 border border-slate-700 rounded-lg p-4 flex flex-col min-h-[300px]">
             <h4 className="text-slate-400 text-sm mb-4 font-bold">Learning Dynamics (Latency vs Karma)</h4>
             <div className="flex-1 w-full h-full min-h-0">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis dataKey="iter" stroke="#64748b" fontSize={12} />
                        <YAxis yAxisId="left" stroke="#ef4444" fontSize={12} label={{ value: 'Latency (ms)', angle: -90, position: 'insideLeft', fill: '#ef4444' }} />
                        <YAxis yAxisId="right" orientation="right" stroke="#10b981" fontSize={12} domain={[0, 1.2]} label={{ value: 'Karma', angle: 90, position: 'insideRight', fill: '#10b981' }} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
                            itemStyle={{ fontSize: 12 }}
                        />
                        <Line yAxisId="left" type="monotone" dataKey="latency" stroke="#ef4444" strokeWidth={2} dot={false} activeDot={{ r: 4 }} animationDuration={300} />
                        <Line yAxisId="right" type="stepAfter" dataKey="weight" stroke="#10b981" strokeWidth={2} dot={false} animationDuration={300} />
                    </LineChart>
                 </ResponsiveContainer>
             </div>
          </div>

          {/* Log Console */}
          <div className="flex-1 bg-black border border-slate-800 rounded-lg p-2 flex flex-col font-mono text-xs overflow-hidden min-h-[300px]">
             <div className="text-slate-500 border-b border-slate-800 pb-2 mb-2 px-2 flex justify-between">
                 <span>SYSTEM LOG</span>
                 <Zap className="w-3 h-3 text-yellow-500" />
             </div>
             <div className="flex-1 overflow-y-auto space-y-1 px-2" ref={scrollRef}>
                 {logs.length === 0 && <span className="text-slate-700 italic">Waiting to start...</span>}
                 {logs.map((l, i) => (
                     <div key={i} className="flex gap-2 border-b border-slate-900/50 pb-1">
                         <span className="text-slate-600">[{i+1}]</span>
                         <span className={l.source === 'HIT' ? 'text-green-400 font-bold' : 'text-purple-400'}>
                             {l.source}
                         </span>
                         <span className="text-slate-400 flex-1 text-right">{l.latency.toFixed(0)}ms</span>
                         <span className="text-yellow-600 w-10 text-right">w:{(l.patternWeight || 0).toFixed(2)}</span>
                     </div>
                 ))}
                 {logs.length > 0 && logs[logs.length-1].source === 'HIT' && (
                     <div className="text-cyan-500 mt-2 border-t border-dashed border-slate-700 pt-1">
                         LATENCY COLLAPSE DETECTED
                     </div>
                 )}
             </div>
          </div>

      </div>

    </div>
  );
};

export default ExperimentView;