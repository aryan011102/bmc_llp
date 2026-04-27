import Brands from "@/components/Brands";
import PageHeader from "@/components/PageHeader";

export default function BrandsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Brands"
        title="Authorized Partner for"
        accent="Leading Manufacturers"
        description="Explore the trusted electrical and automation brands we represent, and see the quality standards behind the products we supply to industrial customers."
      />
      <Brands />
    </>
  );
}
