import { listResources } from "@/features/resources/resource.service";

export default async function ResourcesPage() {
  const resources = await listResources();

  return (
    <section>
      <h1>Resources</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
    </section>
  );
}
