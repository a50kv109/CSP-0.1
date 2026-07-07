export interface Task {
  group: string;
  target: 'high_symmetry' | 'stable' | 'low_symmetry';
}

export interface Pattern {
  key: string;
  trigger: Task;
  weight: number; // Karma (0.0 - 1.0)
  hits: number;
  lastUsed: number;
  type: 'general' | 'special';
}

export interface SimulationResult {
  iteration: number;
  source: 'HIT' | 'MISS';
  latency: number; // ms
  valid: boolean;
  patternKey?: string;
  patternWeight?: number;
}

export interface SimulationStats {
  hitRate: number;
  avgMissLatency: number;
  avgHitLatency: number;
  latencyCollapse: number; // Factor (e.g., 10x)
  patternsCreated: number;
}
