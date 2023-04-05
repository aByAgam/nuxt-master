## Input
> Komponen input untuk teks, angka, dan lain lain.

### Props
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| type | String | text | Tipe input |
| placeholder | String | - | Placeholder untuk input |
| modelValue | String, number | - | v-model value |
| label | String | - | Label untuk input |
| disabled | Boolean | false | Membuat input menjadi disabled |
| readonly | Boolean | false | Membuat input menjadi readonly |
| error | Boolean | false | Membuat input menjadi error |
| loading | Boolean | false | Mengatur state loading inputan |
| error-text | String | - | Menampilkan pesan error pada inputan |
| mask-preset | String | - | Menggunakan mask pada inputan. Tersedia `ktp`, `phone`, `currency` dan `custom` |
| custom-mask | MaskaOptions | - | Membuat custom mask pada inputan. |
| min-value | String, number | - | Batas minimum angka dari value inputan |
| error-text | String, number | - | Batas maksimum angka dari value inputan |

### Slot
<table>
  <thead>
    <tr>
      <th>Slot</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="text-center">Belum ada slot</td>
    </tr>
  </tbody>
</table>

### Events
| Event | Description |
| --- | --- |
| @change | Event ketika nilai inputan berubah |
| @focus | Event ketika focus pada inputan |
| @unfocus | Event ketika input kehilangan focus |

### Maska
Komponen ini menggunakan plugin [Maska](https://github.com/beholdr/maska) untuk support input masking. Terdapat built-in mask preset yang dapat dipakai, yang sudah dijelaskan di tabel props di atas. Jika ingin membuat custom mask, harap membaca dokumentasi dari plugin tersebut.
