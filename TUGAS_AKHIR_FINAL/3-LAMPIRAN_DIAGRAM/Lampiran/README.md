# LAMPIRAN - INTER MEDI-A E-COMMERCE PLATFORM
## Diagram dan Dokumentasi Sistem

### 📁 Struktur Folder Lampiran

```
Lampiran/
├── 1-Use-Case-Diagram/
│   └── usecase-diagram.drawio
├── 2-ERD/
│   └── erd-diagram.drawio
├── 3-Class-Diagram/
│   └── class-diagram.drawio
├── 4-Activity-Diagram/
│   └── activity-diagram.drawio
├── 5-Flowcharts/
│   ├── customer-flowchart.drawio
│   ├── admin-flowchart.drawio
│   └── technician-flowchart.drawio
└── 6-Current-Process/
    └── current-manual-process.drawio
```

---

## 📋 Daftar Lampiran

### **Lampiran 1: Use Case Diagram**
- **File**: `1-Use-Case-Diagram/usecase-diagram.drawio`
- **Deskripsi**: Diagram use case lengkap menunjukkan interaksi antara aktor (Customer, Admin, Service Technician) dengan sistem
- **Fitur**: 
  - 3 aktor utama
  - 25+ use case
  - Relasi include dan extend
  - System boundary

### **Lampiran 2: Entity Relationship Diagram (ERD)**
- **File**: `2-ERD/erd-diagram.drawio`
- **Deskripsi**: Struktur database lengkap dengan entitas, atribut, dan relasi
- **Entitas**: Users, Products, Categories, Orders, OrderItems, ShoppingCart, ServiceRequests, Payments, Inventory, Reviews
- **Relasi**: 1:1, 1:M, M:N dengan kardinalitas

### **Lampiran 3: Class Diagram**
- **File**: `3-Class-Diagram/class-diagram.drawio`
- **Deskripsi**: Desain berorientasi objek dengan kelas, atribut, method, dan relasi
- **Fitur**:
  - 10 kelas utama
  - Atribut dengan tipe data
  - Method dengan parameter
  - Enumerasi (UserRole, OrderStatus, PaymentStatus)
  - Relasi antar kelas

### **Lampiran 4: Activity Diagram**
- **File**: `4-Activity-Diagram/activity-diagram.drawio`
- **Deskripsi**: Alur proses bisnis customer purchase process
- **Fitur**:
  - Start/end nodes
  - Decision points
  - Swimlanes (Customer, System, Payment Gateway)
  - Error handling flows

### **Lampiran 5: Flowcharts**
- **File 5a**: `5-Flowcharts/customer-flowchart.drawio`
  - Alur lengkap proses customer dari registrasi hingga service request
- **File 5b**: `5-Flowcharts/admin-flowchart.drawio`
  - Proses manajemen admin (products, orders, users, inventory, reports)
- **File 5c**: `5-Flowcharts/technician-flowchart.drawio`
  - Alur service technician dari login hingga service completion

### **Lampiran 6: Current Manual Process**
- **File**: `6-Current-Process/current-manual-process.drawio`
- **Deskripsi**: Proses bisnis manual saat ini sebelum implementasi e-commerce
- **Fitur**:
  - 9 tahap proses manual
  - Detail aktivitas setiap tahap
  - Identifikasi masalah current process
  - Benefit e-commerce solution

---

## 🎯 Cara Menggunakan Lampiran

### **Untuk Pembaca/Penguji:**
1. Buka draw.io di browser
2. Import file .drawio yang ingin dilihat
3. Diagram akan tampil dengan layout yang sudah diatur

### **Untuk Presentasi:**
1. Export diagram ke format PNG/PDF dari draw.io
2. Gunakan untuk slide presentasi
3. Setiap diagram sudah memiliki title dan legend

### **Untuk Dokumentasi:**
- Setiap folder berisi diagram yang saling berkaitan
- Urutan folder mengikuti metodologi pengembangan sistem
- Dapat digunakan sebagai referensi implementasi

---

## 📊 Ringkasan Diagram

| No | Jenis Diagram | Tujuan | Stakeholder |
|----|---------------|--------|-------------|
| 1 | Use Case | Requirement Analysis | Business Analyst, Developer |
| 2 | ERD | Database Design | Database Designer, Developer |
| 3 | Class | System Architecture | Software Architect, Developer |
| 4 | Activity | Business Process | Business Analyst, Project Manager |
| 5 | Flowcharts | User Journey | UX Designer, Developer |
| 6 | Current Process | Problem Analysis | Business Analyst, Management |

---

## ✅ Checklist Kelengkapan

- [x] Use Case Diagram - Lengkap dengan semua aktor dan use case
- [x] ERD - Database design dengan 10 entitas utama
- [x] Class Diagram - OOP design dengan relasi lengkap
- [x] Activity Diagram - Business process flow
- [x] Customer Flowchart - End-to-end customer journey
- [x] Admin Flowchart - Complete admin management process
- [x] Technician Flowchart - Service management workflow
- [x] Current Manual Process - Problem identification

**Total: 8 Diagram Lengkap untuk Dokumentasi Sistem**

---

*Semua diagram dibuat menggunakan draw.io dan dapat diedit sesuai kebutuhan pengembangan sistem.*
