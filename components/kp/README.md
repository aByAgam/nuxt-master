## Kreditplus Component Library

Berisi banyak komponen yang dikembangkan sepenuh hati layaknya anak sendiri dan dapat digunakan di banyak halaman. Cara penggunaan komponen di dalam folder ini adalah dengan menggunakan prefix `kp-{nama-komponen}` atau `Kp{NamaKomponen}`. Untuk dokumentasi komponen, harap membaca file `README.md` yang tersedia di masing masing komponen.

### Membuat Komponen Baru

Untuk membuat komponen baru, buat folder komponen dengan nama komponen tersebut lalu menyertakan file berikut:

- `kp-[komponen].vue` - Berisi SFC untuk komponen yang akan dibuat.
- `kp-[komponen].spec.ts` - Unit test untuk komponen.
- `README.md` - Berisi dokumentasi komponen yang menjelaskan cara penggunaan, props, slot, dan event dari komponen.
