"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    content: "Absolutely phenomenal experience. The team arrived early, packed everything with extreme care, and moved us across the country without a single broken item. Worth every penny.",
    author: "Sarah Jenkins",
    role: "Long Distance Move",
    rating: 5,
  },
  {
    id: 2,
    content: "I've moved 5 times in the last 10 years, and SwiftMove was by far the best company I've ever used. The crew was polite, efficient, and very professional.",
    author: "Michael Chen",
    role: "Local Move",
    rating: 5,
  },
  {
    id: 3,
    content: "They handled our grand piano and delicate antiques flawlessly. The white-glove service is exactly as advertised. Highly recommended for premium moves.",
    author: "Emily & David Thompson",
    role: "Specialty Items Move",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-foreground/5 dark:bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-serif tracking-[0.15em] uppercase text-xs font-semibold mb-4"
          >
            Client Success Stories
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif text-foreground sm:text-5xl"
          >
            Don't just take our word for it
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-foreground/5 relative"
            >
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground/80 mb-8 text-lg italic leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary border border-accent/20 flex items-center justify-center font-serif text-lg text-accent">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-medium text-lg text-foreground">{review.author}</h4>
                  <p className="text-sm text-foreground/60">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
