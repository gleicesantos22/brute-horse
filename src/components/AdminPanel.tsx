import React, { useState, useEffect } from 'react';
import { trafficLogger, TrafficLog } from '../utils/trafficLogger';
import { Eye, Download, Trash2, RefreshCw, Shield, Users, Block, TrendingUp } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [logs, setLogs] = useState<TrafficLog[]>([]);
  const [stats, setStats] = useState<any>({});
  const [filter, setFilter] = useState<'all' | 'allowed' | 'blocked'>('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setLogs(trafficLogger.getLogs());
    setStats(trafficLogger.getStats());
  };

  const filteredLogs = logs.filter(log => {
    if (filter === 'allowed') return log.allowed;
    if (filter === 'blocked') return !log.allowed;
    return true;
  });

  const exportLogs = () => {
    const data = trafficLogger.exportLogs();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `brute-horse-traffic-logs-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearLogs = () => {
    if (window.confirm('Are you sure you want to clear all traffic logs?')) {
      trafficLogger.clearLogs();
      refreshData();
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Open Admin Panel"
      >
        <Eye className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Shield className="w-6 h-6" />
            BRUTE HORSE - Traffic Monitor
          </h2>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-300 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-900">Total Visits</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">{stats.total || 0}</div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">Allowed</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{stats.allowed || 0}</div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Block className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-900">Blocked</span>
              </div>
              <div className="text-2xl font-bold text-red-600">{stats.blocked || 0}</div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-purple-900">Block Rate</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {stats.total ? Math.round((stats.blocked / stats.total) * 100) : 0}%
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All ({stats.total || 0})
              </button>
              <button
                onClick={() => setFilter('allowed')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filter === 'allowed' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Allowed ({stats.allowed || 0})
              </button>
              <button
                onClick={() => setFilter('blocked')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filter === 'blocked' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Blocked ({stats.blocked || 0})
              </button>
            </div>
            
            <div className="flex gap-2 ml-auto">
              <button
                onClick={refreshData}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={exportLogs}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={clearLogs}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
            </div>
          </div>

          {/* Traffic Sources */}
          {stats.sources && Object.keys(stats.sources).length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Traffic Sources</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Object.entries(stats.sources).map(([source, count]) => (
                  <div key={source} className="bg-gray-50 border rounded-lg p-3 text-center">
                    <div className="font-medium text-gray-900 capitalize">{source}</div>
                    <div className="text-xl font-bold text-blue-600">{count as number}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Logs Table */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Referrer</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Parameters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredLogs.slice(0, 100).map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {new Date(log.timestamp).toLocaleString()}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          log.allowed 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {log.allowed ? 'Allowed' : 'Blocked'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 capitalize">{log.source}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 max-w-xs truncate">
                        {log.referrer || 'Direct'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {Object.keys(log.urlParams).length > 0 ? (
                          <details className="cursor-pointer">
                            <summary className="text-blue-600 hover:text-blue-800">
                              {Object.keys(log.urlParams).length} params
                            </summary>
                            <div className="mt-2 text-xs bg-gray-100 p-2 rounded">
                              {Object.entries(log.urlParams).map(([key, value]) => (
                                <div key={key}>
                                  <strong>{key}:</strong> {value}
                                </div>
                              ))}
                            </div>
                          </details>
                        ) : (
                          'None'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No traffic logs found for the selected filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;