import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { PolicyPage } from '../types/policy';

const privacyPolicy: PolicyPage = {
  title: "Privacy Policy",
  lastUpdated: "March 14, 2024",
  sections: [
    {
      title: "Introduction",
      content: [
        "At Pade (PADE LTD), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we use and share your personal data when you visit our website. It is important that you read this privacy policy together with any other privacy policy we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data.",
        "This privacy policy supplements other notices and privacy policies and is not intended to override them. It aims to give you information on how Pade collects and processes your personal data through your use of this website, including any data you may provide through this website.",
        "Our Privacy Policy exists to provide you with key information about:",
        "• What data we collect from you and why",
        "• How we use or process that data",
        "• How you can access and take ownership of your data",
        "• How and where you can make a complaint if you're unhappy",
        "Please read this Privacy Policy carefully and ensure that you understand it. Your acceptance of our Privacy Policy is deemed to occur upon your first use of our Site. If you do not accept and agree with this Privacy Policy, you must stop using our Site immediately."
      ]
    },
    {
      title: "Who We Are",
      content: [
        "We are Pade. We are the providers of the website https://padespace.io (referred to as the \"Site\")",
        "References to \"you\" or \"your\" refers to a user of the Site or any of our services."
      ]
    },
    {
      title: "Third-Party Links",
      content: "This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit."
    },
    {
      title: "The Data We Collect About You",
      subsections: [
        {
          title: "Device Information",
          content: [
            "Examples of Personal Information collected: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.",
            "Purpose of collection: To load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.",
            "Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.",
            "Disclosure for a business purpose: shared with our payment processor Stripe."
          ]
        },
        {
          title: "Order Information",
          content: [
            "Examples of Personal Information collected: name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number).",
            "Purpose of collection: To provide products or services to you to fulfil our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.",
            "Source of collection: Collected from you."
          ]
        }
      ]
    },
    {
      title: "How We Use Your Personal Data",
      content: [
        "We collect and use personal information in accordance with data protection laws to assist in making improvements and enhance your experience on our Site. It is also used for data analysis, statistical and troubleshooting purposes. Generally, we do not rely on consent as a legal basis for processing your personal data, but one of the following grounds will usually be used:",
        "Where we have your permission ('consent'):",
        "• To provide you with news about offers and deals that we think will be interesting to you. We will only contact you in the ways you have given us permission to do so.",
        "Where we have a justifiable reason ('legitimate interests'):",
        "• To process your data in the legitimate interest of our business in order that we may provide you with the best service or product",
        "• To send you information regarding new products and services where we can demonstrate a relationship with you and you have not told us that you do not want to receive these",
        "• To maintain our list of people who have asked not to receive direct communication from us",
        "• To help keep our website safe and secure",
        "• To allow our internal business processes to function",
        "• To undertake market research",
        "• To request feedback on our performance",
        "• To help prevent fraud and maintain security",
        "• To assist in training, quality assurance and compliance",
        "Where we must do something by law ('legal obligation'):",
        "• This means processing your personal data where it is necessary for compliance with a legal or regulatory obligation."
      ]
    },
    {
      title: "Marketing and Your Rights",
      subsections: [
        {
          title: "Marketing",
          content: [
            "We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising. You can choose to opt out of all marketing and advertising at any time by contacting hello@padespace.io"
          ]
        },
        {
          title: "Your Legal Rights",
          content: [
            "At any point you can exercise your:",
            "• Right of access – contact us for a copy of the data we hold about you",
            "• Right of rectification – let us know if the data we hold is out of date or inaccurate and we'll update it",
            "• Right to be forgotten – if you no longer want to use our services, please contact us and we'll delete all related data",
            "• Right to restrict processing – we only ever collect data we need and actively ensure we're never collecting anything over and above need",
            "• Right of portability – we will support reasonable requests to transfer your data to another organisation should you require it",
            "• Right to object to automated decision making and profiling – we do not currently use any automated profiling of any description"
          ]
        }
      ]
    },
    {
      title: "Changes and Contact",
      content: [
        "We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.",
        "For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hello@padespace.io"
      ]
    }
  ]
};

export default function PrivacyPolicy() {
  return <PolicyLayout policy={privacyPolicy} />;
}