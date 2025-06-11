import type { ReactNode } from "react";

export type ResourceLink = {
  title: string;
  href: string;
  description: ReactNode;
};

export type ResourceContent = {
  Advocacy: ResourceLink[];
  HealthAndWellbeing: ResourceLink[];
  Education: ResourceLink[];
  Parenting: ResourceLink[];
  Social: ResourceLink[];
  Allyship: ResourceLink[];
};

export const Advocacy: ResourceLink[] = [
  {
    title: "Georgia Equality",
    href: "http://georgiaequality.org",
    description: "Advancing fairness, safety, and opportunity for LGBT Georgians",
  },
  {
    title: "PFLAG",
    href: "https://pflag.org/",
    description: "Peer-to-peer support and advocacy for the LGBTQ community",
  },
  {
    title: "National Black Justice Coalition",
    href: "https://nbjc.org/",
    description: "Working to end racism, homophobia, and LGBTQ/SGL bias and stigma",
  },
];

export const HealthAndWellbeing: ResourceLink[] = [
  {
    title: "Equality Clinic of Augusta",
    href: "https://equalityclinicaugusta.squarespace.com/",
    description: "Providing equitable care for all",
  },
  {
    title: "Augusta Area Health Providers",
    href: "https://www.augustahealth.org/patient-family-info/lgbtq-area-providers",
    description: "Providers who offer LGBTQ services",
  },
  {
    title: "Starland Family Practice",
    href: "https://www.starlandfp.com/",
    description: "Primary care for all individuals (Savannah, GA)",
  },
  {
    title: "Lost-N-Found Youth",
    href: "https://lnfy.org/",
    description: "Safety and shelter for Atlanta's LGBTQ+ youth",
  },
  {
    title: "Freedom Through Recovery",
    href: "https://www.freedomthroughrecovery.org/",
    description: (
      <>
        Alphabet Gang Recovery meeting Saturdays at 10am. For meeting info &amp; peer support please call Rachael Baker
        at <a href="tel:9125168752">(912) 516-8752</a> (226 S. Zetterower Ave. Statesboro, GA 30458)
      </>
    ),
  },
  {
    title: "The Camilla Foundation",
    href: "https://thecamillafoundation.org/",
    description: (
      <>
        TCF is a non-profit based in Bulloch County that works to remove financial barriers to mental health services
        for underprivileged youth (ages 3 to 18) in our community. Contact{" "}
        <a href="mailto:kalie@thecamillafoundation.org">kalie@thecamillafoundation.org</a> or{" "}
        <a href="tel:3347828856">(334) 782-8856</a>.
      </>
    ),
  },
  {
    title: "Refuge Recovery",
    href: "https://recoverydharma.org/meetings/?search=states&meeting=recovery-dharma-ga",
    description: (
      <>
        Refuge Recovery has started up in Statesboro for those in addiction recovery (substance and process alike), and
        is inclusive of the LGBTQ+ community.
      </>
    ),
  },
  {
    title: "Peer Recovery and Respite Center of Augusta",
    href: "https://www.gmhcn.org/augusta",
    description: (
      <>
        Georgians 18 years of age or older who self-identify as living with a mental health concern may utilize one of
        the four private bedrooms for 7 nights every 30 days as an alternative to psychiatric hospitalization. Respite
        is also available for peers who may be overwhelmed by life challenges, and could benefit from support.
        Participation in recovery and wellness activities is entirely voluntary.
        <br />
        Phone: <a href="tel:7064264030">(706) 426-4030</a>
        <br />
        24-Hour Augusta Peer2Peer Warm Line: <a href="tel:7067383548">(706) 738-3548</a>
      </>
    ),
  },
  {
    title: "Thrive | LGBTQ+ Care",
    href: "https://www.yourthrivecare.com",
    description: (
      <>
        Thrive is a safe, affirming healthcare membership community for LGBTQ+ individuals and families. We offer
        inclusive primary care, gender-affirming care, and wellness services tailored to your unique journey-all in a
        supportive environment designed to help you thrive with confidence and compassion. Whether you're seeking
        trusted medical care, gender-affirming support, or wellness enhancements, Thrive is here to walk beside you
        every step of the way.
      </>
    ),
  },
];

export const Education: ResourceLink[] = [
  {
    title: "GLSEN",
    href: "https://www.glsen.org/",
    description: <>Creating a better world for LGBTQ students</>,
  },
  {
    title: "Lifeguard Workshop (The Trevor Project)",
    href: "https://www.thetrevorproject.org/education/",
    description: <>Free online learning resources for adults who work with LGBTQ youth</>,
  },
];

export const Parenting: ResourceLink[] = [
  {
    title: "Colage",
    href: "https://www.colage.org/",
    description: <>Dedicated to nurturing, supporting and empowering people with LGBTQ+ caregivers</>,
  },
  {
    title: "Family Acceptance Project",
    href: "https://familyproject.sfsu.edu/",
    description: <>Strengthening families to support LGBTQ youth</>,
  },
];

export const Social: ResourceLink[] = [
  {
    title: "First City Pride Center",
    href: "https://www.firstcitypridecenter.org/",
    description: <>Inclusive advocacy, social, and service organization in Savannah, GA</>,
  },
  {
    title: "SC Pride",
    href: "https://scpride.org/",
    description: <>South Carolina Pride Movement</>,
  },
];

export const Allyship: ResourceLink[] = [
  {
    title: "Free2Luv",
    href: "https://free2luv.org/5-ways-become-ally-lgbtq-youth/",
    description: <>Learn how to be an ally for LGBTQ youth</>,
  },
  {
    title: "Buffer",
    href: "https://buffer.com/resources/lgbtqia-resources/",
    description: <>Educational resources for learning to be an LGBTQ ally</>,
  },
];
