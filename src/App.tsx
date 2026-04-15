import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import PublicLayout from './layouts/PublicLayout';

function App(): React.ReactElement {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AuthProvider>
            <div className="App">
              <Routes>
                <Route path="*" element={<PublicLayout />} />
              </Routes>
            </div>
          </AuthProvider>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
