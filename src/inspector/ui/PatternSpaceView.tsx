import React from 'react';
import { Pattern } from '../types';

interface PatternSpaceViewProps {
  patterns: Pattern[];
}

const PatternSpaceView: React.FC<PatternSpaceViewProps> = ({ patterns }) => {
  // Simple deterministic positioning based on hash of key to keep them stable but scattered
  const getPosition = (key: string) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = key.charCodeAt(i) + ((hash << 5) - hash);
    }
    const x = Math.abs(hash % 80) + 10; // 10% to 90%
    const y = Math.abs((hash >> 3) % 80) + 10;
    return { x, y };
  };

  return (
    <div className="h-full w-full relative bg-slate-950 overflow-hidden border border-slate-800 rounded-xl">
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h3 className="text-cyan-400 font-bold text-lg flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          Citta Memory Space
        </h3>
        <p className="text-xs text-slate-500">Visualizing structural samskaras (patterns)</p>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Empty State */}
      {patterns.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-slate-700">
          No patterns formed yet. Run the experiment.
        </div>
      )}

      {/* Nodes */}
      {patterns.map((p) => {
        const pos = getPosition(p.key);
        const isHighKarma = p.weight >= 0.7;
        
        // Size based on weight (Karma) - Enhanced Range for clarity
        // Base 40px, max additional 100px.
        const size = 40 + (Math.pow(p.weight, 1.5) * 100); 
        
        // Opacity/Glow based on weight
        const glow = `0 0 ${p.weight * 50}px ${isHighKarma ? 'rgba(74, 222, 128, 0.4)' : 'rgba(168, 85, 247, 0.3)'}`;
        const borderColor = isHighKarma ? '#4ade80' : '#a855f7'; // Green vs Purple
        const bgColor = isHighKarma ? 'rgba(74, 222, 128, 0.1)' : 'rgba(168, 85, 247, 0.1)';

        return (
          <div
            key={p.key}
            className="absolute rounded-full flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer hover:z-50 group"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: bgColor,
              border: `2px solid ${borderColor}`,
              boxShadow: glow,
              transform: 'translate(-50%, -50%)',
              zIndex: Math.floor(p.weight * 10)
            }}
          >
            {/* Inner Ring for High Karma */}
            {isHighKarma && (
               <div className="absolute inset-2 border border-green-500/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            )}

            <div className="text-[10px] font-mono font-bold text-white opacity-90 pointer-events-none text-center leading-tight drop-shadow-md">
               {p.trigger.group}
            </div>
            <div className={`text-[9px] font-mono mt-1 ${isHighKarma ? 'text-green-300' : 'text-purple-300'}`}>
                {p.weight.toFixed(2)}
            </div>

            {/* Hover Tooltip */}
            <div className="absolute -bottom-20 w-40 bg-slate-900/90 backdrop-blur border border-slate-700 p-3 rounded-lg text-xs text-left hidden group-hover:block z-50 shadow-2xl transform transition-all duration-200">
                <div className={`font-bold mb-1 ${isHighKarma ? 'text-green-400' : 'text-purple-400'}`}>
                    {isHighKarma ? 'Stable Pattern' : 'Forming Pattern'}
                </div>
                <div className="text-slate-300">Key: <span className="font-mono text-slate-500">{p.key}</span></div>
                <div className="text-slate-300">Hits: <span className="text-white">{p.hits}</span></div>
                <div className="text-slate-300">Karma: <span className={isHighKarma ? 'text-green-400' : 'text-purple-400'}>{(p.weight * 100).toFixed(0)}%</span></div>
            </div>
          </div>
        );
      })}

      {/* Connectivity Lines (Simulated structural similarity) */}
      <svg className="absolute inset-0 pointer-events-none opacity-30">
         {patterns.map((p1, i) => 
            patterns.slice(i + 1).map((p2) => {
                const pos1 = getPosition(p1.key);
                const pos2 = getPosition(p2.key);
                // Only draw line if same group or similar weight
                if(p1.trigger.group === p2.trigger.group || Math.abs(p1.weight - p2.weight) < 0.15) {
                    const isStrong = p1.weight > 0.6 && p2.weight > 0.6;
                    return (
                        <line 
                            key={`${p1.key}-${p2.key}`}
                            x1={`${pos1.x}%`} y1={`${pos1.y}%`}
                            x2={`${pos2.x}%`} y2={`${pos2.y}%`}
                            stroke={isStrong ? "#4ade80" : "#475569"}
                            strokeWidth={isStrong ? "1.5" : "0.5"}
                            strokeDasharray={isStrong ? "0" : "4 4"}
                        />
                    )
                }
                return null;
            })
         )}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-slate-900/80 border border-slate-700 p-3 rounded-lg text-xs space-y-2 backdrop-blur-sm z-20 shadow-xl">
          <div className="font-bold text-slate-300 mb-1 border-b border-slate-700 pb-1">Space Legend</div>
          <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <span className="text-green-400 font-medium">High Karma (Trust)</span>
          </div>
          <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500/20 border border-purple-600 shadow-[0_0_5px_rgba(168,85,247,0.5)]"></div>
              <span className="text-purple-400 font-medium">Low Karma (Doubt)</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
             Node Size <span className="text-slate-400">∝</span> Weight Magnitude
          </div>
      </div>

    </div>
  );
};

export default PatternSpaceView;