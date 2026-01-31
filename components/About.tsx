import Image from "next/image";
export default function About() {
    return (
      <section className="py-24 px-6 bg-[var(--bg-soft)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif">
  Meet Dr. Maya Reynolds, PsyD
</h2>
  
<p className="text-[var(--text-muted)]">
  I’m a licensed clinical psychologist based in Santa Monica, California,
  offering therapy for adults who feel overwhelmed by anxiety, stress,
  or the lingering impact of past experiences. Many of my clients appear
  high-functioning on the outside while feeling exhausted, tense, or
  emotionally on edge internally.
</p>
  
<p className="text-[var(--text-muted)]">
  My approach is warm, collaborative, and grounded. Sessions are structured
  enough to feel supportive, while still leaving space for reflection and
  depth. I integrate evidence-based methods including CBT, EMDR,
  mindfulness-based practices, and body-oriented techniques.
</p>
<button className="inline-block rounded-full bg-[var(--accent)] px-8 py-3 text-white text-sm tracking-wide">
  Learn More About My Approach
</button>
          </div>
  
          {/* Image placeholder */}
          <div className="w-full max-w-xs h-72 overflow-hidden rounded-xl mx-auto md:mx-0">
          <div className="w-60">
          <div className="flex justify-center md:justify-start">
  <Image
    src="/maya.jpeg"
    alt="Dr. Maya Reynolds, PsyD"
    width={240}
    height={300}
    className="rounded-xl"
    priority
  />
</div>
</div>
</div>
    </div>
      </section>
    );
  }