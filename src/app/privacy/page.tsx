import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | SwiftMove",
  description: "How SwiftMove protects your private data and moving information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-foreground/5 dark:bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 shadow-xl rounded-3xl p-8 sm:p-12 border border-foreground/10 dark:border-white/5">
          <h1 className="text-4xl font-serif text-foreground mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-foreground/80 dark:text-stone-300 leading-relaxed">
            <section>
              <p className="mb-4">
                At SwiftMove, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to protect your data during your relocation process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-4">Information We Collect</h2>
              <p className="mb-4">We collect information essential to providing you with an accurate quote and executing your move securely:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, and phone number.</li>
                <li><strong>Location Data:</strong> Pick-up and drop-off addresses, zip codes.</li>
                <li><strong>Inventory Data:</strong> Details regarding the size of your home and items to be moved.</li>
                <li><strong>Payment Information:</strong> Processed securely via our third-party payment gateways; we do not store full credit card numbers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-4">How We Use Your Data</h2>
              <p className="mb-4">We use your information exclusively to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Generate accurate moving quotes and logistics plans.</li>
                <li>Communicate with you regarding your scheduled move.</li>
                <li>Improve our website performance and customer service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-4">Data Security & Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We employ industry-standard security measures, including SSL encryption, to protect your data submitted through our website. Your addresses and contact info are only shared with the specific moving crew assigned to your job.
              </p>
            </section>

            <div className="pt-8 mt-12 border-t border-foreground/10 dark:border-white/10 text-sm opacity-70">
              Last Updated: March 2026<br />
              If you have questions about our privacy practices, please contact us.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
