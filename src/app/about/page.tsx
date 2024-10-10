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
import portraitImage from '@/images/portrait.png'

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
  title: 'About',
  description:
    'The Danger of Inflation',
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
          The Dangers of Inflation to the Average African
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Inflation is often referred to as the silent tax. It slowly erodes the value of money over time, and its effects are felt deeply in developing economies like those in Africa. For the average African, inflation can be devastating, reducing purchasing power, increasing the cost of living, and putting financial stability at risk.
            </p>
            <h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Understanding Inflation Risk</h2>
            <p>
            Inflation risk refers to the potential loss of purchasing power due to rising prices over time. As prices increase, each unit of currency buys fewer goods and services, which means that the value of money declines. For example, what might cost 100 local currency units today could cost 150 units in just a few years, depending on the inflation rate. For individuals with savings or fixed incomes, this devaluation can severely impact their ability to afford basic necessities.
            </p>
            <h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
            Inflation in African Economies</h2>
            <p>
            Many African economies are particularly vulnerable to inflation for several reasons, including reliance on imported goods, political instability, and fluctuating exchange rates. Countries like Zimbabwe and Nigeria have experienced periods of hyperinflation, where prices have skyrocketed at alarming rates. Even in more stable economies, annual inflation rates can be high compared to global averages, making it challenging for the average person to save or plan for the future.
            </p>
            <p>
            In these environments, the currency&apos;s value may diminish rapidly, and people&apos;s savings can become worthless within a short time. Those who rely on cash or traditional banking systems are often the most affected, especially in regions where financial literacy is low and alternative investments are scarce.
            </p>
            <h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
            How Inflation Hurts the Average African</h2>
            
            <ul className="list-disc pl-5 text-zinc-800 dark:text-zinc-100">
  <li className="text-lg">Erosion of Savings:</li>
  <p>In times of high inflation, money sitting in a savings account loses value daily. What might seem like a secure financial plan can quickly turn into a liability, as the actual worth of those savings diminishes.
</p>
  <li className="text-lg">Rising Cost of Living:</li>
  <p>Inflation increases the prices of basic goods and services like food, fuel, and housing. For the average African household, which often spends a large portion of its income on necessities, rising prices mean having to stretch their finances further.
</p>
  <li className="text-lg">Uncertainty and Volatility:</li>
  <p>Inflation creates uncertainty in financial planning. For individuals who rely on fixed incomes, such as retirees or salaried workers, it becomes difficult to maintain the same quality of life when inflation is high.
</p>
  <li className="text-lg">Lack of Financial Instruments:</li>
  <p>In many African countries, the options for protecting against inflation, such as inflation-linked bonds or diversified investment options, are limited. The lack of access to financial instruments makes it harder for individuals to hedge against inflation risk.
</p>
</ul>

<h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
Stablecoins: A New Solution for Inflation Risk</h2>
            <p>
            This is where INK, an inflation-linked stablecoin, can offer a revolutionary solution. Unlike traditional currencies that are susceptible to inflation, INK is pegged to an inflation index. This means that its value automatically adjusts in line with inflation, ensuring that holders retain their purchasing power, even in times of economic uncertainty.
            </p>
<p>By offering a stable and secure store of value, INK helps protect individuals against the dangers of inflation. Whether you&apos;re saving for the future, sending money across borders, or conducting daily transactions, INK ensures that your money retains its value, even as prices rise.</p>


<h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
Why INK Matters</h2>
            <p>
            INK represents a major step forward for financial empowerment in Africa. As inflation continues to affect millions of people across the continent, having access to a stable, inflation-linked currency offers protection against one of the most common and destructive financial risks. With INK, individuals can save, plan, and invest without the fear of their money losing value overnight.

            </p>
            <p>
            In a continent where economic stability can be unpredictable, solutions like INK provide a vital lifeline for individuals seeking to safeguard their wealth and secure a better financial future.

            </p>

            <h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
            Conclusion</h2>
            <p>
            Inflation risk is a significant challenge for the average African, but new innovations like INK offer hope. By creating a stablecoin that is pegged to inflation, we can provide a tool that allows people to protect their savings, combat the rising cost of living, and achieve financial security in uncertain times.

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
