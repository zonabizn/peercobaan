import Link from 'next/link';
import { Settings } from 'lucide-react';

export function AdminLink() {
  return (
    <Link
      href="/admin/images"
      className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg hover:scale-105 transition-transform z-40"
      title="Kelola Gambar"
    >
      <Settings className="h-4 w-4" />
      Kelola Gambar
    </Link>
  );
}
