export default function FAQ() {
    return (
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
            Frequently Asked Questions
          </h2>
  
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-lg mb-2">
                Do you offer in-person or online therapy?
              </h3>
              <p className="text-[var(--text-muted)]">
                I offer in-person therapy from my Santa Monica office as well
                as secure telehealth sessions for clients located in California.
              </p>
            </div>
  
            <div>
              <h3 className="font-serif text-lg mb-2">
                What issues do you specialize in?
              </h3>
              <p className="text-[var(--text-muted)]">
                I specialize in anxiety, panic, trauma, burnout,
                perfectionism, and chronic stress, particularly for
                high-achieving adults.
              </p>
            </div>
  
            <div>
              <h3 className="font-serif text-lg mb-2">
                What is your approach to trauma therapy?
              </h3>
              <p className="text-[var(--text-muted)]">
                Trauma work is paced carefully with an emphasis on safety,
                stabilization, and helping clients feel more regulated in
                daily life.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }