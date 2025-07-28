'use client';

import React, { useState, useEffect } from 'react';
import { Trash2, Phone, Package } from 'lucide-react';

interface ServiceRequest {
  id: number;
  name: string;
  mobile: string;
  productType: string;
  message: string;
  timestamp: string;
}

export default function ServiceRequestsPage() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);

  useEffect(() => {
    // Load requests from localStorage
    const loadRequests = () => {
      const stored = localStorage.getItem('serviceRequests');
      if (stored) {
        setRequests(JSON.parse(stored));
      }
    };

    loadRequests();
    // Refresh every 5 seconds
    const interval = setInterval(loadRequests, 5000);
    return () => clearInterval(interval);
  }, []);

  const deleteRequest = (id: number) => {
    const updatedRequests = requests.filter(req => req.id !== id);
    setRequests(updatedRequests);
    localStorage.setItem('serviceRequests', JSON.stringify(updatedRequests));
  };

  const clearAll = () => {
    if (confirm('Are you sure you want to clear all service requests?')) {
      setRequests([]);
      localStorage.removeItem('serviceRequests');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Service Requests</h1>
            {requests.length > 0 && (
              <button
                onClick={clearAll}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
          <p className="text-gray-600 mt-2">Total requests: {requests.length}</p>
        </div>

        {requests.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-500">No service requests yet.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {requests.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map(request => (
              <div key={request.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{request.name}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(request.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteRequest(request.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <a href={`tel:${request.mobile}`} className="hover:text-blue-600">
                      {request.mobile}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Package className="w-4 h-4 mr-2 text-gray-400" />
                    {request.productType}
                  </div>
                </div>
                
                {request.message && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{request.message}</p>
                  </div>
                )}
                
                <div className="mt-4 flex gap-2">
                  <a
                    href={`tel:${request.mobile}`}
                    className="flex-1 text-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${request.mobile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}