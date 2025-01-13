import getUnit from "@/utils/api/get/unit";
import ToggleCompareProvider from "./_providers/ToggleCompare";
import { UnitPageContent } from "./PageContent";

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
