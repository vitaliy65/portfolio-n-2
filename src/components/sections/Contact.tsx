"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { contactInfo } from "@/data/contacts";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSent(false);

    // Замените эти значения на свои из EmailJS
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError(
        "EmailJS не настроен. Пожалуйста, проверьте переменные окружения."
      );
      setLoading(false);
      return;
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          title: form.title,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setSent(true);
      setForm({
        name: "",
        email: "",
        title: "",
        message: "",
      });
      toast.success("Сообщение успешно отправлено!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          marginTop: "64px",
          zIndex: 9999,
          fontSize: "1.1rem",
          background: "#0f172a", // Более тёмный фон для соответствия стилю страницы
          color: "#67e8f9", // Акцентный цвет текста
          border: "1px solid #0ea5e9",
          boxShadow: "0 4px 24px 0 #0ea5e955",
        },
      });
    } catch (err) {
      setError("Ошибка при отправке сообщения. Попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block px-4 py-2 bg-primary-red rounded-xl shadow-custom-md text-2xl mb-4"
            data-text="Let&apos;s Work Together">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it and discuss
            how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-background-light/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-red/80 flex items-center justify-center transition-colors">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Title
                  </label>
                  <Input
                    name="title"
                    placeholder="Project inquiry"
                    value={form.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    className="min-h-32"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  className="w-full animate-glow text-white"
                  size="lg"
                  type="submit"
                  disabled={loading}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {error && (
                  <div className="text-red-600 text-center mt-2">{error}</div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
