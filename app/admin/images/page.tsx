'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Upload, Trash2, Loader2 } from 'lucide-react';

interface UploadedImage {
  url: string;
  pathname: string;
  uploadedAt: string;
  type?: string;
}

export default function ImageManagementPage() {
  const [heroImages, setHeroImages] = useState<UploadedImage[]>([]);
  const [galleryImages, setGalleryImages] = useState<UploadedImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'gallery'>('hero');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const heroRes = await fetch('/api/upload?type=hero');
      const galleryRes = await fetch('/api/upload?type=gallery');

      const heroData = await heroRes.json();
      const galleryData = await galleryRes.json();

      setHeroImages(heroData.images || []);
      setGalleryImages(galleryData.images || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'hero' | 'gallery') => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      await fetchImages();
      e.target.value = ''; // Reset input
    } catch (error) {
      console.error('Upload error:', error);
      alert('Gagal upload gambar');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (pathname: string) => {
    if (!confirm('Hapus gambar ini?')) return;

    try {
      const response = await fetch('/api/upload', {
        method: 'DELETE',
        body: JSON.stringify({ pathname }),
      });

      if (!response.ok) throw new Error('Delete failed');
      await fetchImages();
    } catch (error) {
      console.error('Delete error:', error);
      alert('Gagal menghapus gambar');
    }
  };

  const currentImages = activeTab === 'hero' ? heroImages : galleryImages;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-foreground">Manajemen Gambar</h1>
        <p className="mt-2 text-muted-foreground">
          Upload dan kelola gambar untuk hero section dan galeri proyek
        </p>

        {/* Tabs */}
        <div className="mt-8 flex gap-4 border-b border-border">
          <button
            onClick={() => setActiveTab('hero')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'hero'
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Hero Section ({heroImages.length})
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'gallery'
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Galeri Proyek ({galleryImages.length})
          </button>
        </div>

        {/* Upload Area */}
        <div className="mt-8 rounded-lg border-2 border-dashed border-border bg-muted p-8">
          <label className="flex flex-col items-center gap-3 cursor-pointer">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <div className="text-center">
              <p className="font-medium text-foreground">
                {uploading ? 'Uploading...' : 'Klik untuk upload gambar'}
              </p>
              <p className="text-sm text-muted-foreground">
                atau drag & drop (Max 10MB)
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e, activeTab)}
              disabled={uploading}
              className="hidden"
            />
          </label>
        </div>

        {/* Images Grid */}
        <div className="mt-8">
          <h2 className="font-semibold text-foreground mb-4">
            Gambar yang Diupload ({currentImages.length})
          </h2>
          
          {currentImages.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Belum ada gambar diupload
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentImages.map((image) => (
                <div
                  key={image.pathname}
                  className="group relative overflow-hidden rounded-lg border border-border bg-muted"
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={image.url}
                      alt={image.pathname}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      onClick={() => handleDelete(image.pathname)}
                      className="inline-flex items-center gap-2 rounded bg-destructive px-3 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90"
                    >
                      <Trash2 className="h-4 w-4" />
                      Hapus
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="truncate text-xs text-muted-foreground">
                      {image.pathname}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
