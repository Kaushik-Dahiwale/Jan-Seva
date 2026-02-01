import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './components/Layout';
import { Landing } from './views/Landing';
import { SubmitGrievance } from './views/SubmitGrievance';
import { AIProcessing } from './views/AIProcessing';
import { Success } from './views/Success';
import { Track } from './views/Track';
import { AdminDashboard } from './views/AdminDashboard';
import { ViewState } from './types';

const App = () => {
  // Central state management for the prototype
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  // Simple router simulation
  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <Landing onNavigate={setCurrentView} />;
      case 'submit':
        return <SubmitGrievance onNavigate={setCurrentView} />;
      case 'processing':
        return <AIProcessing onNavigate={setCurrentView} />;
      case 'success':
        return <Success onNavigate={setCurrentView} />;
      case 'track':
        return <Track onNavigate={setCurrentView} />;
      case 'admin':
        return <AdminDashboard onNavigate={setCurrentView} />;
      default:
        return <Landing onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);