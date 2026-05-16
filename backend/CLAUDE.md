# CLAUDE.md — Wedding Invitation Backend (RSVP)

## Project Overview

Backend REST API untuk wedding invitation, fokus pada fitur RSVP.
Dibangun dengan **Express.js**, tanpa autentikasi.

---

## Tech Stack

| Layer        | Pilihan              |
|--------------|----------------------|
| Runtime      | Node.js (v20.19.0)   |
| Framework    | Express.js           |
| Database     | MongoDB + Mongoose   |
| Validation   | Joi                  |
| Env          | dotenv               |
| Dev tools    | nodemon, eslint      |

---

## Project Structure

```
wedding-backend/
├── src/
│   ├── routes/
│   │   ├── health.routes.js
│   │   └── rsvp.routes.js
│   ├── controllers/
│   │   ├── health.controller.js
│   │   └── rsvp.controller.js
│   ├── services/
│   │   └── rsvp.service.js
│   ├── models/
│   │   └── rsvp.model.js
│   ├── middlewares/
│   │   ├── validate.js
│   │   ├── rateLimiter.js
│   │   └── errorHandler.js
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   └── app.js
├── .env
├── .env.example
├── package.json
└── server.js
```

---

## Health API

### Endpoint

| Method | Path       | Deskripsi                        |
|--------|------------|----------------------------------|
| GET    | /api/health | Cek status server dan koneksi DB |

### Response

**Server sehat:**
```json
{
  "success": true,
  "status": "ok",
  "timestamp": "2025-05-16T08:00:00.000Z",
  "uptime": 123.45,
  "environment": "development",
  "database": {
    "status": "connected"
  }
}
```

**Database tidak terhubung:**
```json
{
  "success": false,
  "status": "degraded",
  "timestamp": "2025-05-16T08:00:00.000Z",
  "uptime": 123.45,
  "environment": "development",
  "database": {
    "status": "disconnected"
  }
}
```

### Catatan

- Tidak kena rate limiter
- Tidak butuh request body
- HTTP status `200` jika DB connected, `503` jika DB disconnected
- `uptime` dalam satuan detik (dari `process.uptime()`)
- Cocok dipakai oleh monitoring tool (UptimeRobot, Render health check, dll)

---

## RSVP Feature

### Data Model

**File:** `src/models/rsvp.model.js`

```js
{
  nama:             String,   // required, max 100 chars
  statusKehadiran:  String,   // required, enum: ['hadir', 'tidak_hadir']
  jumlahHadir:      Number,   // required jika hadir, min 1, max 10; 0 jika tidak_hadir
  ucapanDoa:        String,   // required, max 500 chars
  createdAt:        Date      // auto
}
```

### Endpoints

| Method | Path            | Deskripsi                        |
|--------|-----------------|----------------------------------|
| POST   | /api/v1/rsvp    | Tamu kirim konfirmasi + ucapan   |
| GET    | /api/v1/rsvp    | Ambil semua data RSVP            |
| GET    | /api/v1/rsvp/:id| Ambil satu data RSVP by ID       |

### Validation Rules (Joi)

```
nama             → string, required, min(2), max(100), trim
statusKehadiran  → string, required, valid('hadir', 'tidak_hadir')
jumlahHadir      → number, required when hadir, integer, min(1), max(10); default 0 jika tidak_hadir
ucapanDoa        → string, required, min(5), max(500), trim
```

### Response Format

**Success:**
```json
{
  "success": true,
  "data": { ... },
  "message": "RSVP berhasil disimpan"
}
```

**Error:**
```json
{
  "success": false,
  "message": "Pesan error",
  "errors": [ ... ]
}
```

---

## Environment Variables

```env
# .env.example
PORT=3002
MONGODB_URI=mongodb://localhost:27017/wedding_db
NODE_ENV=development
```

---

## Coding Conventions

- Gunakan `async/await`, bukan callback
- Semua error dilempar ke `next(err)` — ditangkap oleh `errorHandler.js`
- Controller hanya menangani request/response
- Business logic dan akses DB ada di service
- Nama file: `kebab-case`, nama function: `camelCase`
- Gunakan `const`, hindari `var`

---

## Layers Responsibility

```
routes/        → definisi path + panggil controller
controllers/   → terima req, panggil service, kirim res
services/      → logika bisnis + query ke DB
models/        → Mongoose schema
middlewares/   → validasi input, rate limiter, error handler
config/        → koneksi DB, env loader
```

---

## Rate Limiting

Endpoint POST `/api/v1/rsvp` dibatasi:
- **Max:** 5 request per IP per 15 menit
- Library: `express-rate-limit`
- Tujuan: mencegah spam submission RSVP

---

## Error Handling

Semua error dikembalikan dalam format JSON konsisten.
HTTP status code yang digunakan:

| Code | Kondisi                        |
|------|--------------------------------|
| 200  | OK (GET berhasil)              |
| 201  | Created (POST berhasil)        |
| 400  | Validation error               |
| 404  | Data tidak ditemukan           |
| 429  | Too many requests              |
| 503  | Database tidak terhubung       |
| 500  | Internal server error          |

---

## Scripts

```json
{
  "start":   "node server.js",
  "dev":     "nodemon server.js",
  "lint":    "eslint src/"
}
```

---

## Notes

- Tidak ada autentikasi pada versi ini
- Data RSVP bersifat publik (siapa saja bisa submit dan lihat)
- Jika dibutuhkan moderasi ucapan, tambahkan field `isApproved: Boolean` di model
- Untuk produksi, pertimbangkan menambahkan honeypot field atau captcha di sisi client