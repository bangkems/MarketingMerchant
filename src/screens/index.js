import React from "react";
import Menu from "../components/Menu";

function index({ navigation }) {
  console.log(navigation);
  return (
    <>
      <Menu nav={navigation} />
    </>
  );
}
export default index;
