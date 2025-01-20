import getUnit from "@/utils/api/get/unit";
import ToggleCompareProvider from "./_providers/ToggleCompare";
import { UnitPageContent } from "./PageContent";
export async function generateMetadata({
  params: { unitId },
}: {
  params: { unitId: string };
}) {
  const data = await getUnit(unitId);

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    openGraph: {
      images: data?.media[0].original_url,
    },
  };
}
const Page = async ({ params: { unitId } }: { params: { unitId: string } }) => {
  const unit = await getUnit(unitId);
  if (!unit) return <></>;
  return (
    <ToggleCompareProvider>
      <UnitPageContent unit={unit} />
    </ToggleCompareProvider>
  );
};

export default Page;
