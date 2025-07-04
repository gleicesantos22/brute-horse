import { cloaker } from './cloaker';

export interface TrafficLog {
  id: string;
  timestamp: string;
  allowed: boolean;
  source: string;
  referrer: string;
  urlParams: Record<string, string>;
  userAgent: string;
  ip?: string;
  location?: {
    country?: string;
    city?: string;
  };
}

class TrafficLogger {
  private logs: TrafficLog[] = [];
  private maxLogs = 1000;

  /**
   * Log traffic attempt
   */
  public logTraffic(allowed: boolean): void {
    const trafficInfo = cloaker.getTrafficInfo();
    
    const log: TrafficLog = {
      id: this.generateId(),
      timestamp: trafficInfo.timestamp,
      allowed,
      source: trafficInfo.source,
      referrer: trafficInfo.referrer,
      urlParams: trafficInfo.urlParams,
      userAgent: trafficInfo.userAgent,
    };

    this.logs.unshift(log);
    
    // Keep only the most recent logs
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(0, this.maxLogs);
    }

    // Store in localStorage for persistence
    this.saveLogs();
    
    console.log(`📊 Traffic logged:`, log);
  }

  /**
   * Get all traffic logs
   */
  public getLogs(): TrafficLog[] {
    return [...this.logs];
  }

  /**
   * Get logs filtered by criteria
   */
  public getFilteredLogs(filter: {
    allowed?: boolean;
    source?: string;
    since?: Date;
  }): TrafficLog[] {
    return this.logs.filter(log => {
      if (filter.allowed !== undefined && log.allowed !== filter.allowed) {
        return false;
      }
      
      if (filter.source && log.source !== filter.source) {
        return false;
      }
      
      if (filter.since && new Date(log.timestamp) < filter.since) {
        return false;
      }
      
      return true;
    });
  }

  /**
   * Get traffic statistics
   */
  public getStats(): {
    total: number;
    allowed: number;
    blocked: number;
    sources: Record<string, number>;
    topReferrers: Array<{ referrer: string; count: number }>;
  } {
    const total = this.logs.length;
    const allowed = this.logs.filter(log => log.allowed).length;
    const blocked = total - allowed;
    
    const sources: Record<string, number> = {};
    const referrers: Record<string, number> = {};
    
    this.logs.forEach(log => {
      sources[log.source] = (sources[log.source] || 0) + 1;
      if (log.referrer) {
        referrers[log.referrer] = (referrers[log.referrer] || 0) + 1;
      }
    });
    
    const topReferrers = Object.entries(referrers)
      .map(([referrer, count]) => ({ referrer, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
    
    return {
      total,
      allowed,
      blocked,
      sources,
      topReferrers
    };
  }

  /**
   * Clear all logs
   */
  public clearLogs(): void {
    this.logs = [];
    localStorage.removeItem('brute_horse_traffic_logs');
    console.log('🗑️ Traffic logs cleared');
  }

  /**
   * Export logs as JSON
   */
  public exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }

  /**
   * Save logs to localStorage
   */
  private saveLogs(): void {
    try {
      localStorage.setItem('brute_horse_traffic_logs', JSON.stringify(this.logs));
    } catch (error) {
      console.warn('⚠️ Could not save traffic logs to localStorage:', error);
    }
  }

  /**
   * Load logs from localStorage
   */
  private loadLogs(): void {
    try {
      const saved = localStorage.getItem('brute_horse_traffic_logs');
      if (saved) {
        this.logs = JSON.parse(saved);
        console.log(`📂 Loaded ${this.logs.length} traffic logs from storage`);
      }
    } catch (error) {
      console.warn('⚠️ Could not load traffic logs from localStorage:', error);
      this.logs = [];
    }
  }

  /**
   * Generate unique ID
   */
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  constructor() {
    this.loadLogs();
  }
}

// Export singleton instance
export const trafficLogger = new TrafficLogger();

// Add to window for debugging
if (typeof window !== 'undefined') {
  (window as any).trafficLogger = trafficLogger;
  (window as any).cloaker = cloaker;
}