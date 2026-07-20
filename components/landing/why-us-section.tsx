import {
  BadgeDollarSign,
  Wrench,
  UserCheck,
  Zap,
  Truck,
  MapPin,
} from "lucide-react";

const items = [
  {
    icon: BadgeDollarSign,
    title: "Harga Kompetitif",
    desc: "Harga sewa transparan mulai Rp155.000/jam dan bisa dinegosiasi.",
  },
  {
    icon: Wrench,
    title: "Unit Terawat",
    desc: "Seluruh unit rutin diservis agar selalu prima di lokasi proyek.",
  },
  {
    icon: UserCheck,
    title: "Operator Profesional",
    desc: "Operator berpengalaman dan bersertifikat untuk hasil kerja maksimal.",
  },
  {
    icon: Zap,
    title: "Respon Cepat",
    desc: "Tim kami siap menjawab pertanyaan Anda dengan cepat via WhatsApp.",
  },
  {
    icon: Truck,
    title: "Siap Kirim",
    desc: "Pengiriman unit cepat dan tepat waktu sesuai jadwal proyek Anda.",
  },
  {
    icon: MapPin,
    title: "Melayani Jabodetabek",
    desc: "Melayani area Bogor, Depok, Bekasi, Jakarta, dan sekitarnya.",
  },
];

export function WhyUsSection() {
  return (
    <section id="tentang" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Kenapa Memilih Kami
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Mitra Sewa Excavator Terpercaya
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Kami memberikan solusi penyewaan alat berat yang cepat, aman, dan
            profesional untuk setiap kebutuhan proyek Anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-foreground transition-colors group-hover:bg-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
