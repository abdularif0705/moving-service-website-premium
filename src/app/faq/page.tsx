import FAQClient from "./FAQClient";

export const metadata = {
  title: "Frequently Asked Questions | Rent-A-Hand Moving",
  description: "Get transparent answers about pricing, insurance, packing services, and more from Windsor's premium moving company.",
  alternates: {
    canonical: "https://rentahandwindsor.ca/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Rent-A-Hand Moving",
    description: "Get transparent answers about pricing, insurance, packing services, and more from Windsor's premium moving company.",
    url: "https://rentahandwindsor.ca/faq",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}

