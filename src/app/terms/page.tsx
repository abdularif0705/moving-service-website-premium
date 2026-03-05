import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | SwiftMove",
  description: "Terms and conditions for SwiftMove relocation services in Windsor, Ontario.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar transparentTextColor="dark" />
      <main className="pt-32 pb-24 min-h-screen bg-foreground/5 dark:bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 shadow-xl rounded-3xl p-8 sm:p-12 border border-foreground/10 dark:border-white/5">
          <h1 className="text-4xl font-serif text-foreground mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-foreground/80 dark:text-stone-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using SwiftMove's services, website, or booking a move, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-4">2. Moving Services & Estimates</h2>
              <p className="mb-4">
                All estimates provided are based on the information supplied by the customer. Final charges may vary if the scope of the move changes (e.g., additional items, difficult access not previously disclosed, or waiting time).
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deposits must be paid to secure a booking date.</li>
                <li>Cancellations within 48 hours of the scheduled move may result in forfeiture of the deposit.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-4">3. Liability & Insurance</h2>
              <p className="mb-4">
                SwiftMove operates under standard basic liability ($0.60 per pound per article) unless Full Value Protection is explicitly purchased and documented prior to the move.
              </p>
              <p>
                We are not liable for damage to inherently fragile items (e.g., pressed wood furniture, unboxed electronics, or items packed by the customer) unless negligence on our part is unequivocally proven.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-4">4. Payment Terms</h2>
              <p>
                Full payment is due immediately upon completion of the move prior to the crew's departure. We accept cash, certified checks, and major credit cards. Unpaid balances are subject to a 1.5% monthly interest charge.
              </p>
            </section>

            <div className="pt-8 mt-12 border-t border-foreground/10 dark:border-white/10 text-sm opacity-70">
              Last Updated: March 2026<br />
              For legal inquiries: legal@swiftmove.com
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
