import { useEffect, useState } from 'react';
import { getServiceRequests } from '../../services/api';

export default function ServiceRequests() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        console.log('Fetching service requests...');
        const response = await getServiceRequests();
        console.log('API Response:', response);
        
        if (response.success && response.data) {
          const requestsData = Array.isArray(response.data) ? response.data : [];
          console.log('Processed requests data:', requestsData);
          setRequests(requestsData);
        } else {
          console.error('Unexpected API response format:', response);
          setError('Invalid data format received from server');
        }
      } catch (err) {
        console.error('Error fetching service requests:', err);
        setError('Failed to load service requests');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return <div className="p-8">Loading service requests...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Service Requests</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Subject</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Created At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{request.id}</td>
                  <td className="py-3 px-4">{request.name}</td>
                  <td className="py-3 px-4">{request.email}</td>
                  <td className="py-3 px-4 max-w-xs truncate">{request.subject}</td>
                  <td className="py-3 px-4 max-w-md truncate">{request.message}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      request.status === 'new' ? 'bg-blue-100 text-blue-800' :
                      request.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {request.status || 'new'}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {new Date(request.created_at).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 text-center text-gray-500">
                  No service requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
