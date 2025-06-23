import Series from "@/components/Series";
import Modal from "./modal";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Modal>
      <Series seriesId={id} />
    </Modal>
  );
}
