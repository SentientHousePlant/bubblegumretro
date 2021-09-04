import { template } from "lodash";
import Card from "../components/Card/Card";
import CardContent from "../components/Card/CardContent";

export default {
  component: Card,
  title: "Components/Cards",
};

const Template = (args) => (
  <Card {...args}>
    <CardContent {...args}>
      <h1>Heelo</h1>
      <p>
        fgjodfjgjd jdfj djfgk jdkfgnkdj ngkndf knkdfng kdnfg kndfkgn dkfng jk
      </p>
    </CardContent>
  </Card>
);

export const Default = Template.bind({});

Default.args = {
  shadow: true,
  slideup: true,
  roundedcorner: false,
};
