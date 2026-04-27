import PageHeader from "@/components/PageHeader";
import Products from "@/components/Products";

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Industrial Electrical"
        accent="Product Range"
        description="Browse our portfolio across switchgear, motors, monitoring devices, control gear, and automation components from the brands industries already know and trust."
      />
      <Products />
    </>
  );
}
