export const site = {
  name: "Jaya Rental",
  tagline: "Solusi Sewa Excavator Jabodetabek",
  phone: "0812-9709-4392",
  phoneRaw: "6281297094392",
  whatsappMessage: "Halo Jaya Rental, saya ingin menyewa excavator dan menanyakan harga terbaik.",
  email: "info@jayarental.co.id",
  office: "Jl. Cileungsi - Setu, RT.04/RW.01, Kec. Cileungsi, Kabupaten Bogor",
};

export function waLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:+${site.phoneRaw}`;
}
