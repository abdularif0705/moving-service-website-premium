"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    content: "Good pricing, fast service, as well as top-quality service. Staff were very professional. My family and I use Rent-A-Hand repetitively for all our moving and junk removal and they do great. Support your local businesses, these individuals will go out of their way to give a great customer experience. Highly recommend.",
    author: "Humam Khan",
    role: "Moving & Junk Removal",
    rating: 5,
  },
  {
    id: 2,
    content: "Rent-A-Hand is FAST, and has a GREAT PRICE with FRIENDLY staff. I am so happy for the timely service. 100% would call back.",
    author: "Rosanna D",
    role: "Moving Service",
    rating: 5,
  },
  {
    id: 3,
    content: "Hired Rent-A-Hand to help with my move across town and was a happy customer. They were fast and efficient, and were done in a few hours. Customer service was great and they were responsive.",
    author: "Vivianne Owino",
    role: "Local Move",
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
