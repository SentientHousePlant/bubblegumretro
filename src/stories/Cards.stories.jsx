import { template } from "lodash";
import Card from "../components/Card/Card";
import CardSlideUp from "../components/Card/CardSlideUp";

export default {
  component: Card,
  title: "Components/Cards",
};

const SlideTemplate = (args) => (
  <div style={{ width: "400px", height: "400px" }}>
    <Card {...args}>
      <CardSlideUp {...args}>
        <h1>Heelo</h1>
        <p>
          fgjodfjgjd jdfj djfgk jdkfgnkdj ngkndf knkdfng kdnfg kndfkgn dkfng jk
        </p>
      </CardSlideUp>
    </Card>
  </div>
);

export const Default = SlideTemplate.bind({});

Default.args = {
  shadow: true,
  slideup: true,
  roundedcorner: false,
  width: "50%",
  height: "50%",
  backgroundImage:
    "url(https://upload.wikimedia.org/wikipedia/commons/a/a8/ESO_577-24_FORS2_VLT.jpg)",
  backgroundPosition: "center",
  borderRadius: 3,
};
