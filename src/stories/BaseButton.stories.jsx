import BaseButton from "../components/Buttons/BaseButton";

export default {
  component: BaseButton,
  title: "Components/BaseButton",
};

export const Default = () => (
  <BaseButton>
    <h1 style={{ margin: "0px" }}>Button</h1>
  </BaseButton>
);

export const Tight = () => (
  <BaseButton tight>
    <h1 style={{ margin: "0px" }}>Button</h1>
  </BaseButton>
);
