import resyneLogo from "@/assets/resyne-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        <img 
          src={resyneLogo} 
          alt="Resyne Logo" 
          className="h-6 object-contain"
        />
        <p className="text-sm text-muted-foreground text-center">
          Made by AI Development team - Resyne -{" "}
          <a 
            href="https://re-syne.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            re-syne.com
          </a>
        </p>
      </div>
    </footer>
  );
};
