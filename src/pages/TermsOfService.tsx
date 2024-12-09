import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { PolicyPage } from '../types/policy';

const termsOfService: PolicyPage = {
  title: "Terms of Service",
  lastUpdated: "December 5th, 2024",
  sections: [
    {
      title: "About Us",
      content: [
        "We are Pade. We operate the website https://padespace.io. To contact us, please email us at hello@padespace.io.",
        "Through accessing our website and services, you agree to comply with and by bound by the following Terms of Use. Please read these terms carefully before using our services."
      ]
    },
    {
      title: "Agreement",
      subsections: [
        {
          title: "Entire Agreement",
          content: "The Contract is the entire agreement between you and us in relation to its subject matter. You acknowledge that you have not relied on any statement, promise or representation or assurance or warranty that is not set out in the Contract."
        },
        {
          title: "Language",
          content: "These Terms and the Contract are made only in the English language."
        }
      ]
    },
    {
      title: "Orders and Payment",
      subsections: [
        {
          title: "Placing Your Order",
          content: "Please follow the onscreen prompts to place your order. You may only submit an order using the method set out on the site. Each order is an offer by you to buy the services specified in the order (Services) subject to these Terms."
        },
        {
          title: "Order Confirmation",
          content: "After you place your order, you will receive an email from us acknowledging that we have received it, and confirming our acceptance of your order (Order Confirmation), at which point and on which date (Commencement Date) the Contract between you and us will come into existence."
        },
        {
          title: "Payment",
          content: "Payment for the Services is in advance. We will take your first payment upon acceptance of your order; any future recurring payments as determined by you in your Order will follow."
        }
      ]
    },
    {
      title: "Cancellation and Refunds",
      subsections: [
        {
          title: "Cancelling Your Order",
          content: [
            "Should you purchase any of our services which are charged in the form of a recurring subscription payment, you may cancel the Contract by cancelling via your billing dashboard.",
            "Your cancellation will be effective from 23:59 on the day immediately preceding your next scheduled payment date.",
            "If you need further support with this, or are experiencing any difficulties, please contact us at hello@padespace.io"
          ]
        },
        {
          title: "Refunds",
          content: "No Refunds: Due to the immediate access provided to our resources and services, all payments are final and non-refundable. No exemptions will be made to this policy; through purchasing any of our Services you agree to be bound by this clause and accept full responsibility for your purchase decision."
        }
      ]
    },
    {
      title: "Use of Services",
      content: [
        "Eligibility: You must be at least 18 years old to use our services.",
        "Account Security: You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account.",
        "Prohibited Conduct: You agree not to use our Services for any unlawful purpose, including but not limited to:",
        "• Violating any local, state, national or international law infringing on the rights of others",
        "• Distributing viruses or other harmful software interfering with the operation of our Site or Services"
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All Intellectual Property Rights in or arising out of or in connection with the Services will be owned by us.",
        "You agree to grant us a fully paid-up, non-exclusive, royalty-free, non-transferable licence to copy and modify any materials provided by you to us for the term of the Contract for the purpose of providing the Services to you."
      ]
    },
    {
      title: "Liability and Disclaimers",
      subsections: [
        {
          title: "Disclaimer of Warranties",
          content: [
            "As-Is Basis: Our services are provided on an \"as-is\" and \"as available\" basis. We do not guarantee that our services will be uninterrupted, error-free, or meet your specific requirements.",
            "No Guarantees: While we strive to help you achieve your desired goals through engaging with our Services, we do not guarantee any specific results from your participation in our Services."
          ]
        },
        {
          title: "Limitation of Liability",
          content: [
            "No Liability: To the maximum extent permitted by law, Pade shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our Services.",
            "Total Liability: Our total liability to you for any claims arising from these Terms of Use or your use of our services shall not exceed the amount paid by you in relation to your order of our Services."
          ]
        }
      ]
    },
    {
      title: "Events Outside Our Control",
      content: [
        "We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under the Contract that is caused by any act or event beyond our reasonable control (Event Outside Our Control), including without limitation:",
        "• Acts of God, flood, drought, earthquake or other natural disaster",
        "• Epidemic or pandemic",
        "• Terrorist attack, civil war, civil commotion or riots",
        "• Nuclear, chemical or biological contamination",
        "• Any law or any action taken by a government or public authority",
        "• Collapse of buildings, fire, explosion or accident",
        "• Any labour or trade dispute, strikes or industrial action",
        "If an Event Outside Our Control takes place, we will contact you as soon as reasonably possible to notify you and our obligations will be suspended for the duration of the event."
      ]
    },
    {
      title: "Final Provisions",
      subsections: [
        {
          title: "Governing Law",
          content: "These Terms of Use shall be governed by and construed in accordance with the laws of England, without regard to its conflict of law principles."
        },
        {
          title: "Changes to Terms",
          content: "We may update these Terms of Use from time to time. Any changes will be posted on this page, and the \"Effective Date\" will be updated accordingly. Your continued use of our services after any changes constitutes your acceptance of the new terms."
        }
      ]
    }
  ]
};

export default function TermsOfService() {
  return <PolicyLayout policy={termsOfService} />;
}