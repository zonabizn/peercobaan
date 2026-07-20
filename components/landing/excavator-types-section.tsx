import Image from "next/image";
import { Check } from "lucide-react";
import { WhatsappIcon } from "./whatsapp-icon";
import { waLink } from "@/lib/site";

const units = [
  {
    name: "Excavator Komatsu PC75",
    image: "/images/komatsu-pc75.png",
    project: "Cocok untuk galian pondasi & lahan sempit",
    specs: [
      "Kapasitas bucket ± 0.28 m³",
      "Berat operasi ± 7.5 ton",
      "Manuver lincah di area terbatas",
    ],
    price: "Rp155.000/Jam",
    msg: "Halo Jaya Rental, saya ingin sewa Excavator Komatsu PC75. Mohon info harga terbaiknya.",
  },
  {
    name: "Excavator Komatsu PC78",
    image: "/images/komatsu-pc78.png",
    project: "Ideal untuk cut & fill dan pekerjaan menengah",
    specs: [
      "Kapasitas bucket ± 0.30 m³",
      "Berat operasi ± 7.8 ton",
      "Tenaga besar & irit BBM",
    ],
    price: "Rp165.000/Jam",
    msg: "Halo Jaya Rental, saya ingin sewa Excavator Komatsu PC78. Mohon info harga terbaiknya.",
  },
  {
    name: "Excavator XCMG 60G Pro",
    image: "/images/xcmg-60gpro.png",
    project: "Efisien untuk pembersihan lahan & normalisasi",
    specs: [
      "Kapasitas bucket ± 0.22 m³",
      "Berat operasi ± 6 ton",
      "Hemat biaya untuk proyek ringan",
    ],
    price: "Rp170.000/Jam",
    msg: "Halo Jaya Rental, saya ingin sewa Excavator XCMG 60G Pro. Mohon info harga terbaiknya.",
  },
];

export function ExcavatorTypesSection() {
  return (
    <section id="tipe" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Paket Penyewaan Excavator
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Pilih Tipe Excavator Sesuai Kebutuhan
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Tersedia berbagai unit terawat siap kirim. Konsultasikan kebutuhan
            proyek Anda dengan tim kami.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {units.map((unit) => (
            <article
              key={unit.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  fill
                  className="object-contain p-5"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {unit.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {unit.project}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {unit.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-whatsapp" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-baseline gap-1.5 border-t border-border pt-5">
                  <span className="text-sm text-muted-foreground">Mulai</span>
                  <span className="text-2xl font-extrabold text-foreground">
                    {unit.price}
                  </span>
                </div>

                <a
                  href={waLink(unit.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.03]"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  Tanya via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
