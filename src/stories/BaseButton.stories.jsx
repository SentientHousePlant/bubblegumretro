import BaseButton from "../components/Buttons/BaseButton";

export default {
  component: BaseButton,
  title: "Components/Buttons",
};

export const Default = () => (
  <BaseButton onClick={() => alert("Clicked!")}>
    <h1 style={{ margin: "0px" }}>Button</h1>
  </BaseButton>
);
