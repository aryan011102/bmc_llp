import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Start the"
        accent="Conversation"
        description="Connect with our Kolkata team for product enquiries, quotations, availability checks, and guidance on the right electrical solution for your requirement."
      />
      <Contact />
    </>
  );
}
