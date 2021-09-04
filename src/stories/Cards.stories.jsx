import { template } from "lodash";
import Card from "../components/Card/Card";
import CardSlideUp from "../components/Card/CardSlideUp";
import CardSection from "../components/Card/CardSection";

export default {
  component: Card,
  title: "Components/Cards",
};

const SlideTemplate = (args) => (
  <div style={{ width: "700px", height: "700px" }}>
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

const UpperLowerTemplate = (args) => (
  <div style={{ width: "700px", height: "700px" }}>
    <Card {...args}>
      <CardSection height={"40%"}>Part 1</CardSection>
      <CardSection height={"60%"} background="red">
        Part 2
      </CardSection>
    </Card>
  </div>
);

export const Slider = SlideTemplate.bind({});
export const TwoParter = UpperLowerTemplate.bind({});

Slider.args = {
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

TwoParter.args = {
  shadow: true,
  width: "50%",
  height: "50%",
  borderRadius: 3,
};
