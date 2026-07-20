import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Kontraktor - Bogor",
    text: "Unit datang tepat waktu dan operatornya berpengalaman. Galian pondasi proyek rumah selesai lebih cepat dari perkiraan. Recommended!",
    initials: "BS",
  },
  {
    name: "Andi Wijaya",
    role: "Developer Perumahan - Bekasi",
    text: "Sudah 3x sewa untuk cut & fill lahan. Harganya bersaing dan bisa nego. Timnya responsif banget di WhatsApp.",
    initials: "AW",
  },
  {
    name: "Rina Kusuma",
    role: "Pemilik Proyek - Depok",
    text: "Pelayanan ramah dan profesional. Excavator terawat, tidak ada kendala selama pekerjaan berlangsung. Pasti sewa lagi.",
    initials: "RK",
  },
  {
    name: "Hendra Gunawan",
    role: "Mandor Proyek - Cileungsi",
    text: "Respon cepat, unit siap kirim, dan operatornya kerja rapi. Sangat membantu untuk normalisasi saluran di proyek kami.",
    initials: "HG",
  },
  {
    name: "Dewi Lestari",
    role: "PT Konstruksi - Jakarta",
    text: "Kerja sama beberapa proyek besar selalu lancar. Dokumen lengkap dan alat sesuai spesifikasi yang kami butuhkan.",
    initials: "DL",
  },
  {
    name: "Agus Purnomo",
    role: "Individu - Sentul",
    text: "Baru pertama sewa excavator dan dibantu sampai paham. Harga transparan tanpa biaya tersembunyi. Terima kasih Jaya Rental.",
    initials: "AP",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Testimoni Pelanggan
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Dipercaya Ratusan Pelanggan
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Kepuasan pelanggan adalah prioritas utama kami di setiap proyek.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {`"${t.text}"`}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
