export default async function CountryPage({
  params,
}: {
  params: Promise<{ state: string;  country: string }>;//add second params
}) {
  const { state } = await params;
  const { country } = await params;//take dynamic country name from user

  return (
    <>
      <h1>Country State Page</h1>
      <h1>Hello {country}</h1>
      <h1>Hello {state}</h1>
    </>
  );
}
