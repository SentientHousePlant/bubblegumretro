import Card from "../components/Card/Card";
import CardSlideUp from "../components/Card/CardSlideUp";

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

export const Slider = SlideTemplate.bind({});

Slider.args = {
  roundedcorner: false,
};
