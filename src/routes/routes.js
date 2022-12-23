
const path = require('path');
const express = require('express')
const newsRouter = express.Router()
newsRouter.get('/', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','index.html'));
});
newsRouter.get('/sejarah', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','sejarah.html'));
});
newsRouter.get('/visi-misi', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','visimisi.html'));
});
newsRouter.get('/struktur-organisasi', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','strukturorganisasi.html'));
});
newsRouter.get('/tugas-pokok', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','tugaspokok.html'));
});
newsRouter.get('/sarana-prasarana', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','saranaprasarana.html'));
});
newsRouter.get('/layanan', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','layanan.html'));
});
newsRouter.get('/layanan-pengaduan', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','layananpengaduan.html'));
});
newsRouter.get('/daftar-keluhan', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','daftarkeluhan.html'));
});
newsRouter.get('/keluhan-1', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','keluhan1.html'));
});
newsRouter.get('/keluhan-2', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','keluhan2.html'));
});
newsRouter.get('/keluhan-3', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','keluhan3.html'));
});
newsRouter.get('/keluhan-4', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','keluhan4.html'));
});
newsRouter.get('/berita', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','berita.html'));
});

newsRouter.get('/berita_detail5', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','berita_detail5.html'));
});
newsRouter.get('/dokumentasi', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','dokumentasi.html'));
});
newsRouter.get('/kontak', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','kontak.html'));
});
newsRouter.get('/sop', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','sop.html'));
});
newsRouter.get('/tarif-layanan', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','tariflayanan.html'));
});
newsRouter.get('/maklumat', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','maklumat.html'));
});
newsRouter.get('/infoketenagaan', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','infoketenagaan.html'));
});
newsRouter.get('/instalasi-rawat-jalan', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','instalasirawatjalan.html'));
});
newsRouter.get('/media-promkes', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','mediapromkes.html'));
});
newsRouter.get('/kategory-gayahidup', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','kategorygayahidup.html'));
});
newsRouter.get('/kategory-kesehatan', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','kategorykesehatan.html'));
});
newsRouter.get('/dokumentasihal2', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','dokumentasihal2.html'));
});
module.exports = newsRouter 
