import { Grievance, DashboardStats } from './types';

export const MOCK_GRIEVANCE: Grievance = {
  id: 'GRV-2024-8829',
  category: 'Public Infrastructure',
  department: 'Public Works Department (PWD)',
  location: 'Sector 4, Rohini, Delhi',
  status: 'In Progress',
  priority: 'High',
  dateSubmitted: '20 May 2024, 10:00 AM',
  eta: '3 Days',
  description: 'Deep pothole on the main road causing traffic congestion and accidents.',
  officer: {
    name: 'Rajesh Kumar',
    role: 'Senior Field Engineer',
    phone: '+91 98765 43210',
    avatar: 'https://picsum.photos/100/100'
  },
  timeline: [
    {
      title: 'Complaint Submitted',
      date: '20 May 2024, 10:00 AM',
      status: 'completed',
      description: 'Request received via Jan Seva App.'
    },
    {
      title: 'AI Analysis & Assignment',
      date: '20 May 2024, 10:05 AM',
      status: 'completed',
      description: 'Categorized as PWD / Road Safety. Assigned to Zone 4.'
    },
    {
      title: 'Officer Assigned',
      date: '21 May 2024, 09:30 AM',
      status: 'completed',
      description: 'Rajesh Kumar accepted the ticket.'
    },
    {
      title: 'Work In Progress',
      date: '22 May 2024, 02:15 PM',
      status: 'current',
      description: 'Material procurement initiated. Crew scheduled.'
    },
    {
      title: 'Resolution',
      date: 'Est. 24 May 2024, 05:00 PM',
      status: 'pending',
      description: 'Final inspection and closure.'
    }
  ]
};

export const ADMIN_STATS: DashboardStats = {
  total: 1248,
  pending: 342,
  resolved: 856,
  highPriority: 45
};

export const RECENT_GRIEVANCES = [
  { id: 'GRV-8829', dept: 'PWD', category: 'Roads', status: 'In Progress', priority: 'High', date: 'May 20' },
  { id: 'GRV-8830', dept: 'Water', category: 'Leakage', status: 'Submitted', priority: 'Medium', date: 'May 21' },
  { id: 'GRV-8831', dept: 'Health', category: 'Sanitation', status: 'Resolved', priority: 'High', date: 'May 18' },
  { id: 'GRV-8832', dept: 'Electricity', category: 'Outage', status: 'Assigned', priority: 'Low', date: 'May 21' },
  { id: 'GRV-8833', dept: 'Police', category: 'Noise', status: 'In Progress', priority: 'Low', date: 'May 21' },
];

export const DEPARTMENT_DATA = [
  { name: 'PWD', tickets: 400 },
  { name: 'Water', tickets: 300 },
  { name: 'Electric', tickets: 300 },
  { name: 'Health', tickets: 200 },
];