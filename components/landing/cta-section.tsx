import { Phone } from "lucide-react";
import { WhatsappIcon } from "./whatsapp-icon";
import { site, waLink, telLink } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="bg-foreground py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-background sm:text-4xl md:text-5xl">
          Butuh Excavator Hari Ini?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/80">
          Hubungi kami sekarang untuk mendapatkan penawaran terbaik. Konsultasi
          gratis dengan tim marketing kami, Bapak Zaky.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-whatsapp-foreground transition-transform hover:scale-105"
          >
            <WhatsappIcon className="h-5 w-5" />
            Chat WhatsApp
          </a>
          <a
            href={telLink()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Telepon Sekarang
          </a>
        </div>

        <p className="mt-6 font-mono text-sm text-background/70">
          {site.phone}
        </p>
      </div>
    </section>
  );
}
