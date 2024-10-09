import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import { ConnectEmbed } from "@/lib/thirdweb";
import { client } from "@/lib/client";
import { chain } from "@/lib/chain";
import { Staking } from "@/components/Staking";

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Invest',
  description: 'Connect your wallet and stake to get INK',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Get INK'd"
      intro="Set your crypto wallet to the Base chain and use it to log into this website where you can invest R10 000 and receive a limited edition NFT bond. Stake your NFT bond below and continuously earn INK at a rate of 10% per annum. You can unstake your NFT at any time and you can withdraw your INK tokens at any time."
    >
      <div className="space-y-20">


      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <Staking />


        
      </div>
    </SimpleLayout>
  )
}
