import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono, Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins'
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Sewa Excavator Jabodetabek | Rental Alat Berat Murah - Jaya Rental',
  description:
    'Sewa excavator murah Jabodetabek. Rental alat berat Komatsu PC75, PC78, dan XCMG 60G Pro dengan operator berpengalaman. Harga mulai Rp155.000/jam, siap kirim ke Bogor, Depok, Bekasi & Jakarta.',
  keywords: [
    'sewa excavator',
    'rental excavator',
    'sewa alat berat',
    'sewa excavator murah',
    'sewa excavator jabodetabek',
    'rental excavator bogor',
    'rental excavator jakarta',
  ],
  openGraph: {
    title: 'Sewa Excavator Jabodetabek | Rental Alat Berat - Jaya Rental',
    description:
      'Rental excavator terawat dengan operator profesional. Harga mulai Rp155.000/jam. Melayani Bogor, Depok, Bekasi & Jakarta.',
    type: 'website',
    locale: 'id_ID',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
