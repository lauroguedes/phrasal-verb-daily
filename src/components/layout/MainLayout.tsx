import { ReactNode, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import { BookOpen, Linkedin, Github } from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen px-4 py-8 bg-gradient-to-b from-background to-secondary/20"
      >
        <Header />
        
        <main className="mt-8 mb-8">
          {children}
        </main>
        
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>Expand your English vocabulary, one phrasal verb at a time.</p>
          <div className="flex items-center justify-center mt-4 gap-4">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>Phrasal Verb Daily</span>
            </div>
            <span>|</span>
            <a 
              href="https://lauroguedes.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary transition-colors"
              aria-label="Visit Lauro Guedes website"
            >
              <span>Created by Lauro Guedes</span>
            </a>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com/in/lauroguedes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              
              <a 
                href="https://github.com/lauroguedes/phrasal-verb-daily" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="View project on GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

// Memoize the layout to prevent unnecessary re-renders
export default memo(MainLayout); 