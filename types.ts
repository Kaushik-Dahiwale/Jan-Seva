export type ViewState = 'landing' | 'submit' | 'processing' | 'success' | 'track' | 'admin';

export interface TimelineEvent {
  title: string;
  date: string;
  status: 'completed' | 'current' | 'pending';
  description?: string;
}

export interface Officer {
  name: string;
  role: string;
  phone: string;
  avatar: string;
}

export interface Grievance {
  id: string;
  category: string;
  department: string;
  location: string;
  status: 'Submitted' | 'Assigned' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High';
  dateSubmitted: string;
  eta: string;
  description: string;
  timeline: TimelineEvent[];
  officer?: Officer;
}

export interface DashboardStats {
  total: number;
  pending: number;
  resolved: number;
  highPriority: number;
}