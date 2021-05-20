import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContact } from "../../Redux/Phone/operationApi";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import { getLoading } from "../../Redux/Phone/phone_selector";
import FormPhonebook from "../PhoneBook";
import ContactItem from "../ContactItem";
import Filter from "../Filter";
import Section from "../Section";

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContact(), [dispatch]));
  // const isLoading = useSelector((state) => getLoading(state));

  return (
    <div>
      <FormPhonebook />
      {/* {isLoading && <LinearProgress color="secondary" />} */}
      <Filter />
      <Section title="Contacts list">
        <ContactItem />{" "}
      </Section>
    </div>
  );
};

export default Contacts;
