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
    content: "I recently used Rent-A-Hand Moving Company for my move, and I must say, I am very impressed with their service. The team arrived right on time and worked very efficiently. They were polite, hardworking, and took great care of all my belongings, especially the fragile items. The pricing was fair and reasonable. Highly recommended.",
    author: "Muhash Sanjofy",
    role: "Local Move",
    rating: 5,
  },
  {
    id: 3,
    content: "Moving from one small apartment to another in the same building, my wife and I got the light stuff but left the heavy stuff for the movers. In one hour, the movers got the heavy cabinets and stoves out and to the new apartment. Fast and no damage done. I have no complaints and only high praise for these movers.",
    author: "Frank Mitchell",
    role: "Small Apartment Move",
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
