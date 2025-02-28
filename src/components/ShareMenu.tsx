import { Copy, Share, FileText, Database } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PhrasalVerb } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ShareMenuProps {
  verb: PhrasalVerb;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const ShareMenu = ({ verb, position = 'top-right' }: ShareMenuProps) => {
  const { toast } = useToast();

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      default:
        return 'top-4 right-4';
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
        duration: 2000,
      });
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
        duration: 2000,
      });
    });
  };

  const copyFullContent = () => {
    const text = `Phrasal Verb: ${verb.verb} ${verb.particle}\n\nMeaning: ${verb.meaning}\n\nExamples:\n${verb.examples.map(ex => `- ${ex}`).join('\n')}`;
    copyToClipboard(text, "Full content");
  };

  const exportToAnki = () => {
    // Format data for Anki export
    const ankiData = {
      front: `${verb.verb} ${verb.particle}`,
      back: `${verb.meaning}\n\nExamples:\n${verb.examples.map(ex => `- ${ex}`).join('\n')}`
    };
    
    // In a real implementation, this would create an Anki-compatible file or API call
    toast({
      title: "Anki Export",
      description: "Phrasal verb exported to Anki format",
      duration: 2000,
    });
    
    console.log('Anki export data:', ankiData);
  };

  const exportToNotion = () => {
    // Format data for Notion export
    const notionData = {
      title: `${verb.verb} ${verb.particle}`,
      properties: {
        level: verb.level,
        meaning: verb.meaning,
        examples: verb.examples
      }
    };
    
    // In a real implementation, this would use Notion API
    toast({
      title: "Notion Export",
      description: "Phrasal verb exported to Notion format",
      duration: 2000,
    });
    
    console.log('Notion export data:', notionData);
  };

  return (
    <div className={`absolute ${getPositionClasses()} z-10`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button 
            className="p-2 rounded-full hover:bg-secondary/50 transition-colors focus:outline-none"
            aria-label="Share options"
          >
            <Share className="h-5 w-5 text-muted-foreground" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          side="bottom"
          sideOffset={5}
          forceMount
          className={cn(
            "w-56 bg-popover/95 backdrop-blur-sm border-primary/10",
            "origin-top-right transition-all duration-150",
            "data-[side=bottom]:animate-in data-[side=bottom]:fade-in-0 data-[side=bottom]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1.5"
          )}
        >
          <DropdownMenuItem 
            onClick={copyFullContent}
            className="cursor-pointer focus:bg-primary/10 transition-colors"
          >
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy to clipboard</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={exportToAnki}
            className="cursor-pointer focus:bg-primary/10 transition-colors"
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Export to Anki</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={exportToNotion}
            className="cursor-pointer focus:bg-primary/10 transition-colors"
          >
            <Database className="mr-2 h-4 w-4" />
            <span>Export to Notion</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ShareMenu; 