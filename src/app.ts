import express from 'express';

/*BIZ BUYERDA PATH PAKAGENI CHAQIRDIK APPNI STATIC ORQALI BOSHQA FILELARNI CHAQIRISHDA YORDAM BERGANI UCHUN. BUNI USTANOVKA QILISH SHART EMAS CHUNKI PATH CORE PACAGE HISSOBLANADI*/
import path from "path";
/*
/***1 - ENTRANCE => KIRISH QISMI */
const app = express();//buyerda expressni chaqirib oldik.

/*BIIZ BUYERDA APP.NI ICHIDA FRONTEND FILELLARINI OCHAMIZ ULARNI PUBLICNI USE
app.use();METHODINI CHAQIRIB SHU YERDAN ULARNI ADRESSLARINI ANIQLAB OLAMIZ.*/
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/**2 - SECCIONS */


/***3 -VIEWS */
app.set('views', path.join(__dirname, 'views'));/*buyerda biz viewas holderioga yullayapmiz*/
app.set("view engine", "ejs" );/* buyerda bizni shu html css yaniki barcha frountenda filelarimizni urlni bizga oson cvhqirsa boladigan qilib bermoqda*/

/***4 - ROUTERS */


export default app; // biz buyerda shu pacageni boshqa filelardaham ishlashiga ruhsat beryapmiz