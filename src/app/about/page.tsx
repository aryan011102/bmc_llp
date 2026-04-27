import About from "@/components/About";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Decades of"
        accent="Trusted Service"
        description="Discover the history, operating values, and customer-first approach that have made Bengal Machinery Corporation LLP and Bengal Electricals a dependable industrial electrical partner since 1977."
      />
      <About />
    </>
  );
}
