import Card from "../../components/Card";
import useSWR from "swr";
import Layout from "../../components/Layout";

export default function Character() {
  const { data, error, isLoading } = useSWR(
    "https://swapi.dev/api/people/${id}"
  );

  const id = 1;

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return (
    <Layout>
      <Card
        id={id}
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}
