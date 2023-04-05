## Select
> Aku ingin yang ini, aku ingin yang itu.

### Props
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| placeholder | String | - | Placeholder untuk input |
| modelValue | String, SelectItem | - | v-model value |
| label | String | - | Label untuk input |
| disabled | Boolean | false | Membuat input menjadi disabled |
| readonly | Boolean | false | Membuat input menjadi readonly |
| error | Boolean | false | Membuat input menjadi error |
| loading | Boolean | false | Mengatur state loading inputan |
| error-text | String | - | Menampilkan pesan error pada inputan |
| searchable | Boolean | false | Membuat opsi pada select dapat difilter menggunakan search. |
| items | Array, SelectItem | - | Daftar opsi dari select |
| async | Boolean | false | Mendisable filtering internal, sehingga bisa digunakan untuk mencari data eksternal. |
| empty-text | String | Tidak ada pilihan | Teks ketika hasil pencarian opsi tidak ada hasil / kosong. |

### Events
| Event | Description |
| --- | --- |
| @change | Event ketika pilihan opsi berubah. |
| @search | Event ketika ada inputan search. |
| @update:modelValue | Event ketika nilai v-model diupdate. |
