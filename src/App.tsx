import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import ArticlesPreview from "./components/ArticlesPreview";
import ArticlesPage from "./pages/ArticlesPage";
import ProjectsPage from "./pages/ProjectsPage";
import FadeIn from './components/FadeIn';
import './index.scss';

// Home page wrapper: if we arrived here with a "scrollTo" section
// (e.g. clicked a header link while on /articles), scroll to it once mounted.
function HomePage() {
    const location = useLocation();

    useEffect(() => {
        const state = location.state as { scrollTo?: string } | null;
        if (state?.scrollTo) {
            const timeout = setTimeout(() => {
                const element = document.getElementById(state.scrollTo as string);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            // Clear the state so revisiting/refreshing doesn't re-trigger the scroll
            window.history.replaceState({}, document.title);
            return () => clearTimeout(timeout);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <ArticlesPreview/>
            <Contact/>
        </FadeIn>
    );
}

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <Router>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            
            <Routes>
                {/* Home Page */}
                <Route path="/" element={<HomePage />} />
                
                {/* Articles Page */}
                <Route path="/articles" element={
                    <ArticlesPage />
                } />

                {/* Projects Page */}
                <Route path="/projects" element={
                    <ProjectsPage />
                } />
            </Routes>
            
            <Footer />
        </div>
    </Router>
    );
}

export default App;