import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/inflation2.png'

import { ConnectEmbed } from "@/lib/thirdweb";
import { client } from "@/lib/client";
import { chain } from "@/lib/chain";
import { Staking } from "@/components/Staking";


function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Tokenomics',
  description:
    'Understanding how the token works',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        
        </div>
        <div className="lg:order-first lg:row-span-2">







          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Understanding INK Stablecoin Tokenomics
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            The INK stablecoin introduces a novel approach to tokenomics, aligning its value directly with real-world economic conditions. Here’s how it works:
</p>
            <h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
            1. NFT Bond Purchase</h2>
            <p>
            Investors begin by purchasing an NFT bond using fiat currency. The fiat currency is invested in a liability driven approach that tracks the inflation index.
</p>
            <h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
            2. Staking for INK Emission</h2>
            <p>
            Once acquired, the NFT bond is staked, allowing it to continuously generate INK tokens at a nominal rate of 10% per annum. Investors can withdraw these tokens at any time.
</p>
            <h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
            3. Dynamic Exchange Rate</h2>
            <p>
            The exchange rate of INK tokens to fiat currency is not fixed; instead, it fluctuates based on actual inflation rates:
   
            </p>
            
            <ul>
  <li > - If inflation is 10% at year end, 1 INK token = 1 fiat currency</li>
  <li > - If inflation is lower than 10%, 1 INK token &lt; 1 fiat currency
  </li>
  <li > - If inflation is higher than 10%, 1 INK token &gt; 1 fiat currency
  </li>

</ul>

<h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
Protection Against Volatility</h2>
            <p>
            INK’s fiat currency reserves are structured to exceed the amount of INK tokens issued in the first year by 10 times because of the NFT bond. This buffer protects the token from short-term price volatility, such as market manipulation or token dumping, ensuring a more stable value.
</p>
<p>By linking the value of INK to inflation, this innovative stablecoin offers investors a unique opportunity to hedge against inflationary pressures while providing stability and security in their investments. The INK tokenomics model not only promotes financial resilience but also positions itself to de facto stablecoin for Africa.
</p>
            








          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              info@inflationlinked.com
            </SocialLink>
          </ul>

          <p className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"></p>

          <div className="space-y-20">
            <ConnectEmbed
                client={client}
               chain={chain}
              />
            <Staking />
          </div>

        </div>

        





      </div>
    </Container>
  )
}
