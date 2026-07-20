import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Berapa minimal sewa excavator?",
    a: "Minimal sewa umumnya 40 jam kerja. Untuk durasi di bawah itu tetap bisa dilayani dengan penyesuaian harga. Silakan hubungi tim kami untuk detailnya.",
  },
  {
    q: "Apakah harga sudah termasuk operator?",
    a: "Tersedia dua paket: Sewa Unit Only (tanpa operator & BBM) dan paket All In yang sudah termasuk operator serta solar. Tim kami akan bantu pilih paket yang paling sesuai.",
  },
  {
    q: "Apakah harga bisa nego?",
    a: "Bisa. Harga yang tertera adalah harga mulai. Untuk durasi panjang atau volume pekerjaan besar, harga bisa dinegosiasi langsung dengan tim marketing kami.",
  },
  {
    q: "Apakah tersedia BBM?",
    a: "Untuk paket All In, BBM (solar) sudah termasuk. Untuk paket Unit Only, BBM ditanggung penyewa. Kami bisa bantu jelaskan estimasi kebutuhan BBM sesuai pekerjaan.",
  },
  {
    q: "Apakah melayani luar kota?",
    a: "Kami fokus melayani area Jabodetabek. Untuk lokasi di luar area tersebut, silakan hubungi kami untuk cek ketersediaan dan biaya mobilisasi.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Belum menemukan jawaban? Hubungi kami langsung via WhatsApp.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="mb-3 rounded-2xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
