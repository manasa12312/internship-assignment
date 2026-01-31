export default function Hero() {
    return (
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">
            Anxiety & Trauma Therapy in Santa Monica, CA
          </h1>
  
          <p className="text-lg text-[var(--text-muted)]">
            Compassionate, evidence-based therapy for adults experiencing anxiety,
            burnout, and the lasting effects of trauma. A supportive space to slow
            down, reconnect, and feel more grounded in your daily life.
          </p>
  
          <div>
            <button className="mt-6 inline-block rounded-full bg-[var(--accent)] px-8 py-3 text-white text-sm tracking-wide">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    );
  }