import Card from "../components/Card/Card";

export default {
  component: Card,
  title: "Components/Cards",
};

export const Default = () => {
  return <Card>Test</Card>;
};

export const Shadow = () => {
  return <Card shadow>Test</Card>;
};
