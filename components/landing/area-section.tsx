import { MapPin } from "lucide-react";

const areas = [
  { name: "Bogor", desc: "Kota & Kabupaten Bogor, Cileungsi, Cibinong, Sentul" },
  { name: "Depok", desc: "Seluruh area Depok, Cimanggis, Sawangan, Cinere" },
  { name: "Bekasi", desc: "Kota & Kabupaten Bekasi, Cikarang, Tambun, Setu, dan sekitarnya." },
];

export function AreaSection() {
  return (
    <section id="area" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Area Layanan
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Menjangkau Seluruh Jabodetabek
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Kami siap mengirim unit ke berbagai wilayah. Butuh area lain?
            Hubungi kami untuk info ketersediaan.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.name}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                {area.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
