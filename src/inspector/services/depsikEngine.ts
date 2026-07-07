import { Task, Pattern, SimulationResult } from '../types';

// Mock Matrix Core (Buddhi) - Logic Simulation
class MatrixCore {
  calculate(task: Task): Promise<{ valid: boolean; type: 'general' | 'special'; latency: number }> {
    return new Promise((resolve) => {
      // Simulate "Thinking" time (Matrix operations)
      const baseLatency = 150; 
      const variance = Math.random() * 50;
      const totalLatency = baseLatency + variance;

      setTimeout(() => {
        resolve({
          valid: true, // simplified for viz
          type: task.target === 'high_symmetry' ? 'special' : 'general',
          latency: totalLatency
        });
      }, totalLatency); 
    });
  }
}

// Citta Layer (Pattern Memory)
class CittaLayer {
  private patterns: Map<string, Pattern> = new Map();

  constructor() {}

  public getKey(task: Task): string {
    return `${task.group}|${task.target}`;
  }

  getPattern(task: Task): Pattern | undefined {
    return this.patterns.get(this.getKey(task));
  }

  createOrUpdatePattern(task: Task, isHit: boolean): Pattern {
    const key = this.getKey(task);
    let pattern = this.patterns.get(key);

    if (!pattern) {
      pattern = {
        key,
        trigger: task,
        weight: 0.5, // Initial Karma
        hits: 0,
        lastUsed: Date.now(),
        type: 'general'
      };
      this.patterns.set(key, pattern);
    } else {
      if (isHit) {
        // Reinforce Karma
        pattern.weight = Math.min(1.0, pattern.weight + 0.1);
        pattern.hits++;
      } else {
        // Penalty (rare in this simple demo)
        pattern.weight = Math.max(0.1, pattern.weight - 0.05);
      }
      pattern.lastUsed = Date.now();
    }
    return pattern;
  }

  getAllPatterns(): Pattern[] {
    return Array.from(this.patterns.values());
  }
  
  clear() {
    this.patterns.clear();
  }
}

// The Experiment Runner
export class DepsikEngine {
  private matrix: MatrixCore;
  private citta: CittaLayer;

  constructor() {
    this.matrix = new MatrixCore();
    this.citta = new CittaLayer();
  }

  async processTask(task: Task, iteration: number): Promise<SimulationResult> {
    const pattern = this.citta.getPattern(task);
    
    // Threshold for trust (Karma)
    if (pattern && pattern.weight >= 0.7) {
      // HIT - Fast Recall
      this.citta.createOrUpdatePattern(task, true);
      
      // Simulate extremely fast recall latency
      const recallLatency = Math.random() * 5 + 2; // 2-7ms

      // Artificial delay just to make it async but fast
      await new Promise(r => setTimeout(r, recallLatency));

      return {
        iteration,
        source: 'HIT',
        latency: recallLatency,
        valid: true,
        patternKey: pattern.key,
        patternWeight: pattern.weight
      };
    } else {
      // MISS - Deep Calculation
      const matrixResult = await this.matrix.calculate(task);
      
      // Create memory of this solution
      this.citta.createOrUpdatePattern(task, false); // False means it wasn't a hit *yet*, just created

      return {
        iteration,
        source: 'MISS',
        latency: matrixResult.latency,
        valid: matrixResult.valid,
        patternKey: this.citta.getKey(task),
        patternWeight: 0.5
      };
    }
  }

  getPatterns() {
    return this.citta.getAllPatterns();
  }

  reset() {
    this.citta.clear();
  }
}