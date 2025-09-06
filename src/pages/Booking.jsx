import React, { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
    placement: "",
    days: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setError("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyGiWCSg1Arhfrj4r65n4SQ1lC-EzM1_lRzdFsc55f20Zz9j-3vholeHJ-5iZiopV4Gdg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(form).toString(),
        }
      );

      setIsSubmitting(false);
      setShowSuccess(true);
      setForm({ name: "", email: "", description: "", placement: "", days: "" });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      console.error("Submission failed", err);
      setIsSubmitting(false);
      setError("Oops! Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-full bg-zinc-950 text-zinc-200">
      <div className="pointer-events-none fixed inset-0 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:3px_3px] opacity-20" />

      <section className="mx-auto max-w-3xl px-6 pt-20 md:pt-4 pb-10 relative">
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-zinc-50">
            Request a Tattoo Appointment
          </h1>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Tell me a bit about your idea — I’ll follow up to chat details and scheduling.
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {showSuccess && (
          <div className="mb-6 rounded-lg border border-emerald-700/40 bg-emerald-900/30 px-4 py-3 text-emerald-200 text-center">
            Booking request sent! Rae will reach out soon. 💌
          </div>
        )}
        {error && (
          <div className="mb-6 rounded-lg border border-red-700/40 bg-red-900/30 px-4 py-3 text-red-200 text-center">
            {error}
          </div>
        )}

        {/* Form card - compact styling */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-6 shadow-2xl/10 backdrop-blur supports-[backdrop-filter]:backdrop-blur"
        >
          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-300/40 focus:border-zinc-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-300/40 focus:border-zinc-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm text-zinc-400 mb-1">
                Tattoo idea / concept
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={form.description}
                onChange={handleChange}
                placeholder="Tell me about your vision, size, style, and any references."
                className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-zinc-100 placeholder-zinc-500 h-24 resize-none focus:outline-none focus:ring-1 focus:ring-zinc-300/40 focus:border-zinc-600"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="placement" className="block text-sm text-zinc-400 mb-1">
                  Body placement
                </label>
                <input
                  id="placement"
                  name="placement"
                  value={form.placement}
                  onChange={handleChange}
                  placeholder="e.g., forearm, back, chest"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-300/40 focus:border-zinc-600"
                />
              </div>
              <div>
                <label htmlFor="days" className="block text-sm text-zinc-400 mb-1">
                  Preferred days
                </label>
                <input
                  id="days"
                  name="days"
                  value={form.days}
                  onChange={handleChange}
                  placeholder="e.g., weekends, weekday evenings"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-300/40 focus:border-zinc-600"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-zinc-100 px-4 py-2.5 text-zinc-900 text-sm font-medium hover:bg-white transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Submit Request"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-500">
          Located near Grove Street PATH • Detailed directions will be provided upon booking confirmation.
        </div>
      </section>
    </div>
  );
}

