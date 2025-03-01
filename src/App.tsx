import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FileUpload } from './components/FileUpload';
import { DocumentView } from './components/DocumentView';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<FileUpload />} />
              <Route path="/document/:id" element={<DocumentView />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;