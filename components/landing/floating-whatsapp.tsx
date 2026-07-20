import { WhatsappIcon } from "./whatsapp-icon";
import { waLink } from "@/lib/site";

export function FloatingWhatsapp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 md:bottom-6 md:right-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp opacity-40" />
      <WhatsappIcon className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">Chat via WA</span>
    </a>
  );
}
