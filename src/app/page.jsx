import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon } from '@/components/SocialIcons'
import { PhoneIcon } from '@/components/SocialIcons'
import { EmailIcon } from '@/components/SocialIcons'
import logoPMC from '@/images/logos/pmc.png'
import logoRidea from '@/images/logos/ridea.png'
import logoLinkStTw from '@/images/logos/linkst-tw.jpg'
import logoLTU from '@/images/logos/ltu.png'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'


function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Cta>更多 ...</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'PMC_財團法人精密機械研究發展中心',
      title: '軟體工程師 ',
      logo: logoPMC,
      start: '2023-08',
      end: {
        label: '現在',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: '好點子數位創意有限公司',
      title: '後端工程師',
      logo: logoRidea,
      start: '2023-06',
      end: '2023-08',
    },
    {
      company: '智林國際股份有限公司',
      title: '系統開發工程師',
      logo: logoLinkStTw,
      start: '2022-12',
      end: '2023-05',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3">工作經驗</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Educational() {
  let educational = [
    {
      company: '嶺東科技大學',
      title: '資管所',
      logo: logoLTU,
      start: '2020-09',
      end: {
        label: '2022-08',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: '嶺東科技大學',
      title: '資管系',
      logo: logoLTU,
      start: '2017-09',
      end: '2020-06',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3">學歷</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {educational.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            我叫蕭偉泓，畢業於嶺東科大資管所，曾在智林國際股份有限公司和好點子數位創意有限公司擔任後端工程師，目前在PMC精機中心擔任軟體工程師，
            專長是網站開發、AI應用開發、軟硬體控制開發，熟悉Python、Tensorflow、Scikit-Learn、Javascript、PHP、MySQL。
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/weihung0831?tab=repositories"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="tel:+886-977-246-186"
              aria-label="Follow on Phone"
              icon={PhoneIcon}
            />
            <SocialLink
              href="mailto: e11222@mail.pmc.org.tw"
              aria-label="Follow on Email"
              icon={EmailIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Educational />
          </div>
        </div>
      </Container>
    </>
  )
}
