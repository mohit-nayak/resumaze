import SampleList from "@/components/samples/sample-list";

export default function Home() {
  return (
    <div className="py-6 text-center">
      <h1 className="text-center text-3xl font-bold">Templates list</h1>
      <div className="p-6">
        <SampleList />
      </div>
    </div>
  );
}
