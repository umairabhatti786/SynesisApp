import React, { useState } from "react";
import { Text, View } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import Checkbox from "../../../components/CheckBox";
import CustomButton from "../../../components/CustomButton";
import Layout from "../../../components/Layout";

type Props = {
  navigation?: any;
};

const Terms = ({ navigation }: Props) => {
  const [isChecked, setIsChecked] = useState(true);
  const text =
    "At directoapp, we recognize that privacy is an important issue, so we design and operate our services with the protection of your privacy in mind. This Privacy Policy outlines the types of personal information we gather when you use directoapp, services, as well as the steps we take to protect it.The following principles apply to the personally identifying information we ask for and that you provide. “Personally identifying information” is information that individually identifies you, such as your name, physical address or email address. User Contentdirectoapp allows users to share and follow content under a safe environment, in its professional social structure, audio, chats, video, document sharing and all forms of our social Community. All users are responsible for their own behavior and interaction online. All content and ";
  return (
    <ScreenLayout style={{}}>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          marginTop: "15%",
          zIndex: 20,
        }}
      >
        <CustomText
          text={"Nu Terms & Conditions"}
          size={22}
          fontFam="Poppins"
          weight={700}
          style={{ zIndex: 999 }}
        />
        <View
          style={{
            paddingHorizontal: 30,
            marginTop: "7%",
          }}
        >
          <CustomText
            text={
              "directoapp Inc., we recognize that privacy is an important issue, so we design and operate our services with the protection of your privacy in mind. This Privacy Policy outlines the types of personal information we gather when you use directoapp Inc., and services, as well as the steps we take to protect it. The following principles apply to the personally identifying information we ask for and that you provide. “Personally identifying information” is information that individually identifies you, such as your name, physical address, or email address"
            }
            size={16}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={"User Content"}
            size={16}
            fontFam="Raleway"
            weight={700}
            style={{ marginVertical: 20 }}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "directoapp Inc. allows users to share and follow content in a safe environment, in its professional social structure, audio, chats, video, document sharing, and all forms of our social community. All users are responsible for their own behavior and interaction online. All content and users are in charge of what they wish and choose to share with other users. We expect all users to follow our company guidelines as stated above and below. We have inserted the following rules for our directoapp Inc. platform(s)."
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "We do not condone any volatile acts, nor do we encourage any acts of violence or any discriminating language which may construct towards violence or acts of violence. We do not allow and or support any graphic expressions of violence and or racism in our community platform(s). This includes extreme descriptions or depictions of violence and active or clear threats of violence towards any individual or group. We do not represent a social platform for acceptance of bullying. We understand there will be debatable open conversations. Expression of opinions is normal but under a respectable approach where an individual is not crossing the line to bully or offend another individual in a bullying manner"
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "directoapp Inc. does not believe in attacking any person or group for their belief, ethnicity, nationality, race, religion, disability, age, sexual orientation, or gender. We want to keep a fun and safe environment for our users to engage in social professionalism. We do not promote or encourage any self-abuse, self-harm, drugs, alcohol, or any eating disorders."
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "We do not allow personal information to spread or be shared without the person and or owner's consent. All information such as name, username, email address, home address, and all business information such as company name, business name, phone number, email, address, social security number, bank account, details, and any and all financial documents or information. In accordance, we do not allow any content toward children. We do not condone harm towards or against children. We do not allow sexually explicit content such as sex videos or pornographic content. "
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={"Data Collection            "}
            size={16}
            fontFam="Raleway"
            weight={700}
            style={{ marginBottom: 10 }}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "directoapp Inc., is an innovative cross-platform software and technology company connecting the dots in Blockchain technology and operations; while providing valuable solutions. Technology is improving and we are here to add an impact by providing a strategic outlook. directoapp Inc., collects limited non-personally identifying information your browser makes available whenever you visit a website. This log information includes your Internet Protocol address, browser type, browser language, and the date and time of your query that may uniquely identify your browser. We use this information to operate, develop and improve our services."
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "Our services require you to register for an account. directoapp Inc., asks you for some personal information in order to create an account (typically your username, email and passcode, and a Bio, and we will use that information to provide the service. When we require personally identifying information, we will inform you about the types of information we collect and how we use it upon joining directoapp Inc.. We hope this will help you make an informed decision about sharing your personal information with us."
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />
          <CustomText
            text={"Information Sharing            "}
            size={16}
            fontFam="Raleway"
            weight={700}
            style={{ marginBottom: 10 }}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "We do not rent or sell your personally-identifying information to other companies or individuals unless we have your consent. We may share such information in any of the following limited circumstances: We have your consent."
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "We provide such information to trusted businesses or persons for the sole purpose of processing personally identifying information on our behalf. When this is done, it is subject to agreements that oblige those parties to process such information only on our instructions and in compliance with this Privacy Policy and appropriate confidentiality and security measure"
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "We believe that we are required by law or have a good faith belief that access, preservation, or disclosure of such information is reasonably necessary to protect the rights, property, or safety of directoapp Inc., its users, or the publi"
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "If you have an account, we may share the information submitted under your account among all of our services in order to provide you with a smooth experience and to help improve the quality of our services. We will not disclose your account information to other people or non-affiliated companies, except in the limited circumstances described in this Policy or with your consent."
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "We may store and process personal information collected on our site in the United States or any other country in which directoapp Inc., or its agents maintain facilities. By using our services, you consent to the transfer of your information among these facilities, including those located outside your country."
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "In the event of a transfer of ownership of directoapp Inc., we will provide notice before any personally identifying information is transferred and becomes subject to a different privacy policy. We may share aggregated information with others."
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={"Information Security            "}
            size={16}
            fontFam="Raleway"
            weight={700}
            style={{ marginBottom: 10 }}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "In the event of a transfer of ownership of directoapp Inc., we will provide notice before any personally identifying information is transferred and becomes subject to a different privacy policy. We may share aggregated information with others."
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={"Choice/Opt-out       "}
            size={16}
            fontFam="Raleway"
            weight={700}
            style={{ marginBottom: 10 }}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "directoapp Inc., provides users the opportunity to opt-in, opt-out, or change preferences in the Settings' located in the top right corner. These options are made available when you sign-up for our services. Alternatively, you may contact us at Team@directoapp.com "
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />

          <CustomText
            text={
              "Some communications (e.g. important account notifications and billing information) are necessary for all directoapp Inc., customers. You must cancel your directoapp Inc.. account to unsubscribe from these communications. To do so please contact us at the Telegram address listed below"
            }
            size={16}
            style={{ marginBottom: 20 }}
            fontFam="Raleway"
            weight={400}
            lineHeight={26.31}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox setIsChecked={setIsChecked} isChecked={isChecked} />
          <CustomText
            text={"I agree to the terms and conditions"}
            size={18}
            fontFam="Poppins"
            weight={400}
            style={{ zIndex: 999 }}
          />
        </View>
        <View
          style={{
            width: "80%",
            marginTop: "10%",
          }}
        >
          <CustomButton
            text="Continue"
            borderRadius={39}
            onPress={() => {
              navigation.navigate("BottomNavigator");
            }}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Terms;
