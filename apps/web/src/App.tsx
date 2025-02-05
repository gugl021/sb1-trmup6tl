import { Button } from 'ui';
import { Github } from 'lucide-react';
import { UpdatePrompt } from './UpdatePrompt';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">React PWA</h1>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to React PWA with Turborepo</h2>
          <p className="text-gray-600 mb-6">
            Lets test redeployment!!
            This is a Progressive Web App built with React, Vite, and Turborepo.
            It features offline support and can be installed on your device.
          </p>
          <p>
            Silly goose!
          </p>
          <Button onClick={() => alert('Button clicked!')}>
            Try Me!
          </Button>
        </div>
      </main>
      <UpdatePrompt />
    </div>
  );
}

export default App;