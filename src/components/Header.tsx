
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 flex justify-center items-center relative">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-2">
          <Calendar className="w-5 h-5 mr-2 text-primary" />
          <p className="text-sm font-medium text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="text-primary">Phrasal</span> 
          <span className="text-muted-foreground">Verb</span> 
          <span className="text-primary">Daily</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
          Expand your English vocabulary with a new phrasal verb every day
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
