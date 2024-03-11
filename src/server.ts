import dotenv from 'dotenv';
dotenv.config();



import mongoose  from 'mongoose';

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;//Buyerda biz agar mongoDB ni porttini topa olmasa 3003 ishlashlashini aytib ketmoqdamiz!
  })
  .catch((err) => console.log("ERROR on connection MongoDB"))//Buyerda agar bizning mongodb iyimizda qandaydur muammo yani error  chiqqanida shuni bizga olib berishini sorayapmiz.