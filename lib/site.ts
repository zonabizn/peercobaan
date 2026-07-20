export const site = {
  name: "Excavator Bogor",
  tagline: "Solusi Sewa Excavator Bogor",
  phone: "0851-4355-4130",
  phoneRaw: "62085143554130",
  whatsappMessage: "Halo Excavator Bogor, saya ingin menyewa excavator dan menanyakan harga terbaik.",
  email: "excavatorbogor@gmail.com",
  office: "Jl. Cileungsi - Setu, RT.04/RW.01, Kec. Cileungsi, Kabupaten Bogor",
};

export function waLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:+${site.phoneRaw}`;
}
