export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  return (
    <>
      <h1>Country Page</h1>
      <h1>Hello {country}</h1>
    </>
  );
}
