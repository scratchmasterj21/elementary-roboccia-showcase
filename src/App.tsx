import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import Home from './pages/Home';
    import Events from './pages/Events';
    import StudentBuilds from './pages/StudentBuilds';
    import Admin from './pages/Admin';

    const App: React.FC = () => {
      return (
        <Router>
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/student-builds" element={<StudentBuilds />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      );
    };

    export default App;
