## Sheet
> Sebuah kartu overlay yang bisa disummon di atas body aplikasi.

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | Boolean | null | Mengatur buka tutup bottom sheet menggunakan v-model |
| maxHeight | String | null | Mengatur maksimum tinggi dari card bottom sheet, menggunakan format CSS seperti `80vh`, `90%`, atau `400px` |
| persistent | Boolean | false | Jika `true` maka pada saat click backdrop bottom sheet, bottom sheet tidak akan menutup |
| cardClass | String | null | Class untuk kustomisasi `KpCard` yang ada di dalam bottom sheet |

### Slot
| Slot | Description |
| --- | --- |
| default | Slot yang akan muncul di dalam card |
| activator | Jika tidak ingin menggunakan v-model, kita bisa menaruh elemen apa yang dapat digunakan untuk mengatur buka tutup bottom sheet |

### Events
| Event | Description |
| --- | --- |
| open | Event ketika bottom sheet terbuka |
| close | Event ketika bottom sheet tertutup |
| update:modelvalue | Event ketika `modelValue` terupdate |

### Methods
| Method | Param | Description |
| --- | --- | --- |
| toggle | - | Dapat dipanggil untuk membuka / menutup bottom sheet |
