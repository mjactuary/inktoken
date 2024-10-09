import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'How the fiat currency is invested',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Liability Driven Investment"
      intro="This approach is designed to match the inflation index of an African country, the goal would be to construct a portfolio that mirrors the inflationary liabilities of the INK token and provides returns that keep pace with inflation in the targeted African country. Here’s how such a portfolio could be structured, including specific assets and strategies that would be employed using the fiat currency received from selling the NFT bonds:"
    
    >
      <div className="space-y-20">
        <SpeakingSection title="Financial Assets">
          <Appearance
            href="#"
            title="Government-issued inflation-linked bonds:"
            description="These bonds, such as South African Inflation-Linked Bonds (ILBs) or any other available bonds in African markets, adjust their principal and interest payments based on inflation, providing a direct hedge."
            event="Perfect Match"
            cta="Learn More"
          />
          <Appearance
            href="#"
            title="Foreign Inflation-Linked Bonds"
            description="In countries where local ILBs are not available or have low liquidity, investing in global ILBs, such as U.S. Treasury Inflation-Protected Securities (TIPS), could offer inflation protection, though currency risk would need to be managed."
            event="General Match"
            cta="Learn More"
          />
          <Appearance
            href="#"
            title="High-Quality Dividend-Paying Stocks"
            description=" Companies in sectors like utilities, consumer staples, and healthcare often possess pricing power, enabling them to pass inflation costs onto consumers and maintain profitability. These types of equities can provide returns that outpace inflation over time."
            event="General Match"
            cta="Learn More"
          />
        </SpeakingSection>

        <SpeakingSection title="Physical Assets">
          <Appearance
            href="#"
            title="Real Estate"
            description="Investment in real estate properties, Real Estate Investment Trusts (REITs), or infrastructure projects can provide inflation-linked income streams. Rents and property values typically increase in line with inflation, helping hedge liabilities."
            event="Close Match"
            cta="Learn More"
          />
          <Appearance
            href="#"
            title="Commodities"
            description="Commodities like gold, oil, agricultural products, and other raw materials tend to perform well during periods of inflation, as their prices generally rise with increased inflationary pressures."
            event="General Match"
            cta="Learn More"
          />
          <Appearance
            href="#"
            title="Cash"
            description="A small portion of cash needs to be held to maintain the desired exchange rate of INK and protect it from market manipulation and general economic volatility that the crypto industry tends to experience from time to time."
            event="General Match"
            cta="Learn More"
          />
        </SpeakingSection>


      </div>
    </SimpleLayout>
  )
}
