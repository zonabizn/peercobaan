import Image from "next/image";
import { Phone, CheckCircle2 } from "lucide-react";
import { WhatsappIcon } from "./whatsapp-icon";
import { site, waLink, telLink } from "@/lib/site";

const badges = [
  "Harga Mulai Rp155.000/Jam",
  "Operator Berpengalaman",
  "Unit Terawat",
  "Siap Kirim Cepat",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center overflow-hidden pt-16 sm:pt-20 sm:min-h-[92vh]"
    >
      <Image
        src="/images/hero-excavator.png"
        alt="Excavator kuning bekerja di lokasi konstruksi saat senja"
        fill
        priority
        className="object-cover object-left sm:object-center lg:object-right"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/50 to-transparent sm:from-foreground/90 sm:via-foreground/70 sm:to-foreground/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-foreground">
            Sewa Alat Berat Jabodetabek
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-background sm:text-5xl lg:text-6xl">
            Sewa Excavator Bogor
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            Tersedia Excavator Komatsu PC75, PC78, dan XCMG 60G Pro. Unit
            terawat, operator berpengalaman, dan siap kirim cepat ke lokasi
            proyek Anda.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {badges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2.5 text-sm font-medium text-background"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-whatsapp-foreground transition-transform hover:scale-105"
            >
              <WhatsappIcon className="h-5 w-5" />
              Chat WhatsApp
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Hubungi Sekarang
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
