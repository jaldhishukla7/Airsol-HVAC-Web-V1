import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy | Airsol",
  description: "How Airsol HVAC Industry collects and uses information sent through this website.",
  path: "/privacy-policy",
});

// TODO_CONFIRM: have this policy reviewed against the firm's actual practices and applicable law.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      path="/privacy-policy"
      updated="18 November 2026"
      sections={[
        {
          heading: "Who we are",
          body: [
            `This website is operated by ${SITE.name}, a ${SITE.legalForm.toLowerCase()} based in ${SITE.locality}, ${SITE.city}, ${SITE.region}, India. Questions about this policy can be sent to ${SITE.email}.`,
          ],
        },
        {
          heading: "What we collect",
          body: [
            "When you send a quote request or contact form, we receive the details you enter: your name, company, phone number, email address, project type, area, city and message, along with the page you sent it from.",
            "Our hosting provider keeps standard server logs, such as IP address, browser type and the pages requested, for security and to keep the site running. The calculators on this site run in your browser; the values you enter are not sent to us.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use form details only to respond to your enquiry, prepare quotations and manage the resulting project. We do not sell your information or use it for unrelated marketing.",
          ],
        },
        {
          heading: "Who we share it with",
          body: [
            "Form submissions are delivered to our sales inbox through an email delivery service, and the website is hosted by a cloud hosting provider. These providers process data on our behalf. We may also disclose information where the law requires it.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "We keep enquiry records for as long as needed to respond, to manage any resulting project, and to meet legal and accounting requirements.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            `You can ask us to see, correct or delete the personal information we hold about you by writing to ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
