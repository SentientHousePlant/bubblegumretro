import BaseButton from "../components/Buttons/BaseButton";

export default {
  component: BaseButton,
  title: "Components/BaseButton",
};

export const Default = () => (
  <BaseButton>
    <p>Button</p>
  </BaseButton>
);

export const Tight = () => (
  <BaseButton tight>
    <p>Button</p>
  </BaseButton>
);
