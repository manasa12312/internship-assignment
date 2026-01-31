import Image from "next/image";
export default function Office() {
    return (
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
  
          {/* Text */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif">
              Our Office
            </h2>
  
            <p className="text-[var(--text-muted)]">
              Dr. Maya Reynolds’ Santa Monica office is a quiet, private space
              designed to feel calm and grounding. With natural light and a
              comfortable, uncluttered environment, many clients share that
              the space itself helps them feel more at ease when they arrive.
            </p>
  
            <p className="text-[var(--text-muted)]">
              In-person therapy is available at the Santa Monica office, along
              with secure telehealth sessions for clients located throughout
              California.
            </p>
  
            <p className="text-sm text-[var(--text-muted)]">
              📍 123th Street 45 W, Santa Monica, CA 90401
            </p>
          </div>
  
          {/* Images */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
{/* Images */}
<div className="flex justify-center">
  <Image
    src="/office1.jpeg"
    alt="Therapy office in Santa Monica"
    width={500}
    height={280}
    className="rounded-xl"
  />

  <Image
    src="/office2.jpeg"
    alt="Private counseling space"
    width={500}
    height={280}
    className="rounded-xl"
  />
</div>
</div></div>
      </section>
    );
  }