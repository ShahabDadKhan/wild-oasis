import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTabel from "../features/cabins/CabinTable";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log("data", data));
  }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTabel />
      </Row>
    </>
  );
}

export default Cabins;
