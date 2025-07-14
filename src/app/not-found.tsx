"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <span className="text-4xl">🔍</span>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-muted-foreground">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman tersebut telah dipindahkan atau dihapus.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Atau hubungi saya jika Anda membutuhkan bantuan:</p>
          <a 
            href="mailto:tensuqiuwulu@example.com" 
            className="text-primary hover:underline"
          >
            tensuqiuwulu@example.com
          </a>
        </div>
      </div>
    </div>
  );
}
