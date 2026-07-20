import { MapPin, Phone, Mail } from "lucide-react";
import { WhatsappIcon } from "./whatsapp-icon";
import { site, waLink } from "@/lib/site";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
                EB
              </span>
              <span className="text-lg font-bold text-foreground">
                {site.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Solusi kebutuhan alat berat terpercaya untuk konstruksi di seluruh
              area Jabodetabek. Sewa excavator terawat dengan operator
              profesional.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
              Kontak
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a href={`tel:+${site.phoneRaw}`} className="hover:text-foreground">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <WhatsappIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-whatsapp" />
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Chat WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
              Kantor
            </h3>
            <p className="mt-4 flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              {site.office}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
              Area Layanan
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Bogor & Cileungsi</li>
              <li>Depok</li>
              <li>Bekasi & Cikarang</li>
              <li>Jakarta & sekitarnya</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} excavatorbogor.web.id Semua hak dilindungi.
          </p>
          <p>Sewa Excavator Bogor Terpercaya</p>
        </div>
      </div>
    </footer>
  );
}
