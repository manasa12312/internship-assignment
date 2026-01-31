export default function Specialties() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Areas of Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-serif">Anxiety & Panic</h3>
            <p className="text-[var(--text-muted)]">
              Support for chronic worry, panic, overthinking, and physical
              tension. Therapy focuses on helping you feel calmer, more
              regulated, and less on edge in daily life.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-serif">Trauma & EMDR Therapy</h3>
            <p className="text-[var(--text-muted)]">
              Trauma-informed therapy for adults with single-incident or
              complex trauma. Sessions are paced carefully with an emphasis
              on safety, stabilization, and nervous system regulation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-serif">Burnout & High Achievers</h3>
            <p className="text-[var(--text-muted)]">
              Therapy for professionals, creatives, and entrepreneurs
              experiencing burnout, perfectionism, and constant internal
              pressure after years of pushing through stress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}