import Image from "next/image";

const gallery = [
  {
    src: "/images/gallery-foundation.png",
    caption: "Penggalian Pondasi",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/gallery-demolition.png",
    caption: "Pembongkaran Bangunan",
    span: "",
  },
  {
    src: "/images/gallery-river.png",
    caption: "Normalisasi Sungai",
    span: "",
  },
  {
    src: "/images/gallery-landclearing.png",
    caption: "Cut & Fill / Land Clearing",
    span: "lg:col-span-2",
  },
];

export function GallerySection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Galeri Proyek
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Dokumentasi Pekerjaan Kami
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Berbagai proyek yang telah kami tangani di area Jabodetabek.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 auto-rows-[180px] sm:grid-cols-2 sm:gap-4 sm:auto-rows-[200px] lg:auto-rows-[240px] lg:grid-cols-4 lg:gap-4">
          {gallery.map((item) => (
            <figure
              key={item.caption}
              className={`group relative overflow-hidden rounded-lg sm:rounded-2xl ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-3 text-xs font-bold text-background sm:p-4 sm:text-base">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
