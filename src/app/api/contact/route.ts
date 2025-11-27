// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// type Body = {
//   nombre: string;
//   email: string;
//   mensaje: string;
//   website?: string;
// };

// export async function POST(req: Request) {
//   try {
//     const body: Body = await req.json();

//     // Honeypot
//     if (body.website && body.website.trim().length > 0) {
//       return NextResponse.json({ ok: false, message: "Spam detectado" }, { status: 400 });
//     }

//     // Validaciones básicas
//     if (!body.nombre || !body.email || !body.mensaje) {
//       return NextResponse.json({ ok: false, message: "Campos incompletos" }, { status: 400 });
//     }

//     // Configura Nodemailer con variables de entorno
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT || 587),
//       secure: process.env.SMTP_SECURE === "true", // true para 465
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     const mailText = `
//       Nombre: ${body.nombre}
//       Email: ${body.email}
//       Mensaje: ${body.mensaje}
//     `;

//     await transporter.sendMail({
//       from: process.env.SMTP_FROM || process.env.SMTP_USER,
//       to: process.env.TO_EMAIL, // tu correo
//       subject: `Nuevo mensaje desde tu portafolio - ${body.nombre}`,
//       text: mailText,
//     });

//     return NextResponse.json({ ok: true });
//   } catch (err: any) {
//     console.error("Contact API error:", err);
//     return NextResponse.json({ ok: false, message: "Error interno" }, { status: 500 });
//   }
// }
