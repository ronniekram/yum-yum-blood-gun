import type { NextPage } from "next";
import tw, { styled } from "twin.macro";

const sections = [
  {
    headline: `General`,
    content: (
      <>
        <p>
          Goblin Delight, LLC, a Pennsylvania Limited Liability Company, builds commercial games such a CHORIZO and Yum Yum Bloodgun. These SERVICES are provided by and are intended for use as is.
        </p>
        <p>
          This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
        </p>
        <p>
          If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    headline: `Information Collection and Use`,
    content: (
      <>
        <p>
          For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to email address and, separately, we may generate a unique ID for analytics purposes. The information that we request will be retained by us and used as described in this privacy policy.
        </p>
        <p>
          Our games use third party services that may collect information used to identify you.
          Link to privacy policy of third party service providers used by our games:
        </p>
        <a href="https://gameanalytics.com/privacy/" target="_blank" rel="noreferrer">
          Game Analytics
        </a>
      </>
    ),
  },
  {
    headline: `Log Data`,
    content: (
      <>
        <p>
          We want to inform you that whenever you use our Services, in a case of an error in the game we collect data and information (through third party products) on your device called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the game when utilizing our Service, the time and date of your use of the Service, and other statistics.
        </p>
      </>
    ),
  },
  {
    headline: `Cookies`,
    content: (
      <>
        <p>
          Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
        </p>
        <p>
          This Service does not use these “cookies” explicitly. However, the game may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
        </p>
      </>
    ),
  },
  {
    headline: `Service Providers`,
    content: (
      <>
        <p>
          We may employ third-party companies and individuals due to the following reasons:
        </p>
        <ul>
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <p>
          We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
        </p>
      </>
    ),
  },
  {
    headline: `Security`,
    content: (
      <>
        <p>
          We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
        </p>
      </>
    ),
  },
  {
    headline: `Links to Other Sites`,
    content: (
      <>
        <p>
          This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>
      </>
    ),
  },
  {
    headline: `Children's Privacy`,
    content: (
      <>
        <p>
          These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
        </p>
      </>
    ),
  },
  {
    headline: `Changes to This Privacy Policy`,
    content: (
      <>
        <p>
          We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
        </p>
      </>
    ),
  },
  {
    headline: `Contact Us`,
    content: (
      <>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:privacy@goblindelight.com">privacy@goblindelight.com</a>.
        </p>
      </>
    ),
  },
];

const Section = styled.section`
  ${tw`flex flex-col space-y-3`};
  h2 {
    ${tw`text-[32px] md:(text-[40px]) xl:(text-5xl) font-bold`};
    ${tw`leading-[34px] md:(leading-[42px]) xl:(leading-[52px])`};
  }

  div {
    ${tw`flex flex-col space-y-2.5`};
  }

  p {
    ${tw`text-sm md:(text-base) xl:(text-lg)`};
  }

  ul {
    ${tw`list-inside list-disc`};
    ${tw`ml-4`};
    ${tw`text-sm xl:(text-base)`};
  }

  a {
    ${tw`font-semi underline`};
    ${tw`transition duration-300 ease-in-out`};
    ${tw`hover:(text-red-200)`};
  }
`;

const Privacy: NextPage = () => {
  return (
    <div tw="w-full bg-black text-white pb-20 font-sans md:(pb-28) xl:(pb-40)">
      <article tw="w-full mx-auto max-w-[61.625rem] flex flex-col px-5 md:(w-[79%] px-0) xl:(w-[65%])">
        <h1 tw="text-center text-[40px] font-bold py-5 md:(text-6xl py-8) xl:(text-7xl)">Privacy Policy</h1>
        <p tw="py-1 text-sm italic md:(text-base) xl:(text-lg)">Last Updated: May 8, 2023</p>
        <div tw="w-full flex flex-col pt-6 space-y-14 xl:(pt-16)">
          {sections.map((section) => (
            <Section key={section.headline}>
              <h2>{section.headline}</h2>
              <div>
                {section.content}
              </div>
            </Section>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Privacy;
