import {
  Shovel,
  Mountain,
  Hammer,
  Waves,
  Trees,
  Construction,
} from "lucide-react";

const services = [
  {
    icon: Shovel,
    title: "Penggalian Pondasi",
    desc: "Galian pondasi bangunan rumah, ruko, gudang, hingga gedung bertingkat.",
  },
  {
    icon: Mountain,
    title: "Cut & Fill",
    desc: "Pemotongan dan pengurugan tanah untuk meratakan lahan proyek.",
  },
  {
    icon: Hammer,
    title: "Pembongkaran Bangunan",
    desc: "Pembongkaran struktur bangunan lama dengan aman dan cepat.",
  },
  {
    icon: Waves,
    title: "Normalisasi Sungai",
    desc: "Pengerukan dan normalisasi saluran air, sungai, dan drainase.",
  },
  {
    icon: Trees,
    title: "Pembersihan Lahan",
    desc: "Land clearing pembersihan lahan dari semak, pohon, dan material.",
  },
  {
    icon: Construction,
    title: "Pekerjaan Jalan",
    desc: "Pekerjaan pembukaan dan perbaikan akses jalan proyek.",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Layanan Kami
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Solusi Pekerjaan Alat Berat
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Excavator kami siap menangani berbagai jenis pekerjaan konstruksi
            dan pengerjaan lahan.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/15 text-foreground">
                <service.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
