import { WhatsappIcon } from "./whatsapp-icon";
import { waLink } from "@/lib/site";

const rows = [
  { type: "Excavator Komatsu PC75", price: "Rp155.000", unit: "/Jam" },
  { type: "Excavator Komatsu PC78", price: "Rp165.000", unit: "/Jam" },
  { type: "Excavator XCMG 60G Pro", price: "Rp170.000", unit: "/Jam" },
];

export function PriceTableSection() {
  return (
    <section id="harga" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Daftar Harga
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Harga Sewa Excavator Terbaru
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Harga bersaing dan bisa dinego langsung dengan tim marketing kami.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="px-5 py-4 text-sm font-bold uppercase tracking-wide sm:px-8">
                  Jenis Excavator
                </th>
                <th className="px-5 py-4 text-right text-sm font-bold uppercase tracking-wide sm:px-8">
                  Harga Mulai
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.type}
                  className={i % 2 === 0 ? "bg-card" : "bg-secondary"}
                >
                  <td className="px-5 py-4 text-sm font-medium text-foreground sm:px-8 sm:text-base">
                    {row.type}
                  </td>
                  <td className="px-5 py-4 text-right sm:px-8">
                    <span className="text-base font-extrabold text-foreground sm:text-lg">
                      {row.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {row.unit}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Harga dapat berubah sesuai lokasi, durasi sewa, dan jenis pekerjaan.
          Belum termasuk mobilisasi, BBM, dan uang makan operator.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={waLink("Halo Jaya Rental, saya ingin menanyakan daftar harga sewa excavator dan nego harga terbaik.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-whatsapp-foreground transition-transform hover:scale-105"
          >
            <WhatsappIcon className="h-5 w-5" />
            Nego Harga via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
