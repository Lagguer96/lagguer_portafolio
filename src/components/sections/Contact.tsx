"use client";

import { useState } from "react";

type FormState = {
  nombre: string;
  email: string;
  mensaje: string;
  // campo honeypot invisible para bots
  website?: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ nombre: "", email: "", mensaje: "", website: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.nombre.trim()) return "Ingresa tu nombre.";
    if (!form.email.trim()) return "Ingresa tu correo electrónico.";
    // validación simple de email
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Ingresa un correo válido.";
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10) return "El mensaje debe tener al menos 10 caracteres.";
    // honeypot should be empty
    if (form.website && form.website.trim().length > 0) return "Spam detectado.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);

    try {
      // --- Opción A: enviar a tu propia API en /api/contact (ver Paso 4)
      const res = await fetch("https://formspree.io/f/mqaowrkk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.nombre, email: form.email, message: form.mensaje }),
      });

      if (!res.ok) {
        // Si la API no está disponible, intenta Opción B (Formspree) como fallback
        const text = await res.text();
        throw new Error(text || "Error al enviar el mensaje.");
      }

      setSuccess("Mensaje enviado correctamente. ¡Gracias!");
      setForm({ nombre: "", email: "", mensaje: "", website: "" });
    } catch (err: any) {
      // Si no tienes backend, puedes configurar Formspree (ver instrucciones abajo).
      setError(err?.message || "Error inesperado. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Contacto</h2>
        <p className="text-gray-300 text-center mb-8">
          ¿Tienes un proyecto o quieres ponerte en contacto? Escríbeme y te responderé pronto.
        </p>

        <form onSubmit={onSubmit} className="grid gap-4">
          {/* Honeypot: campo invisible para bots */}
          <input
            name="website"
            value={form.website}
            onChange={onChange}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-gray-300">Nombre</span>
            <input
              name="nombre"
              value={form.nombre}
              onChange={onChange}
              className="p-3 rounded-lg bg-white/5 border border-gray-700 focus:outline-none"
              placeholder="Tu nombre"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-gray-300">Correo electrónico</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className="p-3 rounded-lg bg-white/5 border border-gray-700 focus:outline-none"
              placeholder="tu@correo.com"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-gray-300">Mensaje</span>
            <textarea
              name="mensaje"
              rows={5}
              value={form.mensaje}
              onChange={onChange}
              className="p-3 rounded-lg bg-white/5 border border-gray-700 focus:outline-none"
              placeholder="Cuéntame sobre tu proyecto..."
              required
            />
          </label>

          {error && <p className="text-red-400">{error}</p>}
          {success && <p className="text-green-400">{success}</p>}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>

            <span className="text-sm text-gray-400">O escribe a: <a href="mailto:medina17796@gmail.com" className="text-indigo-300 underline">medina17796@gmail.com</a></span>
          </div>
        </form>
      </div>
    </section>
  );
}
// Instrucciones para usar Formspree (si no tienes backend):
// 1. Regístrate en https://formspree.io/
// 2. Crea un nuevo formulario y obtén tu endpoint de Formspree.
// 3. Reemplaza la sección de envío en onSubmit con el siguiente código:
//
//    const res = await fetch("TU_ENDPOINT_DE_FORMSPREE", {
//      method: "POST",
//      headers: { "Content-Type": "application/json" },
//      body: JSON.stringify(form),
//    });
//
// 4. Asegúrate de manejar la respuesta y los errores adecuadamente.